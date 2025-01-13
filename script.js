// Basic drag logic for multiple .draggable-rect elements

// Track which element is being dragged and offset within that element
let activeRect = null;
let offsetX = 0;
let offsetY = 0;

document.addEventListener("mousedown", (event) => {
  // Check if user clicked on a draggable rectangle
  if (event.target.closest(".draggable-rect")) {
    activeRect = event.target.closest(".draggable-rect");
    // Calculate offset between mouse position and top-left of the rectangle
    const rectBounds = activeRect.getBoundingClientRect();
    offsetX = event.clientX - rectBounds.left;
    offsetY = event.clientY - rectBounds.top;
  }
});

document.addEventListener("mousemove", (event) => {
  if (activeRect) {
    // Move the rectangle with the mouse
    const newLeft = event.clientX - offsetX;
    const newTop = event.clientY - offsetY;
    activeRect.style.left = `${newLeft}px`;
    activeRect.style.top = `${newTop}px`;
  }
});

document.addEventListener("mouseup", () => {
  // Stop dragging
  activeRect = null;
});
