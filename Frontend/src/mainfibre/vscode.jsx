
import {Canvas} from '@react-three/fiber';
import {Environment, OrbitControls, useTexture} from '@react-three/drei'
import VscodeF from '../fibre/vscode';
function Vscode() {


  return (
   <div className="h-[1/2] w-full">
  <Canvas camera={{position:[0, 0, 20], fov: 35}} >
  
<OrbitControls enableZoom={false} />

 <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr']}/>
 <ambientLight intensity={0.2}/>

<VscodeF />

  </Canvas>
  </div>
  );
};

export default Vscode