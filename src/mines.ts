export {};

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
      ${node.scale}
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

    const verticalLine = document.createElement('div');
    verticalLine.className = 'vertical-line';
    childrenContainer.appendChild(verticalLine);

    node.subordinates.forEach(child => {
      childrenContainer.appendChild(createNode(child));
    });

    toggleBtn.addEventListener('click', () => {
      const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', String(!expanded));
      toggleBtn.textContent = expanded ? '+' : '-';
      childrenContainer.style.display = expanded ? 'none' : '';
      verticalLine.style.display = expanded ? 'none' : '';
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
    .vertical-line {
      position: absolute;
      top: 0;
      left: 6px;
      width: 2px;
      height: 100%;
      background-color: #94a3b8;
      z-index: -1;
    }
    .children-container {
      position: relative;
      display: flex;
      flex-direction: column;
      padding-left: 18px;
    }
    #app > .node-container {
      margin-left: 0;
    }
    .designation {
      font-weight: 600;
      color: #2563eb;
      margin-bottom: 4px;
    }
    .details {
      color: #6b7280;
      font-size: 11px;
      line-height: 1.3;
    }
    .prev-designation {
      text-decoration: line-through;
      opacity: 0.5;
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
    const res = await fetch('https://mocki.io/v1/22c6dd9c-47bb-43fb-9153-b8580dc50dfa');
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const rawData = await res.json();

    const normalizeKeys = (node: any): OrgNode => ({
      prevdesignation: node.prevdesignation ?? node.prevDesignation,
      designation: node.designation,
      scale: node.scale,
      email: node.email,
      status: node.status,
      posting: node.posting,
      prevshortform: node.prevshortform ?? node.prevShortForm,
      shortform: node.shortform ?? node.shortForm ?? '',
      subordinates: Array.isArray(node.subordinates)
        ? node.subordinates.map(normalizeKeys)
        : []
    });

    let subordinates: OrgNode[] = [];

    if (Array.isArray(rawData)) {
      subordinates = rawData.map(normalizeKeys);
    } else if (Array.isArray(rawData.data)) {
      subordinates = rawData.data.map(normalizeKeys);
    } else if (typeof rawData === 'object' && rawData.designation) {
      subordinates = [normalizeKeys(rawData)];
    } else {
      console.error('Unsupported data structure:', rawData);
    }

    const mlwcRoot: OrgNode = {
      designation: 'Mines Labour Welfare Commissioner',
      shortform: 'MLWC',
      scale: '(BS-20)',
      email: 'mlwc@example.com',
      status: 'active',
      posting: 'Head Office',
      subordinates: subordinates
    };

    const orgContainer = document.createElement('div');
    orgContainer.className = 'org-container';

    orgContainer.appendChild(createNode(mlwcRoot, true));

    root.appendChild(orgContainer);
  } catch (err) {
    console.error('Error loading organogram:', err);
  }
});


