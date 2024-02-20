import React, { useState, useEffect } from 'react';
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'
import { Box } from "@chakra-ui/react";

const GDSC3dLogo = () => {
  const [width, setWidth] = useState(window.innerWidth);
  
  const ref = React.useRef()
  function Model(props) {
    const { scene } = useGLTF("gdsc.glb")
    return <primitive object={scene} {...props}/>
  }

  useFrame(() => {
    ref.current.rotation.y += 0.007
  })

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getScale = () => {
    if (width < 400) return 0.165;
    if (width < 600) return 0.25;
    return 0.4;
  }

  return (
    <>
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
          <Model scale={getScale()} castShadow recieveShadow position={[0,0,0]}/>
          </mesh>
      </group>
    </>
  )

}

export default GDSC3dLogo