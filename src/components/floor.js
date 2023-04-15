import { React, useRef } from "react";
import { Polyhedron, Circle, useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export function Floor() {

  const [colorMap,aomap,displacementMap, materialMap, normalMap, roughnessMap] = useTexture ([
    "../textures/tFloor/baseColor.jpg",
    "../textures/tFloor/ao.jpg",
    "../textures/tFloor/height.png",
    "../textures/tFloor/material.jpg",
    "../textures/tFloor/normal.jpg",
    "../textures/tFloor/roughness.jpg"
]);

  return (
    <Circle
      rotation={[-Math.PI / 2, 0, 0]}
      args={[10, 10, 10]}
      position={[0, -0.3, 0]}
      receiveShadow={true}
      castShadow
    >
      <meshStandardMaterial
      map={colorMap}
      aoMap={aomap}
      displacementMap={displacementMap}
      normalMap={normalMap}
      roughnessMap={roughnessMap}
      
      metalness={0}
      roughness={0.5} side={DoubleSide} />

    </Circle>
  );
}
