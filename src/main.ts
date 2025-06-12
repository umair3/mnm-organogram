// main.ts

interface OrgNode {
  designation: string;
  scale: string;
  email: string;
  status: string;
  posting: string;
  shortform: string;
  subordinates?: OrgNode[];
}

const getStatusColor = (status: string): string => {
  if (!status) return 'text-red-500';
  switch (status.toLowerCase()) {
    case 'new': return 'text-yellow-500';
    case 'active': return 'text-green-500';
    default: return 'text-red-500';
  }
};

const createNode = (node: OrgNode): HTMLElement => {
  const box = document.createElement('div');
  box.className = 'text-[10px] border rounded bg-white p-0.5 shadow-sm m-0.5';

  box.innerHTML = `
    <div class="font-semibold text-blue-600 leading-none">
      ${node.designation}${node.shortform ? ' | ' + node.shortform : ''} (${node.scale})
    </div>
    <div class="text-gray-500 leading-none mt-0.5">Posting: ${node.posting}, Status: <span class="${getStatusColor(node.status)}">${node.status || 'inactive'}</span>, Email: ${node.email}</div>
  `;

  if (node.subordinates?.length) {
    const children = document.createElement('div');
    children.className = 'ml-1 pl-1 border-l border-gray-300 mt-0.5';
    node.subordinates.forEach(child => children.appendChild(createNode(child)));
    box.appendChild(children);
  }

  return box;
};

document.addEventListener('DOMContentLoaded', async () => {
  const root = document.getElementById('app');
  if (!root) return console.error('Root element not found');

  try {
    const res = await fetch('https://run.mocky.io/v3/742e00e1-8ab9-4f16-93a4-58ffb744f2d1');
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const data: OrgNode = await res.json();
    root.appendChild(createNode(data));
  } catch (err) {
    console.error('Error loading organogram:', err);
  }
});
