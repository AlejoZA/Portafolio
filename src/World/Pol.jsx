import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Pol(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/assets/models/pol/pol.glb");
  const { actions } = useAnimations(animations, group);
  const [currentAnimation, setCurrentAnimation] = useState(null);

  
  const [hitSound] = useState(() => new Audio('/sounds/espada.mp3')); 

  useEffect(() => {
    setCurrentAnimation("Kayn_Dance");
  }, []);

  useEffect(() => {
    if (currentAnimation) {
      const currentAction = actions[currentAnimation];
      currentAction.play();

      Object.keys(actions).forEach((animation) => {
        if (animation !== currentAnimation) {
          actions[animation].stop();
        }
      });

      return () => currentAction.reset().stop();
    }
  }, [currentAnimation, actions]);

  const handleClick = () => {
    setCurrentAnimation((prevAnimation) =>
      prevAnimation === "Kayn_Dance" ? "Kayn_Idle3_Assassin" : "Kayn_Dance"
    );

   
    hitSound.currentTime = 1;
  
    hitSound.play();
  };

  return (
    <group ref={group} {...props} dispose={null} castShadow onClick={handleClick}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="skinned_mesh_0">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    shadow
                    name="Object_6"
                    geometry={nodes.Object_6.geometry}
                    material={materials.Kayn_Base_Mat}
                    skeleton={nodes.Object_6.skeleton}
                  />
                  <skinnedMesh
                    shadow
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Kayn_Base_Slayer_Mat}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    shadow
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.Kayn_Base_Assassin_Mat}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <skinnedMesh
                    shadow
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.Kayn_Assassin_Hair_Mat}
                    skeleton={nodes.Object_9.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/pol/pol.glb");