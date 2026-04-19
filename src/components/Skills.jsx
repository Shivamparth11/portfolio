import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'

const Section = motion.section

const SKILLS = [
  'Python',
  'Java',
  'React.js',
  'Spring Boot',
  'Flask',
  'NLP',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'C++',
  'MariaDB',
  'MySQL',
  'GitHub',
  'Vercel',
  'Postman',
  'REST APIs',
  'Three.js',
]

function honeycombPositions(count, cols = 4) {
  const gapX = 0.62
  const gapZ = 0.54
  const stagger = gapX * 0.5
  const positions = []
  let i = 0
  let row = 0
  while (i < count) {
    const inRow = Math.min(cols, count - i)
    const offsetX = ((cols - inRow) * gapX) / 2 + (row % 2) * stagger
    for (let c = 0; c < inRow; c++) {
      const x = c * gapX - ((cols - 1) * gapX) / 2 + offsetX
      const z = -row * gapZ
      positions.push([x, 0, z])
      i++
    }
    row++
  }
  return positions
}

function HexCell({ position, label, hue }) {
  return (
    <group position={position}>
      <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.26, 0.26, 0.07, 6]} />
        <meshStandardMaterial
          color={hue}
          metalness={0.82}
          roughness={0.22}
          emissive={hue}
          emissiveIntensity={0.18}
        />
      </mesh>
      <Html center distanceFactor={9} style={{ pointerEvents: 'none', userSelect: 'none' }}>
        <div className="skill-3d-label">{label}</div>
      </Html>
    </group>
  )
}

function SkillGrid3D() {
  const group = useRef(null)
  const positions = useMemo(() => honeycombPositions(SKILLS.length, 4), [])

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.elapsedTime
    group.current.rotation.y = t * 0.14
    group.current.rotation.x = Math.sin(t * 0.25) * 0.08
  })

  return (
    <group ref={group} position={[0, 0.15, 0]}>
      {SKILLS.map((label, i) => (
        <HexCell
          key={label}
          position={positions[i]}
          label={label}
          hue={i % 2 === 0 ? '#00c8d4' : '#8b4dd4'}
        />
      ))}
    </group>
  )
}

function SkillsCanvas() {
  return (
    <Canvas
      className="skills-canvas-inner"
      camera={{ position: [0, 0.35, 4.2], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <color attach="background" args={['transparent']} />
      <ambientLight intensity={0.45} />
      <pointLight position={[4, 4, 4]} intensity={0.9} color="#00f5ff" />
      <pointLight position={[-4, 1, 2]} intensity={0.65} color="#9b5de5" />
      <Suspense fallback={null}>
        <SkillGrid3D />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  )
}

export default function Skills() {
  return (
    <Section
      className="section skills"
      aria-labelledby="skills-heading"
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 id="skills-heading" className="section-title">
        Skills
      </h2>
      <p className="section-lead">
        Rotating hex grid in 3D — drag to inspect. Same stack across your builds.
      </p>
      <div className="skills-canvas glass">
        <SkillsCanvas />
      </div>
    </Section>
  )
}
