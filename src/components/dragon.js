
import React, { useRef, useEffect} from "react";
import { useGLTF, useAnimations} from "@react-three/drei";
import { useControls } from "leva";

export function Dragon(props) {
  const group = useRef();
  const { nodes, animations } = useGLTF("../models/Dragon.glb");
  const { actions, names } = useAnimations(animations, group);

  const { animationName } = useControls({
    animationName: { options: names }
  })
  
  useEffect(() => {
    try {
      const action = actions[animationName];
      action.reset().fadeIn(0.5).play();
      return () => {
        action.fadeOut(0.5);
      };
    } catch (err) {
      console.error("Error al reproducir la animación:", err);
    }
  }, [animationName]);


  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group name="RootNode0" scale={0.01}>
          <group name="geo1">
            <skinnedMesh
              name="dragon_wings22"
              geometry={nodes.dragon_wings22.geometry}
              material={nodes.dragon_wings22.material}
              skeleton={nodes.dragon_wings22.skeleton}
            />
          </group>
          <group name="skeletal3">
            <primitive object={nodes.root4} />
          </group>
        </group>
      </group>
    </group>
  );
}


useGLTF.preload("../models/Dragon.glb");
