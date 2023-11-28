

import { BakeShadows, Environment, OrbitControls } from "@react-three/drei";
import { Pol } from "./World/Pol";
import { useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Obje} from "./World/Obje";
import Lights from "./World/Lights";

import Fonds, {Fond} from "./World/Fond";
import { Anuncio } from "./World/Anuncio,";
import Bienvenido from "./World/Bienvenido";
import { Fantasma } from "./World/Fantasma";


const Experience = () => {

    const boxRef = useRef();
    const torusRef = useRef();
    const sphereRef = useRef();
    

    useFrame((state, delta)=>{
        boxRef.current.rotation.x += 1 * delta;
        boxRef.current.position.x =6;
        boxRef.current.position.y = 4 
        boxRef.current.position.y =2*Math.sin(state.clock.getElapsedTime())+2;
        torusRef.current.position.x =6
        torusRef.current.rotation.y = Math.cos(state.clock.getElapsedTime())+2;
        sphereRef.current.position.x = 9*Math.sin(state.clock.getElapsedTime())
        
       
        
    })

   


    return (


        <>
            <OrbitControls  />
            <Lights />
            <BakeShadows />
         
            
            <mesh ref={boxRef} position={[1,1,1]} scale={0.1} >
                <boxGeometry args={[3, 3, 3]} />
                <meshStandardMaterial position={[300, 10000, -20]} color="red" /> 
            </mesh>

            <mesh ref={sphereRef}   scale={0.1}  getWorldPosition={[5,50,3]}>
                <sphereGeometry args={[2, 16, 32]} />
                <meshNormalMaterial color={"red"} />
            </mesh>

            <mesh ref={torusRef} scale={0.1}>
                <torusGeometry args={[15, 3, 10, 90]} />
                <meshLambertMaterial wireframe color={"blue"} />
            </mesh>
            
            <Fonds/>
            <Pol position={[1, -2, 1]} scale={0.013} castShadow/>
            <Obje position={[0, -2, 4]} scale={3  }  receiveShadow />
            <Anuncio > <Bienvenido/> </Anuncio> 
            <Fantasma  position={[-1, 1 , 2]} scale = {0.1}/>
            
        </>
    )

}
export default Experience;