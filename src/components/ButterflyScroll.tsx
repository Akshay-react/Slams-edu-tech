import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface GeoJSONFeature {
  type: string;
  geometry: {
    type: string;
    coordinates: any[];
  };
}

const GlobeWithMouseAndScroll: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // --- Scene & Camera ---
    const scene = new THREE.Scene();
    scene.background = null; // transparent

    const camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 4);

    // --- Renderer ---
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // --- Lights ---
    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambient);
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    // --- Main Group (everything attached) ---
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // --- Globe Sphere (transparent) ---
    const globeGeo = new THREE.SphereGeometry(0.85, 64, 64);
    const globeMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.05,
      metalness: 0.7,
      roughness: 0.4,
    });
    const globe = new THREE.Mesh(globeGeo, globeMat);
    globeGroup.add(globe);

    // --- Wireframe grid ---
    const gridLines = new THREE.WireframeGeometry(
      new THREE.SphereGeometry(0.86, 36, 18)
    );
    const grid = new THREE.LineSegments(
      gridLines,
      new THREE.LineBasicMaterial({ color: 0x888888, linewidth: 1 })
    );
    globeGroup.add(grid);

    // --- Borders Group ---
    const bordersGroup = new THREE.Group();
    globeGroup.add(bordersGroup);

    fetch("/geojson/world_borders.json")
      .then((res) => res.json())
      .then((data) => {
        (data.features as GeoJSONFeature[]).forEach((feat) => {
          const coords = feat.geometry.coordinates;
          const type = feat.geometry.type;

          if (type === "LineString" || type === "MultiLineString") {
            const multi = type === "LineString" ? [coords] : coords;

            multi.forEach((loop: any) => {
              const points: THREE.Vector3[] = [];

              // --- Simplify by skipping points ---
              const step = Math.max(1, Math.floor(loop.length / 50)); // ~50 points per line
              for (let i = 0; i < loop.length; i += step) {
                const pt = loop[i];
                const lon = (pt[0] * Math.PI) / 180;
                const lat = (pt[1] * Math.PI) / 180;

                const x = Math.cos(lat) * Math.cos(lon) * 0.87;
                const y = Math.sin(lat) * 0.87;
                const z = Math.cos(lat) * Math.sin(lon) * 0.87;
                points.push(new THREE.Vector3(x, y, z));
              }

              if (points.length > 1) {
                const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
                const lineMat = new THREE.LineBasicMaterial({
                  color: 0xffffff,
                  linewidth: 1.2,
                });
                const borderLine = new THREE.Line(lineGeo, lineMat);
                bordersGroup.add(borderLine);
              }
            });
          }
        });
      })
      .catch((err) => console.error("GeoJSON load error:", err));

    // --- Mouse rotation ---
    let targetX = 0,
      targetY = 0,
      currentX = 0,
      currentY = 0;

    const handleMouse = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * Math.PI * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * Math.PI;
    };
    window.addEventListener("mousemove", handleMouse);

    // --- Scroll rotation ---
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY * 0.002;
    };
    window.addEventListener("scroll", handleScroll);

    // --- Animate ---
    const animate = () => {
      requestAnimationFrame(animate);

      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      const totalRotationY = currentX + scrollY;

      globeGroup.rotation.y = totalRotationY * 0.75;
      globeGroup.rotation.x = currentY * 0.75;

      renderer.render(scene, camera);
    };
    animate();

    // --- Handle resize ---
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // --- Cleanup ---
    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />;
};

export default GlobeWithMouseAndScroll;