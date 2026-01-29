// threejs-bg.js — Optimized for performance & offline use

export function initThreeJS() {
  if (typeof THREE === 'undefined') return;

  const container = document.getElementById('threejs-container');
  if (!container) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // Lights
  const ambient = new THREE.AmbientLight(0x1a1a2e, 0.3);
  scene.add(ambient);
  const dir = new THREE.DirectionalLight(0x00f0ff, 0.7);
  dir.position.set(10, 10, 10);
  scene.add(dir);

  // Central sphere
  const sphereGeo = new THREE.SphereGeometry(2.8, 64, 64);
  const sphereMat = new THREE.MeshStandardMaterial({
    color: 0x0c0c14,
    metalness: 0.9,
    roughness: 0.1,
    emissive: 0x001020,
    emissiveIntensity: 0.2
  });
  const sphere = new THREE.Mesh(sphereGeo, sphereMat);
  scene.add(sphere);

  // Wireframe helper
  const grid = new THREE.GridHelper(80, 40, 0x00f0ff, 0x1a1a2e);
  grid.material.opacity = 0.08;
  grid.material.transparent = true;
  scene.add(grid);

  camera.position.z = 12;

  const animate = () => {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.0015;
    sphere.rotation.y += 0.002;
    renderer.render(scene, camera);
  };
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}
