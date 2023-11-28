import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/Objeto.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="treeArm">
          <mesh
            name="tree"
            castShadow
            receiveShadow
            geometry={nodes.tree.geometry}
            material={materials["Material.002"]}
          >
            <group name="leaves" />
          </mesh>
          <primitive object={nodes.bone000000} />
        </group>
        <mesh
          name="Plano_subdividido"
          castShadow
          receiveShadow
          geometry={nodes.Plano_subdividido.geometry}
          material={materials["Material.003"]}
          position={[-0.43, 0, 0]}
          scale={[4.24, 1, 3.88]}
        />
        <group name="Plano_reflexión" />
      </group>
    </group>
  );
}

useGLTF.preload("/Objeto.glb");
