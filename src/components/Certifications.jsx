import { motion } from 'framer-motion'

const Section = motion.section

const items = [
  { title: 'Deloitte Technology Job Simulation', date: 'Jun 2025' },
  { title: 'AI Fluency: Framework & Foundations', date: 'Mar 2026' },
]

export default function Certifications() {
  return (
    <Section
      className="section certifications"
      aria-labelledby="certs-heading"
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 id="certs-heading" className="section-title">
        Certifications
      </h2>
      <ul className="timeline">
        {items.map((item) => (
          <li key={item.title} className="timeline-item">
            <span className="timeline-glow" aria-hidden="true" />
            <h3>{item.title}</h3>
            <time>{item.date}</time>
          </li>
        ))}
      </ul>
    </Section>
  )
}
