"use client"; // This is a client component

import Image from 'next/image'
import styles from './page.module.css'
import Sphere from '@/components/sphere';
import React from "react"
import { OrbitControls, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { getWindowSize } from '@/utils/getWindowSize';
import Draggable from '@/components/draggable';
import Particles from '@/components/particles';


export default function Home() {

  const { width, height } = getWindowSize();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div style={{width: '100%', height: '60vh'}}>
        <Canvas
          camera={{
            fov: 60,
            aspect: width / 60,
            near: 0.1,
            far: 1000,
            position: [0, 4, 8]
          }}
        >
          <color attach="background" args={['#1e1e1e']} />
          <Stats />
          <Draggable>
            <Sphere />
          </Draggable>
          
          <OrbitControls attach="orbitControls" />
          <ambientLight args={[0xffffff]} intensity={0.2} />
          <axesHelper />
          <gridHelper position={[0, 0.001, 0]} args={[10, 10, 'red', 'black']} />
        </Canvas>
        
        
      </div>

      <div style={{width: '100%', height: '60vh'}}>
        <Particles></Particles>
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
