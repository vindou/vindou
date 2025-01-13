// We'll track the following for each rectangle:
//  - lastX / lastY: to compute how much the rectangle has moved per mouse event
//  - velocityX / velocityY: for inertia
//  - isDragging: a flag to see if the user is currently dragging

// A map from element -> state object
const rectState = new Map();

// Current rectangle being dragged
let activeRect = null;

// Global positions for offset
let offsetX = 0;
let offsetY = 0;

// On mousedown, set up dragging
document.addEventListener("mousedown", (event) => {
  const rectElement = event.target.closest(".draggable-rect");
  if (rectElement) {
    activeRect = rectElement;

    // If we don't have a state object for this rect yet, create one
    if (!rectState.has(rectElement)) {
      rectState.set(rectElement, {
        velocityX: 0,
        velocityY: 0,
        lastX: event.clientX,
        lastY: event.clientY,
        isDragging: false
      });
    }

    const state = rectState.get(rectElement);

    // Compute offset between mouse and top-left of rectangle
    const rectBounds = rectElement.getBoundingClientRect();
    offsetX = event.clientX - rectBounds.left;
    offsetY = event.clientY - rectBounds.top;

    // Initialize velocity to zero on mouse-down
    state.velocityX = 0;
    state.velocityY = 0;
    state.lastX = event.clientX;
    state.lastY = event.clientY;
    state.isDragging = true;

    // Add .dragging class to disable text selection
    document.body.classList.add("dragging");
  }
});

// On mousemove, if we are dragging, move the rectangle
document.addEventListener("mousemove", (event) => {
  if (activeRect) {
    const state = rectState.get(activeRect);
    if (!state || !state.isDragging) return;

    // Current position
    const newLeft = event.clientX - offsetX;
    const newTop  = event.clientY - offsetY;
    activeRect.style.left = `${newLeft}px`;
    activeRect.style.top  = `${newTop}px`;

    // Calculate velocity from change in mouse position
    const dx = event.clientX - state.lastX;
    const dy = event.clientY - state.lastY;
    state.velocityX = dx;
    state.velocityY = dy;

    state.lastX = event.clientX;
    state.lastY = event.clientY;
  }
});

// On mouseup, release the rectangle and apply inertia
document.addEventListener("mouseup", () => {
  if (activeRect) {
    const state = rectState.get(activeRect);
    if (!state) return;

    state.isDragging = false;
    // Stop the drag, but now we let the rectangle “coast”
    requestAnimationFrame(() => applyInertia(activeRect));

    // Remove the .dragging class
    document.body.classList.remove("dragging");

    // Clear activeRect
    activeRect = null;
  }
});

// Apply inertia after the user lets go
function applyInertia(element) {
  const state = rectState.get(element);
  if (!state) return;

  // If the user is dragging again or velocity is negligible, stop.
  if (state.isDragging || (Math.abs(state.velocityX) < 0.01 && Math.abs(state.velocityY) < 0.01)) {
    // Zero out velocity so we don't accumulate
    state.velocityX = 0;
    state.velocityY = 0;
    return;
  }

  // Update position based on velocity
  const currentLeft = parseFloat(element.style.left) || 0;
  const currentTop  = parseFloat(element.style.top)  || 0;
  element.style.left = `${currentLeft + state.velocityX}px`;
  element.style.top  = `${currentTop + state.velocityY}px`;

  // Dampen velocity to simulate friction
  state.velocityX *= 0.9;
  state.velocityY *= 0.9;

  // Use requestAnimationFrame for smooth motion
  requestAnimationFrame(() => applyInertia(element));
}


