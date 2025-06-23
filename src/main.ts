interface OrgNode {
  prevdesignation?: string;
  designation: string;
  scale: string;
  email: string;
  status: string;
  posting: string;
  prevshortform?: string;
  shortform: string;
  subordinates?: OrgNode[];
}

const getStatusColor = (status: string): string => {
  if (!status) return 'text-red-500';
  switch (status.toLowerCase()) {
    case 'create': return 'text-purple-500';
    case 'update': return 'text-yellow-900';
    case 'delete': return 'text-red-500';
    case 'active': return 'text-green-500';
    case 'inactive': return 'text-orange-500';
    default: return 'text-red-500';
  }
};

const createNode = (node: OrgNode, isRoot: boolean = false): HTMLElement => {
  const box = document.createElement('div');
  box.className = 'node-box';

  box.innerHTML = `
    <div class="designation">
      ${node.prevdesignation ? '<span class="prev-designation">' + node.prevdesignation + '</span> ' : ''}${node.designation}
      ${' | '}
      ${node.prevshortform ? '<span class="prev-designation">' + node.prevshortform + '</span> ' : ''}${node.shortform}
      (${node.scale})
    </div>
    <div class="details">
      Posting: ${node.posting}, Status: <span class="${getStatusColor(node.status)}"><b>${node.status}</b></span>, Email: ${node.email}
    </div>
  `;

  const container = document.createElement('div');
  container.className = 'node-container relative';

  if (!isRoot) {
    const connector = document.createElement('div');
    connector.className = 'connector-line';
    container.appendChild(connector);
  }

  if (node.subordinates?.length) {
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = '-';
    toggleBtn.className = 'toggle-button mr-1 w-4 h-4 text-xs border rounded text-gray-700 bg-white';
    toggleBtn.setAttribute('aria-expanded', 'true');

    const toggleWrapper = document.createElement('div');
    toggleWrapper.className = 'flex items-center';

    const childrenContainer = document.createElement('div');
    childrenContainer.className = 'children-container';

    node.subordinates.forEach(child => {
      childrenContainer.appendChild(createNode(child));
    });

    toggleBtn.addEventListener('click', () => {
      const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', String(!expanded));
      toggleBtn.textContent = expanded ? '+' : '-';
      childrenContainer.style.display = expanded ? 'none' : '';
    });

    toggleWrapper.appendChild(toggleBtn);
    toggleWrapper.appendChild(box);
    container.appendChild(toggleWrapper);
    container.appendChild(childrenContainer);
  } else {
    container.appendChild(box);
  }

  return container;
};

document.addEventListener('DOMContentLoaded', async () => {
  const root = document.getElementById('app');
  if (!root) return console.error('Root element not found');

  const dateElement = document.getElementById('print-date');
  if (dateElement) {
    dateElement.textContent = new Date().toLocaleString();
  }

  const style = document.createElement('style');
  style.textContent = `
    .node-box button {
      cursor: pointer;
    }
    .node-container {
      position: relative;
      margin-left: 24px;
    }
    .connector-line {
      position: absolute;
      left: -12px;
      top: 12px;
      width: 40px;
      height: 2px;
      background-color: #94a3b8;
    }
    .children-container {
      position: relative;
      display: flex;
      flex-direction: column;
    }
    #app > .node-container {
      margin-left: 0;
    }
    .print-header {
      text-align: center;
      margin-bottom: 20px;
    }
    .print-header h1 {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    .print-meta {
      font-size: 12px;
      color: #666;
    }
      .toggle-button {
  min-width: 1.25rem;
  height: 1.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

  `;
  document.head.appendChild(style);

  try {
    const res = await fetch('https://mocki.io/v1/58eaed4b-8cc4-45d4-be8b-7a38c4632c4c');
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const data: OrgNode = await res.json();

    const orgContainer = document.createElement('div');
    orgContainer.className = 'org-container';
    orgContainer.appendChild(createNode(data, true));

    root.appendChild(orgContainer);
  } catch (err) {
    console.error('Error loading organogram:', err);
  }
});
