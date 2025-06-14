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
  box.className = 'text-[10px] border rounded bg-white p-0.5 shadow-sm m-0.5';

  box.innerHTML = `
    <div class="font-semibold text-blue-600 leading-none">
      ${node.prevdesignation ? '<s>' + node.prevdesignation + '</s> ' : ''}${node.designation}
      ${' | '}
      ${node.prevshortform ? '<s>' + node.prevshortform + '</s> ' : ''}${node.shortform}
      (${node.scale})
    </div>
    <div class="text-gray-500 leading-none mt-0.5">
      Posting: ${node.posting}, Status: <span class="${getStatusColor(node.status)}"><b>${node.status}</b></span>, Email: ${node.email}
    </div>
  `;

  const container = document.createElement('div');
  container.className = 'node-container relative';

  if (!isRoot) {
    const connector = document.createElement('div');
    connector.className = 'absolute connector-line';
    container.appendChild(connector);
  }

  container.appendChild(box);

  if (node.subordinates?.length) {
    const childrenContainer = document.createElement('div');
    childrenContainer.className = 'children-container ml-4';
    
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

  const style = document.createElement('style');
  style.textContent = `
    .node-container {
      position: relative;
      margin-left: 12px;
    }
    .connector-line {
      left: -12px;
      top: 12px;
      width: 12px;
      height: 2px;
      background-color: #94a3b8;
    }
    .connector-line::before {
      content: '';
      position: absolute;
      left: 0;
      top: -12px;
      height: 12px;
      width: 2px;
      background-color: #94a3b8;
    }
    .children-container {
      position: relative;
      display: flex;
      flex-direction: column;
    }
    .children-container > .node-container:not(:last-child)::after {
      content: '';
      position: absolute;
      left: -12px;
      top: 0;
      height: 100%;
      width: 2px;
      background-color: #94a3b8;
    }
    #app > .node-container {
      margin-left: 0;
    }
  `;
  document.head.appendChild(style);

  try {
    const res = await fetch('https://run.mocky.io/v3/b740668d-1e79-4c91-866a-7060ca647654');
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const data: OrgNode = await res.json();
    root.appendChild(createNode(data, true));
  } catch (err) {
    console.error('Error loading organogram:', err);
  }
});

