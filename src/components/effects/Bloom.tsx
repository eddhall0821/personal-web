"use client";

import { Bloom } from "@react-three/postprocessing";
import { useControls, Leva } from "leva";

const BloomEffects = () => {
  const {
    autoRotate,
    mipmapBlur,
    luminanceThreshold,
    luminanceSmoothing,
    intensity,
  } = useControls("bloom", {
    autoRotate: true,
    mipmapBlur: true,
    luminanceThreshold: { value: 0.4, min: 0, max: 2, step: 0.01 },
    luminanceSmoothing: { value: 0.03, min: 0, max: 1, step: 0.001 },
    intensity: { value: 0.8, min: 0, max: 5, step: 0.01 },
  });

  return (
    <Bloom
      autoRotate={autoRotate}
      mipmapBlur={mipmapBlur}
      luminanceThreshold={luminanceThreshold}
      luminanceSmoothing={luminanceSmoothing}
      intensity={intensity}
    />
  );
};

export default BloomEffects;
