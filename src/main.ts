interface OrgNode {
  designation: string;
  scale: string;
  email: string;
  posting: string;
  shortform: string;
  subordinates?: OrgNode[];
}

const createNode = (node: OrgNode, isRoot: boolean = false): HTMLElement => {
  const box = document.createElement('div');
  box.className = 'node-box';

  box.innerHTML = `
    <div class="designation">
      ${node.designation} | ${node.shortform} (${node.scale})
    </div>
    <div class="details">
      Posting: ${node.posting}, Email: ${node.email}
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

  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    .node-box {
      font-size: 10px;
      border: 1px solid #e2e8f0;
      border-radius: 4px;
      background-color: white;
      padding: 6px;
      margin: 4px 2px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      position: relative;
      z-index: 2;
      break-inside: avoid;
    }

    .connector-line::before {
      content: '';
      position: absolute;
      left: 0;
      top: -16px;
      height: 16px;
      width: 2px;
      background-color: #94a3b8;
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

    /* Text Styles */
    .designation {
      font-weight: 600;
      color: #2563eb;
      line-height: 1.3;
      margin-bottom: 2px;
    }

    .details {
      color: #6b7280;
      font-size: 9px;
      line-height: 1.3;
    }

    /* Print Specific Styles */
    @media print {
      @page {
        size: A4 portrait;
        margin: 15mm 10mm;
      }

      * {
        print-color-adjust: exact;
        -webkit-print-color-adjust: exact;
      }

      body {
        padding: 0 !important;
        margin: 0 !important;
        background: white !important;
        font-family: Arial, sans-serif;
      }

      #app {
        max-width: 100% !important;
        padding: 0 !important;
        margin: 0 !important;
        box-shadow: none !important;
      }

      .node-box {
        background: white !important;
        border-color: #e2e8f0 !important;
        box-shadow: none !important;
        break-inside: avoid;
        page-break-inside: avoid;
      }

      .connector-line,
      .connector-line::before,
      .children-container > .node-container:not(:last-child)::after {
        background-color: #94a3b8 !important;
      }

      .print-header {
        position: fixed;
        top: 0;
        width: 100%;
      }
    }

    /* Special case for root node connector */
    #app > .node-container > .connector-line {
      display: none;
    }

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
    const res = await fetch('https://run.mocky.io/v3/b740668d-1e79-4c91-866a-7060ca647654');
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
