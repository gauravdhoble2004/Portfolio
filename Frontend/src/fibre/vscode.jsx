import { useTexture } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function VscodeF() {

  const meshRef = useRef();

  const tex = useTexture("/assets/cod.jpg");

  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(2, 1);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z = -0.3;
    }
  })

  return (
    <>
      <mesh ref={meshRef}>
        <cylinderGeometry args={[3.5, 3.5, 5.5, 100, 1, true]} />
        <meshStandardMaterial
          map={tex}
          emissiveMap={tex}
          alphaMap={tex}           // use texture alpha (keeps only image visible)
          transparent={true}       // enable transparency
          opacity={1}              // texture is fully visibl3
          color="white"
          emissive={new THREE.Color("white")}
          emissiveIntensity={1}
          side={THREE.DoubleSide}
        />
      </mesh>


      <EffectComposer>
        <Bloom intensity={0.05} luminanceThreshold={0.5} luminanceSmoothing={0.9} />
      </EffectComposer>
    </>
  )
}

export default VscodeF;
