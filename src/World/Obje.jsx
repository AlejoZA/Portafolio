import React from "react";
import { useGLTF } from "@react-three/drei";
import { useTexture } from "@react-three/drei";

export function Obje(props) {
  const { nodes } = useGLTF("assets/models/obje1/obje1.glb");
  const PATH = "assets/textures/obje/";
;
  const propsTexture = useTexture({
    map: PATH + 'color.jpg',
    normalMap: PATH + 'normal.jpg',
    roughnessMap: PATH + 'rough.jpg',
    aoMap: PATH + 'Ao.jpg',


  });

  return (
    <group {...props} dispose={null} receiveShadow >
      <group scale={0.01}>
        <mesh
          
          
          geometry={nodes.Plane002__0.geometry}
          rotation={[-Math.PI / 2, 0, 0]} 
          scale={100}
        >
          <meshStandardMaterial {...propsTexture} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("assets/models/obje1/obje1.glb");
