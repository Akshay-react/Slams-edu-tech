import { Canvas, useFrame } from "@react-three/fiber";
import { TorusKnot } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const centerX = 5;
const centerY = 5;
const radiusX = 2;
const radiusY = 4;

const angle = Math.PI / 4; // ✅ 45 degree rotation

function Knot(): JSX.Element {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // normal oval coordinates
    const x = Math.cos(t) * radiusX;
    const y = Math.sin(t) * radiusY;

    // rotate oval by 45°
    const rotatedX =
      x * Math.cos(angle) - y * Math.sin(angle);

    const rotatedY =
      x * Math.sin(angle) + y * Math.cos(angle);

    ref.current.position.x = centerX + rotatedX;
    ref.current.position.y = centerY + rotatedY;
    ref.current.position.z = 0;

    // rotation animation
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <TorusKnot ref={ref} args={[0.6, 0.35, 200, 32]}>
      <meshStandardMaterial
        color="#52567D"
        metalness={0.5}
        roughness={0.2}
      />
    </TorusKnot>
  );
}

function Ring(): JSX.Element {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // opposite phase
    const x = Math.cos(t + Math.PI) * radiusX;
    const y = Math.sin(t + Math.PI) * radiusY;

    // rotate oval by 45°
    const rotatedX =
      x * Math.cos(angle) - y * Math.sin(angle);

    const rotatedY =
      x * Math.sin(angle) + y * Math.cos(angle);

    ref.current.position.x = centerX + rotatedX;
    ref.current.position.y = centerY + rotatedY;
    ref.current.position.z = 0;

    // rotation animation
    ref.current.rotation.x += 0.008;
    ref.current.rotation.y += 0.008;
  });

  return (
    <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[0.6, 0.35, 200, 32]} />
      <meshStandardMaterial
        color="#52567D"
        metalness={0.6}
        roughness={0.2}
      />
    </mesh>
  );
}

export default function Section3D(): JSX.Element {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} />

        <Ring />
        <Knot />

      </Canvas>
    </div>
  );
}