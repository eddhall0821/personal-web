"use client";

import { color } from "csx";
import { useControls } from "leva";
import React, { useEffect, useRef, useState, VFC } from "react";
import * as THREE from "three";
import { useHelper } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

export const Lights = () => {
  const lightRef = useRef<THREE.PointLight>(null!);
  const lightTargetRef = useRef<THREE.Mesh>(null!);
  const { camera, pointer } = useThree();
  const [material, set] = useState<THREE.Mesh>();
  const { scene } = useThree();

  const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -0.5); // z = 0.5 평면
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const target = new THREE.Vector3();

  useEffect(() => {
    if (!scene.userData.refs) scene.userData.refs = {};
    scene.userData.refs.lightMesh = lightTargetRef;
  }, [scene.userData]);

  useFrame(() => {
    mouse.set(pointer.x, pointer.y);
    raycaster.setFromCamera(mouse, camera);
    raycaster.ray.intersectPlane(plane, target); // 교차점 계산

    lightTargetRef.current.position.lerp(target, 0.5); // 부드럽게 따라가도록
  });

  return (
    <>
      {/* <pointLight
        ref={lightRef}
        castShadow
        intensity={1}
        distance={10}
        decay={2}
        shadow-bias={-0.0001}
      /> */}
      <mesh ref={lightTargetRef} position={[0, 0, -5]}>
        <sphereGeometry args={[5, 32, 32]} />
        <meshStandardMaterial
          color="#252525"
          transparent
          opacity={0.1}
          emissive="#252525"
          emissiveIntensity={2}
          metalness={0}
          roughness={1}
        />
      </mesh>
    </>
  );
};
