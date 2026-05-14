import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function SentientSphere() {
  const sphere = useRef();

  useFrame((state) => {
    if (!sphere.current) return;
    sphere.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  return (
    <mesh ref={sphere} scale={3.2}>
      <sphereGeometry args={[1, 48, 48]} />
      <meshBasicMaterial
        color="#777777"
        wireframe
        transparent
        opacity={0.22}
      />
    </mesh>
  );
}

export default function Sphere() {
  return (
    <div style={sphereWrapper}>
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 3.2], fov: 65 }}>
        <SentientSphere />
      </Canvas>
    </div>
  );
}

const sphereWrapper = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
  pointerEvents: "none",
};