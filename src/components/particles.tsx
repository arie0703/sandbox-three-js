import type { NextPage } from 'next'
import { useEffect } from 'react'
import * as THREE from 'three'

const Particles: NextPage = () => {
  let canvas: HTMLElement

  // カメラサイズ
  const width = 960;
  const height = 540;
  let rot = 0; // 角度

  const createStarField = (scene: THREE.Scene) => {
    
    // 形状データを作成
    const SIZE = 3000;
    // 配置する個数
    const LENGTH = 1000;
    // 頂点情報を格納する配列
    const vertices = [];
    for (let i = 0; i < LENGTH; i++) {
      const x = SIZE * (Math.random() - 0.5);
      const y = SIZE * (Math.random() - 0.5);
      const z = SIZE * (Math.random() - 0.5);

      vertices.push(x, y, z);
    }

    // 形状データを作成
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    // マテリアルを作成
    const material = new THREE.PointsMaterial({
      // 一つ一つのサイズ
      size: 10,
      // 色
      color: 0xffffff,
    });

    // 物体を作成
    const mesh = new THREE.Points(geometry, material);
    scene.add(mesh); // シーンは任意の THREE.Scene インスタンス
  }

  useEffect(() => {
    if (canvas) return

    canvas = document.getElementById('particles')!
    const scene = new THREE.Scene()
    createStarField(scene);
    
    
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas || undefined,
      antialias: true,
      alpha: true
    })

    // サイズ
    const sizes = {
      width: innerWidth,
      height: innerHeight
    }

    // カメラ
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      1000
    )

    tick();

    function tick() {
      rot += 1;

      // ラジアンに変換する
      const radian = (rot * Math.PI) / 180;
      // 角度に応じてカメラの位置を設定
      camera.position.x = 1000 * Math.sin(radian);
      camera.position.z = 1000 * Math.cos(radian);
      // 原点方向を見つめる
      camera.lookAt(new THREE.Vector3(0, 0, 0));

      // レンダリング
      renderer.render(scene, camera);

      requestAnimationFrame(tick);
    }

  }, [])
  return (
    <>
      <canvas id="particles" style={{width: '100%', height: '60vh'}}></canvas>
    </>
  )
}

export default Particles
