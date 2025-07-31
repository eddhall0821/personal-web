"use client";

import { useControls } from "leva";
import React, { useEffect, useState } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { EffectComposer, GodRays, Noise } from "@react-three/postprocessing";
import BloomEffects from "./Bloom";

export const Effects = () => {
  // add controller
  const datas = useController();

  const [lightMesh, setLightMesh] =
    useState<
      React.MutableRefObject<
        THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>
      >
    >();

  const { scene } = useThree();

  useEffect(() => {
    if (scene.userData.refs && scene.userData.refs.lightMesh) {
      const lightMeshRef = scene.userData.refs.lightMesh;
      setLightMesh(lightMeshRef);
    }
  }, [scene.userData.refs]);

  return (
    <EffectComposer>
      <>
        {lightMesh && datas.enabled && (
          <GodRays sun={lightMesh.current!} {...datas} />
        )}
        <BloomEffects />
        <Noise opacity={0.05} />
      </>
    </EffectComposer>
  );
};

const useController = () => {
  const datas = useControls("GodRays", {
    enabled: true,
    samples: { value: 100, min: 10, max: 200, step: 10 },
    density: { value: 0.96, min: 0, max: 1, step: 0.01 },
    decay: { value: 0.98, min: 0, max: 1, step: 0.01 },
    weight: { value: 2, min: 0, max: 2, step: 0.01 },
    exposure: { value: 0.5, min: 0, max: 1, step: 0.01 },
    clampMax: { value: 0.1, min: 0, max: 1, step: 0.01 },
    blur: { value: 1, min: 0, max: 1, step: 1 },
    kernelSize: {
      // https://vanruesc.github.io/postprocessing/public/docs/file/src/materials/ConvolutionMaterial.js.html#lineNumber124
      options: {
        VERY_SMALL: 0,
        SMALL: 1,
        MEDIUM: 2,
        LARGE: 3,
        VERY_LARGE: 4,
        HUGE: 5,
      },
      value: 1,
    },
    blendFunction: {
      // https://vanruesc.github.io/postprocessing/public/docs/file/src/effects/blending/BlendFunction.js.html
      options: {
        SKIP: 0,
        ADD: 1,
        ALPHA: 2,
        AVERAGE: 3,
        COLOR_BURN: 4,
        COLOR_DODGE: 5,
        DARKEN: 6,
        DIFFERENCE: 7,
        EXCLUSION: 8,
        LIGHTEN: 9,
        MULTIPLY: 10,
        DIVIDE: 11,
        NEGATION: 12,
        NORMAL: 13,
        OVERLAY: 14,
        REFLECT: 15,
        SCREEN: 16,
        SOFT_LIGHT: 17,
        SUBTRACT: 18,
      },
      // value: 16,
      value: 18,
    },
  });
  return datas;
};
