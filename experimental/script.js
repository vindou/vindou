//////////////////////////////////////////////////////
// DRAGGABLE LOGIC FOR ALL .draggable-rect ELEMENTS //
//////////////////////////////////////////////////////

let activeRect = null;
let offsetX = 0;
let offsetY = 0;

// On mouse down
document.addEventListener("mousedown", (event) => {
  const rect = event.target.closest(".draggable-rect");
  if (rect) {
    activeRect = rect;
    const bounds = rect.getBoundingClientRect();
    offsetX = event.clientX - bounds.left;
    offsetY = event.clientY - bounds.top;

    // Disable text selection (via .dragging class)
    document.body.classList.add("dragging");
  }
});

// On mouse move
document.addEventListener("mousemove", (event) => {
  if (activeRect) {
    activeRect.style.left = (event.clientX - offsetX) + "px";
    activeRect.style.top  = (event.clientY - offsetY) + "px";
  }
});

// On mouse up
document.addEventListener("mouseup", () => {
  activeRect = null;
  document.body.classList.remove("dragging");
});

//////////////////////////////////////////////////////
// THREE.JS 3D VIEWER LOGIC FOR #three-canvas-container
//////////////////////////////////////////////////////

let scene, camera, renderer, controls;

init3D();
animate();

// Basic Three.js init
function init3D() {
  // Scene
  scene = new THREE.Scene();

  // Camera
  //   The aspect ratio is 250px (width of draggable) minus some padding?
  //   but let's just assume ~ "width: 100%" inside that container is 250px wide,
  //   or bigger if you override the .draggable-rect to be bigger.
  //   Let's do a typical aspect ratio, say 4:3 or 16:9. We'll just do 1 for now
  //   but you can refine as needed.
  camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
  camera.position.set(0, 0, 15);

  // Renderer
  const container = document.getElementById("three-canvas-container");
  renderer = new THREE.WebGLRenderer({ antialias: true });
  // Fit the container
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  // Orbit Controls
  controls = new THREE.OrbitControls(camera, renderer.domElement);

  // Basic lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
  dirLight.position.set(5, 5, 5);
  scene.add(dirLight);

  // Example geometry in wireframe
  // (TorusKnot is just a placeholder for demonstration)
  const geometry = new THREE.TorusKnotGeometry(3, 1, 100, 16);
  const material = new THREE.MeshBasicMaterial({
    color: 0xff5400,
    wireframe: true
  });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  /*
  // If you have a local glTF file you'd like to load,
  // you can do something like this, after including the glTFLoader script:

  const loader = new THREE.GLTFLoader();
  loader.load('path/to/yourExportedModel.gltf', (gltf) => {
    // force wireframe
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.material.wireframe = true;
        child.material.color.setHex(0xff5400);
      }
    });
    scene.add(gltf.scene);
  });
  */

  // Keep the camera “fitting” the scene a bit better
  fitCameraToObject(camera, mesh, 2); // optional helper
}

// Basic animate loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

/** Helper to fit camera to an object’s bounding sphere */
function fitCameraToObject(cam, obj, offset = 1.25) {
  const box = new THREE.Box3().setFromObject(obj);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());

  const largestDim = Math.max(size.x, size.y, size.z);
  const fov = cam.fov * (Math.PI / 180);
  let cameraZ = Math.abs(largestDim / 2 / Math.sin(fov / 2));

  cameraZ *= offset; // add a bit of offset to move the camera further out

  cam.position.z = cameraZ;
  cam.lookAt(center);
  cam.updateProjectionMatrix();
}
