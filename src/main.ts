// main.ts

interface OrgNode {
  designation: string;
  scale: string;
  posting: string;
  shortform?: string;
  subordinates?: OrgNode[];
}

function createNode(node: OrgNode): HTMLElement {
  const container = document.createElement('div');
  container.className = 'border rounded-xl p-4 bg-white shadow-md m-2';

  const title = document.createElement('div');
  title.className = 'font-bold text-blue-700';
  const titleText = `${node.designation} | ${node.shortform || ''} (${node.scale})`;
  title.textContent = titleText;

  const posting = document.createElement('div');
  posting.className = 'text-sm text-gray-600';
  posting.textContent = `Posting: ${node.posting}`;

  container.appendChild(title);
  container.appendChild(posting);

  if (Array.isArray(node.subordinates) && node.subordinates.length > 0) {
    const childrenContainer = document.createElement('div');
    childrenContainer.className = 'ml-6 border-l pl-4 mt-2';

    node.subordinates.forEach((child) => {
      childrenContainer.appendChild(createNode(child));
    });

    container.appendChild(childrenContainer);
  }

  return container;
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');

  fetch('https://run.mocky.io/v3/63413c29-501d-4180-9373-917ea8bb71fc')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data: OrgNode) => {
      if (root) {
        const tree = createNode(data);
        root.appendChild(tree);
      } else {
        console.error('Root element not found');
      }
    })
    .catch(error => {
      console.error('Error fetching organogram data:', error);
    });
});
