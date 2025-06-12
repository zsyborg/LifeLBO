
import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, EventHandlers, InstanceProps, MathProps, ReactProps, useFrame } from '@react-three/fiber'
import './style.css'
import { Mutable, Overwrite } from '@react-three/fiber/dist/declarations/src/core/utils';
import { Mesh, BufferGeometry, NormalBufferAttributes, Material, Object3DEventMap, ExtrudeGeometry, Camera, CameraHelper } from 'three';

import { GLTFLoader } from 'three/addons'
import { useLoader } from '@react-three/fiber'


const loader = new GLTFLoader()
function Model() {
  const gltf = useLoader(loader, '/clock.glb')
  // ...
}

function Threejsed() {

  return (
    <>
   <Canvas>
    <ambientLight intensity={Math.PI / 2} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} />
    <Camera/>
  </Canvas>
    </>
  );
}

export default Threejsed;


function Box(props: React.JSX.IntrinsicAttributes & Mutable<Overwrite<Partial<Overwrite<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>, MathProps<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>> & ReactProps<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>> & Partial<EventHandlers>>>, Omit<InstanceProps<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>, Mesh>, "object">>>) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.x += delta))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

