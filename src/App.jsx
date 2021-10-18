import * as THREE from 'three';
import { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import { EffectComposer, DepthOfField } from '@react-three/postprocessing';

function Dodecaedro({ z }) {
  const ref = useRef();
  const { nodes, materials } = useGLTF('/dodecaedro-transformed.glb');
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(1),
    y: THREE.MathUtils.randFloatSpread(height),
    rX: Math.random() * Math.PI,
    rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });

  useFrame(() => {
    ref.current.rotation.set((data.rX += 0.005), (data.rY += 0.005), (data.rZ += 0.005));
    ref.current.position.set(data.x * width, (data.y += 0.03), z);
    if (data.y > height) {
      data.y = -height;
    }
  });

  return <mesh ref={ref} geometry={nodes.Mesh_0.geometry} material={materials['Scene_-_Root']} scale={2} />;
}

export default function Geometry({ count = 100 }) {
  return (
    <Canvas gl={{ alpha: false }} camera={{ near: 0.01, far: 100 }}>
      <color attach="background" args={['#0ADEF5']} />
      <Suspense fallback={null}>
        <Environment preset="sunset" />
        {Array.from({ length: count }, (_, i) => (
          <Dodecaedro key={i} z={-i} />
        ))}
        <EffectComposer>
          <DepthOfField target={[0, 0, 40]} focalLength={0.5} bokehScale={8} height={700} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
