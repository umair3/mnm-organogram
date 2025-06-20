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

  container.appendChild(box);

  if (node.subordinates?.length) {
    const childrenContainer = document.createElement('div');
    childrenContainer.className = 'children-container';
    
    node.subordinates.forEach(child => {
      childrenContainer.appendChild(createNode(child));
    });
    
    container.appendChild(childrenContainer);
  }

  return container;
};

document.addEventListener('DOMContentLoaded', async () => {
  const root = document.getElementById('app');
  if (!root) return console.error('Root element not found');

  // Set print date
  const dateElement = document.getElementById('print-date');
  if (dateElement) {
    dateElement.textContent = new Date().toLocaleString();
  }

  // Add print-specific styles
  const style = document.createElement('style');
  style.textContent = `
    .node-container {
      position: relative;
      margin-left: 24px;
    }
    .connector-line {
      position: absolute;
      left: -12px;
      top: 12px;
      width: 12px;
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
      
  `;
  document.head.appendChild(style);

  try {
    const res = await fetch('https://mocki.io/v1/df3ea9b7-7027-4a99-b7c2-5196fb813ced');
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
