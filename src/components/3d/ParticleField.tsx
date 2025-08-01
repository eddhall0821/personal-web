import { Points, PointMaterial } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

export const ParticleField = () => {
  const particles = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 2000; i++) {
      const x = THREE.MathUtils.randFloatSpread(20); // -10 ~ 10
      const y = THREE.MathUtils.randFloatSpread(20);
      const z = THREE.MathUtils.randFloatSpread(20);
      positions.push(x, y, z);
    }
    return new Float32Array(positions);
  }, []);

  return (
    <Points positions={particles} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.05}
        sizeAttenuation
        depthWrite={false}
        opacity={0.3}
      />
    </Points>
  );
};
