// 参考: https://naokeyzmt.com/rogue/three-typescript/

import * as THREE from 'three';

window.addEventListener('DOMContentLoaded', () => {

  // レンダラーを作成
  const renderer:THREE.WebGLRenderer = new THREE.WebGLRenderer();
  // レンダラーのサイズを設定
  renderer.setSize(640,480);
  // canvasをbodyに追加
  document.body.appendChild(renderer.domElement);

  // シーンの作成
  const scene:THREE.Scene = new THREE.Scene();

  // カメラを作成
  const camera:THREE.PerspectiveCamera = new THREE.PerspectiveCamera(45, 640/480, 1, 10000);
  camera.position.set(0,0,1000);

  // キューブの作成
  // -----------------------
  // ボックスジオメトリを生成
  const geometry:THREE.BoxGeometry       = new THREE.BoxGeometry( 100, 100, 100 );
  // マテリアルを生成
  const material:THREE.MeshPhongMaterial = new THREE.MeshPhongMaterial( {color: 0x00ff00} );
  // 上記のボックスジオメトリとマテリアルを使ってメッシュを生成
  const cube:THREE.Mesh                  = new THREE.Mesh( geometry, material );

  // シーンにキューブを追加
  scene.add( cube );

  // 平行光源を生成
  const light:THREE.DirectionalLight = new THREE.DirectionalLight(0xffffff);
  // 光源の位置を設定
  light.position.set(1,1,1);
  // シーンに光源を追加
  scene.add(light);

  // 毎フレーム更新関数
  const tick = ():void => {
        // 一定間隔で処理を繰り返す(引数に関数名を渡す)
    requestAnimationFrame(tick);
    // キューブの回転を変更
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;

    // 描画
    renderer.render(scene, camera);
  }

  // 毎フレーム更新関数を実行
  tick();

});
