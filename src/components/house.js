import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function House(props) {
  const { nodes, materials } = useGLTF("../models/CasaEncantada.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.23} position={[3,0,-4]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wood_siding2.geometry}
          material={nodes.wood_siding2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.roofing3.geometry}
          material={nodes.roofing3.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.stone_base4.geometry}
          material={nodes.stone_base4.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slab5.geometry}
          material={nodes.slab5.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chimneys7.geometry}
          material={nodes.chimneys7.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.one_to_one6.geometry}
          material={nodes.one_to_one6.material}
        />
      </group>
    </group>
  );
}

useGLTF.preload("../models/CasaEncantada.glb");