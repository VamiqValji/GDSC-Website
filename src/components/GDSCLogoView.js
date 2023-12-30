import React from 'react'
import { Canvas } from '@react-three/fiber';
import { PresentationControls } from '@react-three/drei';
import GDSC3dLogo from './GDSC3dLogo';

export const GDSCLogoView = ({}) => {
    return (
        // 3D logo viewport
        <Canvas dpr={[1, 2]} shadows camera={{fov: 45}} style={{"position": "relative", height:"500px", width:"500px"}}> 
            <color attach={"background"} args={["#FFFFF"]} />
            <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI/4]}>
                <GDSC3dLogo/>
            </PresentationControls>
        </Canvas>
    )
}

