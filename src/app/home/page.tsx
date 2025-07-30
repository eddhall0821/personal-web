"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { ParticleField } from "@/components/ParticleField";

const Scene = () => {
  const lightRef = useRef<THREE.PointLight>(null!);
  const { camera, pointer } = useThree();

  const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -0.5); // z = 0.5 평면
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const target = new THREE.Vector3();

  useFrame(() => {
    mouse.set(pointer.x, pointer.y);
    raycaster.setFromCamera(mouse, camera);
    raycaster.ray.intersectPlane(plane, target); // 교차점 계산

    lightRef.current.position.lerp(target, 0.3); // 부드럽게 따라가도록
  });

  return (
    <>
      <pointLight
        ref={lightRef}
        castShadow
        intensity={5}
        distance={10}
        decay={2}
        shadow-bias={-0.0001}
      />
    </>
  );
};

const Home = () => {
  const sphereRef = useRef<THREE.Mesh>(null!);
  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "white" }}>
      <Canvas shadows camera={{ position: [0, 0, 5] }}>
        <Scene />
        {/* <ParticleField /> */}
        <ambientLight intensity={0.3} />
        <mesh ref={sphereRef} castShadow position={[0, 0, 1]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="gray" />
        </mesh>
        <mesh receiveShadow position={[0, -1, 0]}>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="#eeeeee" />
        </mesh>
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
};

export default Home;
