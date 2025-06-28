"use client";
import { Canvas } from "@react-three/fiber";
import { Loader, OrbitControls } from "@react-three/drei";
import { Model } from "@/features/model/ui/modelView";
import { Suspense } from "react";

export default function Home() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: 20000, // Увеличиваем дальность прорисовки
            position: [3000, 3000, 3000], // Позиция камеры (x, y, z)
          }}
        >
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Model url="/krsk.glb" />
          <OrbitControls />
        </Canvas>
      </Suspense>
    </div>
  );
}
