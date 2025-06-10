import organogram from '../src/data/organogram.json';
function createNode(node) {
    const container = document.createElement('div');
    container.className = 'border rounded-xl p-4 bg-white shadow-md m-2';
    const title = document.createElement('div');
    title.className = 'font-bold text-blue-700';
    title.textContent = `${node.designation} (${node.scale})`;
    const posting = document.createElement('div');
    posting.className = 'text-sm text-gray-600';
    posting.textContent = `Posting: ${node.posting}`;
    container.appendChild(title);
    container.appendChild(posting);
    if (node.subordinates && Array.isArray(node.subordinates)) {
        const childrenContainer = document.createElement('div');
        childrenContainer.className = 'ml-6 border-l pl-4 mt-2';
        node.subordinates.forEach((child) => {
            childrenContainer.appendChild(createNode(child));
        });
        container.appendChild(childrenContainer);
    }
    return container;
}
const root = document.getElementById('app');
if (root && Array.isArray(organogram)) {
    root.innerHTML = '';
    organogram.forEach((topLevelNode) => {
        const nodeElement = createNode(topLevelNode);
        root.appendChild(nodeElement);
    });
}
console.log('Organogram Data:', organogram);
