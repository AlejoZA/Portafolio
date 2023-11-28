import { Canvas } from "@react-three/fiber"
import Experience from "./Experience";
import Info from "./Info";
import "./info.css"
import { Loader } from "@react-three/drei";

const App =()=>{
    return (
        
        <>
       <Info name={"Alejandro Zamorano"} biography={"Web 3D Developer"} />
        <Canvas
        shadows
        
            camera = {{position:[0,0,5,8]}}
            
        >
            <Experience/>
            
            </Canvas>
           
        </>
    
    )
}
export default App;
