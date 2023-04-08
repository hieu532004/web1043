const items = document.querySelectorAll('.item');
const dropzone = document.querySelector('.dropzone');

// Drag & Drop handlers
function handleDragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
}

function handleDragOver(event) {
  event.preventDefault();
  dropzone.classList.add('drag-over');
}

function handleDragLeave(event) {
  dropzone.classList.remove('drag-over');
}

function handleDrop(event) {
  event.preventDefault();
  const id = event.dataTransfer.getData('text/plain');
  const draggedItem = document.getElementById(id);
  dropzone.appendChild(draggedItem);
  dropzone.classList.remove('drag-over');
}

// Add event listeners to items
items.forEach(item => {
  item.addEventListener('dragstart', handleDragStart);
});

// Add event listeners to dropzone
dropzone.addEventListener('dragover', handleDragOver);
dropzone.addEventListener('dragleave', handleDragLeave);
dropzone.addEventListener('drop', handleDrop);