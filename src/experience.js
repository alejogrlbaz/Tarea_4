import { OrbitControls, useHelper } from "@react-three/drei";
import {
  DirectionalLightHelper,
  HemisphereLightHelper,
  PointLightHelper,
  SpotLightHelper,
} from "three";
import { useRef } from "react";

import { Floor } from "./components/floor";
import { House } from "./components/house";
import { Merlin } from "./components/merlin";
// import { Arbol } from "./components/arbol";
// import { Dragon } from "./components/dragon";

export function Experience() {
  const refdirectional = useRef();
  const refHemisfer = useRef();
  const refPoint = useRef();
  const refSpot = useRef();

  useHelper(refdirectional, DirectionalLightHelper, 1);
  //useHelper(refHemisfer, HemisphereLightHelper, 1);
  //useHelper(refPoint, PointLightHelper, 1);
  //useHelper(refSpot, SpotLightHelper, 1);
  return (
    <>
      <OrbitControls makeDefault />
      {/* <directionalLight
        position={[10, 15, 5]}
        color="570c0c"
        castShadow
        intensity={5}
        shadow-camera-near={0.1}
        shadow-camera-far={200}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-camera-width={1024}
        shadow-camera-height={1024}
      /> */}
      <spotLight
        ref={refdirectional}
        castShadow
        position={[0, 8, 8]}
        intensity={0.8}
      />
      {/* <Environment preset="lobby" /> */}
      <group>
        <Floor />
      </group>

      <group>
        <House />
      </group>

      <group>
        <Merlin />
      </group>

      {/* <group>
        <Arbol />
      </group> */}

      {/* <group>
        <Dragon />
      </group>  */}
    </>
  );
}
