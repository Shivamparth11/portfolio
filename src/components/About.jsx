import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const Section = motion.section
const Div = motion.div

export default function About() {
  const cardRef = useRef(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)

  const rotateX = useTransform(my, [0, 1], [8, -8])
  const rotateY = useTransform(mx, [0, 1], [-10, 10])
  const springX = useSpring(rotateX, { stiffness: 280, damping: 26 })
  const springY = useSpring(rotateY, { stiffness: 280, damping: 26 })

  const handleMove = (e) => {
    const el = cardRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width)
    my.set((e.clientY - r.top) / r.height)
  }

  const handleLeave = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <Section
      className="section about"
      aria-labelledby="about-heading"
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 id="about-heading" className="section-title">
        About
      </h2>
      <div
        ref={cardRef}
        className="about-card-wrap"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ perspective: 1100 }}
      >
        <Div
          className="about-card glass"
          style={{
            rotateX: springX,
            rotateY: springY,
            transformStyle: 'preserve-3d',
          }}
        >
          <h3 className="about-name">Shivam Raj</h3>
          <p className="about-bio">
            I build full-stack applications with a strong focus on AI/ML—from REST APIs and data
            layers to interfaces that stay fast and clear. I like shipping products that connect
            solid engineering with practical intelligence.
          </p>
          <ul className="about-meta">
            <li>
              <strong>Degree:</strong> B.Tech CSE — AI/ML, SRM IST Ghaziabad · Graduation 2027 · CGPA:
              8.31
            </li>
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:www.parthpr@gmail.com">www.parthpr@gmail.com</a>
            </li>
            <li>
              <strong>Phone:</strong> <a href="tel:+917979714116">7979714116</a>
            </li>
          </ul>
        </Div>
      </div>
    </Section>
  )
}
