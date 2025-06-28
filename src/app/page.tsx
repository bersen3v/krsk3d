"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "@/features/model/ui/modelView";

export default function Home() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 20000, // Увеличиваем дальность прорисовки
          position: [0, 0, 10], // Позиция камеры (x, y, z)
        }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Model url="/krsk.glb" />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
