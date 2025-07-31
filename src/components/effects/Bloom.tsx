"use client";

import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { BlurPass, Resizer, KernelSize } from "postprocessing";
const BloomEffects = () => {
  return (
    <EffectComposer>
      <Bloom
        intensity={1.0} // The bloom intensity.
        blurPass={undefined} // A blur pass.
        kernelSize={KernelSize.LARGE} // blur kernel size
        luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
        luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
      />
    </EffectComposer>
  );
};

export default BloomEffects;
