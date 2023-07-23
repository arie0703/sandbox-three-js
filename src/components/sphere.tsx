import { useFrame } from '@react-three/fiber';
import { FC, useRef } from 'react';
import type { Mesh } from 'three';

const Sphere: FC = () => {
  const sphereRef = useRef<Mesh>(null);
  useFrame(() => {
		const sphere = sphereRef.current;
		if (!sphere) return;
		sphere.rotation.x += 0.005;
		sphere.rotation.y += 0.005;
	});
  return (
    <mesh visible position={[1, 2, 3]}>
			<sphereGeometry args={[1, 16, 16]} />
			<meshStandardMaterial color="hotpink" transparent />
		</mesh>
  )
}

export default Sphere
