import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { DragControls } from 'three-stdlib';
import { useThree } from '@react-three/fiber';

type DraggableProps = {
  children: React.ReactNode
}

// 子コンポーネントのオブジェクトをマウスでドラッグできるようにする
const Draggable: React.FC<DraggableProps> = ({ children }) => {
	const ref = useRef<THREE.Group>(null)
	const { camera, gl, scene } = useThree()

	useEffect(() => {
		const controls = new DragControls(ref.current!.children, camera, gl.domElement)
		controls.transformGroup = true

		const orbitControls = (scene as any).orbitControls

		controls.addEventListener('dragstart', () => {
			orbitControls.enabled = false
		})
		controls.addEventListener('dragend', () => {
			orbitControls.enabled = true
		})
	}, [camera, gl.domElement, scene])

	return <group ref={ref}>{children}</group>
}

export default Draggable
