import React from 'react';
import { Sky, Stars, Sparkles } from '@react-three/drei';

const Fond = () => {
  return (
    <>
     
      <Sky
        distance={450000}
        inclination={0.2} 
        azimuth={0.1} 
      />
    
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

     
      <Sparkles count={100} speed={1} opacity={1} color={0xffffff} size={1} scale={1} noise={1} />
    </>
  );
};

export default Fond;