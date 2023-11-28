
import { useHelper } from '@react-three/drei';
import { useEffect,useRef} from 'react';
import { DirectionalLightHelper,PointLightHelper,SpotLightHelper,HemisphereLightHelper} from 'three';

const Lights = () => {
    const directionalLightRef = useRef();

   

    const pointLightRef = useRef();
   

    const spotLightRef = useRef();


    const hemisphereLightRef = useRef();  





    
    return (<>
            <ambientLight intensity={1} castShadow/>
            <directionalLight ref={directionalLightRef} position={[10, 10, 5]}  intensity={4}  color={"orange"} castShadow/>
            <pointLight ref={pointLightRef} position={[0, 4, 5]} intensity={4} color={"red"} />
            <spotLight
            ref={spotLightRef}
            position={[-0, 4, 2]}
            angle={Math.PI / 12}
            intensity={100}
            color={"white"}
            penumbra={1}
  			 distance={8}
        />

           

        </>)
}
export default Lights;

