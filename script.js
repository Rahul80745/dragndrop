var draggedItem = null;
var successPopup = document.getElementById('successPopup');

// Add event listeners to the draggable items
var items = document.querySelectorAll('.item');
items.forEach(function (item) {
  item.addEventListener('dragstart', handleDragStart);
});

// Add event listeners to the containers
var containers = document.querySelectorAll('.container');
containers.forEach(function (container) {
  container.addEventListener('dragover', handleDragOver);
  container.addEventListener('drop', handleDrop);
});

// Add event listener to the reset button
var resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', handleReset);

// Drag start event handler
function handleDragStart(event) {
  draggedItem = this;
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('text/html', this.outerHTML);
}

// Drag over event handler
function handleDragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
}

// Drop event handler
function handleDrop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData('text/html');
  event.target.innerHTML += data;
  draggedItem.parentNode.removeChild(draggedItem);
  draggedItem = null;
  showSuccessMessage();
}

// Reset button click event handler
function handleReset() {
  var container1 = document.getElementById('container1');
  var container2 = document.getElementById('container2');
  container1.innerHTML = '<img class="item" src="item1.jpg" draggable="true"><img class="item" src="item2.jpg" draggable="true"><img class="item" src="item3.jpg" draggable="true">';
  container2.innerHTML = '';
  draggedItem = null;
  hideSuccessMessage();
}

// Display success message
function showSuccessMessage() {
  successPopup.classList.add('show');
  setTimeout(hideSuccessMessage, 2000)
}
// Hide success message
function hideSuccessMessage() {
  successPopup.classList.remove('show');}