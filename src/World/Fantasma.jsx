import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Fantasma(props) {
  const { nodes, materials } = useGLTF("/assets/models/Fantasma/fantasma.glb"); 
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plano.geometry}
        material={materials["Material.002"]}
        position={[-0.621, 3.952, 0.284]}
        rotation={[-3.054, -0.004, -0.051]}
        scale={[8.969, 4.967, 13.773]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cilindro.geometry}
        material={nodes.Cilindro.material}
        position={[-0.505, 0.094, -0.248]}
        rotation={[-1.299, 0.57, -0.281]}
        scale={[-0.029, -0.001, -0.035]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cilindro001.geometry}
        material={materials["Material.003"]}
        position={[-0.683, 0.431, 1.88]}
        rotation={[-1.062, 0.379, -0.79]}
        scale={[-0.238, -0.022, -0.3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cilindro002.geometry}
        material={materials["Material.004"]}
        position={[-0.083, 0.443, 1.937]}
        rotation={[-1.062, 0.379, -0.79]}
        scale={[-0.238, -0.022, -0.3]}
      />
    </group>
  );
}

useGLTF.preload("/assets/models/Fantasma/fantasma.glb");
