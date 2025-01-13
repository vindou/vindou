// Basic drag logic for multiple .draggable-rect elements

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

    // 2) Add the .dragging class to body when we start dragging
    document.body.classList.add("dragging");
  }
});

document.addEventListener("mousemove", (event) => {
  if (activeRect) {
    const newLeft = event.clientX - offsetX;
    const newTop = event.clientY - offsetY;
    activeRect.style.left = `${newLeft}px`;
    activeRect.style.top = `${newTop}px`;
  }
});

document.addEventListener("mouseup", () => {
  // End the drag
  if (activeRect) {
    activeRect = null;
    // Remove the .dragging class once dragging stops
    document.body.classList.remove("dragging");
  }
});
