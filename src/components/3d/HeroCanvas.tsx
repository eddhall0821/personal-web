"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { SpiderModels } from "@/components/models/Spider";
import { Effects } from "@/components/effects/Effects";
import { Lights } from "@/components/effects/Lights";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useControls } from "leva";
import { OrbitControls, Stats, Text } from "@react-three/drei";
import BloomEffects from "@/components/effects/Bloom";
import { PlaneModel } from "@/components/models/Plane";
import { Html, useProgress } from "@react-three/drei";
import Loader from "@/components/Loader";

const HeroCanvas = () => {
  const sphereRef = useRef<THREE.Mesh>(null!);
  const {
    autoRotate,
    mipmapBlur,
    luminanceThreshold,
    luminanceSmoothing,
    intensity,
  } = useControls({
    autoRotate: !0,
    mipmapBlur: !0,
    luminanceThreshold: { value: 0.5, min: 0, max: 2, step: 0.01 },
    luminanceSmoothing: { value: 0.025, min: 0, max: 1, step: 0.001 },
    intensity: { value: 2, min: 0, max: 5, step: 0.01 },
  });

  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "black" }}>
      <Canvas shadows camera={{ position: [0, 0, 15] }}>
        <Suspense fallback={<Loader />}>
          <PlaneModel
            position={[0, 0, 7]}
            scale={0.01}
            rotation={[0, 3, -0.4]}
          />
          <ambientLight intensity={0.3} />
          {/* <mesh ref={sphereRef} castShadow position={[0, 0, 1]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="gray" />
        </mesh> */}
          <Lights />
          <BloomEffects />
          <Effects />
          <mesh receiveShadow position={[0, -1, 0]}>
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial color="black" />
          </mesh>
          <Text
            font="/fonts/Inconsolata-ExtraBold.ttf"
            position={[0, 1, 12]} // z축 위치 조절 가능
            fontSize={0.8}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            Hello, World!
          </Text>
          <Text
            font="/fonts/Inconsolata-ExtraBold.ttf"
            position={[0, 0, 12]} // z축 위치 조절 가능
            fontSize={0.5}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            Extra Bold
          </Text>
          <Stats />
          {/* <OrbitControls /> */}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroCanvas;
