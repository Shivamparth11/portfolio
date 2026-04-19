import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Link } from 'react-scroll'

function TorusKnotMesh() {
  const ref = useRef(null)
  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * 0.22
    ref.current.rotation.y += delta * 0.32
  })
  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[0.52, 0.16, 160, 32]} />
      <meshStandardMaterial
        color="#00f5ff"
        emissive="#003d42"
        emissiveIntensity={0.62}
        metalness={0.88}
        roughness={0.16}
      />
    </mesh>
  )
}

function HeroScene() {
  return (
    <>
      <color attach="background" args={['#0a0a14']} />
      <ambientLight intensity={0.38} />
      <pointLight position={[4, 3, 3]} intensity={1.15} color="#00f5ff" />
      <pointLight position={[-3.5, -1.5, 2]} intensity={0.85} color="#9b5de5" />
      <Stars radius={90} depth={45} count={4500} factor={2.8} fade speed={0.45} />
      <TorusKnotMesh />
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.55}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.9}
      />
    </>
  )
}

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-canvas">
        <Canvas
          camera={{ position: [0, 0, 4.6], fov: 48 }}
          gl={{ antialias: true, alpha: false }}
          dpr={[1, 2]}
        >
          <HeroScene />
        </Canvas>
      </div>
      <div className="hero-overlay">
        <h1 className="hero-title">Shivam Raj</h1>
        <p className="hero-subtitle">AI/ML Engineer &amp; Full-Stack Developer</p>
        <Link
          className="hero-scroll"
          to="about"
          smooth
          duration={650}
          offset={-72}
          href="#about"
        >
          <span className="hero-scroll-line" aria-hidden="true" />
          <span>Scroll</span>
        </Link>
      </div>
    </section>
  )
}
