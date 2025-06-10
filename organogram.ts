interface Node {
  designation: string;
  scale: string;
  posting: string;
  subordinates?: Node[];
}

export function renderNode(node: Node): HTMLElement {
  const container = document.createElement("div");
  container.className = "flex flex-col items-center";

  const card = document.createElement("div");
  card.className = "bg-white border rounded-xl shadow-md px-4 py-2 mb-4 text-center w-fit";
  card.innerHTML = `
    <h2 class="text-lg font-semibold">${node.designation}</h2>
    <p class="text-sm text-gray-600">Scale: ${node.scale}</p>
    <p class="text-sm text-gray-600">Posting: ${node.posting}</p>
  `;

  container.appendChild(card);

  if (node.subordinates && node.subordinates.length > 0) {
    const line = document.createElement("div");
    line.className = "h-5 w-1 bg-gray-400 mb-2";
    container.appendChild(line);

    const childrenContainer = document.createElement("div");
    childrenContainer.className = "flex gap-4 flex-wrap justify-center";

    node.subordinates.forEach(sub => {
      childrenContainer.appendChild(renderNode(sub));
    });

    container.appendChild(childrenContainer);
  }

  return container;
}

