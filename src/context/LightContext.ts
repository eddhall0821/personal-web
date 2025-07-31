// LightContext.ts
import { createContext, useContext } from "react";
import * as THREE from "three";

export const LightContext = createContext<React.RefObject<THREE.Mesh> | null>(
  null
);
export const useLightRef = () => useContext(LightContext);
