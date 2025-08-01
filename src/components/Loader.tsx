"use client";

import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress(); // progress: 0 ~ 100
  return (
    <Html center>
      <div style={{ color: "#555", fontSize: "1.5rem" }}>
        Loading... {Math.floor(progress)}%
      </div>
    </Html>
  );
};

export default Loader;
