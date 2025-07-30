"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  CameraControls,
  Environment,
  Float,
  Grid,
  KeyboardControls,
  KeyboardControlsEntry,
  PerspectiveCamera,
  Splat,
  useKeyboardControls,
} from "@react-three/drei";
import { useEffect, useMemo, useState } from "react";

enum Controls {
  forward = "forward",
  back = "back",
  left = "left",
  right = "right",
  jump = "jump",
}

const About = () => {
  const map = useMemo<KeyboardControlsEntry<Controls>[]>(
    () => [
      { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
      { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
      { name: Controls.jump, keys: ["Space"] },
    ],
    []
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <KeyboardControls map={map}>
        <Canvas flat>
          <Foo />
          <gridHelper />
          <ambientLight intensity={Math.PI / 2} />
          <CameraControls />
          <Float>
            <Splat src="https://huggingface.co/cakewalk/splat-data/resolve/main/nike.splat" />
          </Float>
        </Canvas>
      </KeyboardControls>
    </div>
  );
};

function Foo() {
  const [sub, get] = useKeyboardControls<Controls>();

  useEffect(() => {
    return sub((state) => {
      console.log(state);
    });
  }, []);

  useFrame(() => {
    // Fetch fresh data from store
    const pressed = get().back;
  });

  return <></>;
}

export default About;
