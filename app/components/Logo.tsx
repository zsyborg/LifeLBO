import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { Extrude } from '@react-three/drei'
import * as THREE from 'three'
import { useMemo } from 'react'
import { Vector3, BufferGeometry, BufferAttribute } from "three";

const PNGExtruder = ({ imageUrl:any, depth = 1, bevelEnabled = true }) => {
  const texture = useLoader(TextureLoader, '/logo.png')
  
  const geometry = new BufferGeometry();
  const vertices = [
    new Vector3(-1, -1, 0),
    new Vector3(1, -1, 0),
    new Vector3(1, 1, 0),
    new Vector3(-1, 1, 0)
  ];
  const positions = new Float32Array(vertices.length * 3);

  for (let i = 0; i < vertices.length; i++) {
    positions[i * 3] = vertices[i].x;
    positions[i * 3 + 1] = vertices[i].y;
    positions[i * 3 + 2] = vertices[i].z;
  }

  geometry.setAttribute("position", new BufferAttribute(positions, 3));

  return (
    <mesh>
      <planeGeometry attach="geometry" args={[2, 2]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  )
}

export default PNGExtruder