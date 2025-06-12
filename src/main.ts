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

const createNode = (node: OrgNode): HTMLElement => {
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
  container.className = 'ml-1 pl-1 border-l border-gray-300 mt-0.5';

  container.appendChild(box);

  if (node.subordinates?.length) {
    node.subordinates.forEach(child => container.appendChild(createNode(child)));
  }

  return container;
};

document.addEventListener('DOMContentLoaded', async () => {
  const root = document.getElementById('app');
  if (!root) return console.error('Root element not found');

  try {
    const res = await fetch('https://run.mocky.io/v3/d679ea83-83e1-484d-9764-bdbdb54946de');
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const data: OrgNode = await res.json();
    root.appendChild(createNode(data));
  } catch (err) {
    console.error('Error loading organogram:', err);
  }
});

