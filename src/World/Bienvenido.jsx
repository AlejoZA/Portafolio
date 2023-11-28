import { Center, Float, Text3D } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

const CustomMaterialText = () => {
  const customMaterial = new MeshStandardMaterial({ color: 0xFF6E09 });

  return (
    <Center position={[-1, 0.5, 4]} scale={0.1}>
      <Float
        speed={2} 
        rotationIntensity={1.5} 
        floatIntensity={3} 
      >
        <Text3D font="/assets/fonts/Dancing Script_Regular.json" material={customMaterial}>
          {`Bienvenidos`}
        </Text3D>
      </Float>
    </Center>
  );
};

export default CustomMaterialText;