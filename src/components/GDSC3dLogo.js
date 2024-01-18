import React from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'

const GDSC3dLogo = () => {
  const ref = React.useRef()
  function Model(props) {
    const { scene } = useGLTF("gdsc.glb")
    return <primitive object={scene} {...props}/>
  }

  useFrame(() => {
    ref.current.rotation.y += 0.007
  })

  return (
    <group>
        <directionalLight position={[5, 0, 0]} intensity={2} target-position={[0,0,0]}/>
        <directionalLight position={[5, 5, 0]} intensity={2} target-position={[0,0,0]}/>
        <directionalLight position={[-5, 5, 0]} intensity={2} target-position={[0,0,0]}/>
        <directionalLight position={[5, -5, 0]} intensity={2} target-position={[0,0,0]}/>
        <directionalLight position={[0, 5, 0]} intensity={2} target-position={[0,0,0]}/>
        <directionalLight position={[0, -5, 0]} intensity={2} target-position={[0,0,0]}/>
        <directionalLight position={[-5, -5, 0]} intensity={2} target-position={[0,0,0]}/>
        <directionalLight position={[-5, 0, 0]} intensity={2} target-position={[0,0,0]}/>

        <mesh ref={ref}>
        <Model scale={0.4} castShadow recieveShadow position={[0,0,0]}/>
        </mesh>
    </group>
  )

}

export default GDSC3dLogo