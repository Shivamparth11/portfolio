import { motion } from 'framer-motion'

const Section = motion.section
const Div = motion.div

const projects = [
  {
    title: 'Resume Builder with AI Integration',
    stack: ['Java', 'Spring Boot', 'Python', 'Flask', 'NLP', 'Tailwind'],
    desc: 'Full-stack resume builder with AI feedback. Analyzes summaries and gives improvement suggestions.',
  },
  {
    title: 'ScriptSync',
    stack: ['React', 'MySQL', 'REST APIs'],
    desc: 'AI video script generator with secure auth, structured output (hook, body, CTA).',
  },
  {
    title: 'Portfolio Website',
    stack: ['HTML', 'GitHub Pages'],
    desc: 'Personal portfolio with live project links and GitHub contributions.',
  },
]

export default function Projects() {
  return (
    <Section
      className="section projects"
      aria-labelledby="projects-heading"
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 id="projects-heading" className="section-title">
        Projects
      </h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.title} className="flip-scene">
            <Div
              className="flip-inner"
              initial={{ rotateY: 0 }}
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="flip-face flip-front glass">
                <h3>{p.title}</h3>
                <p className="flip-hint">Hover for details</p>
                <ul className="stack-list">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="flip-face flip-back glass">
                <h3>{p.title}</h3>
                <p className="flip-desc">{p.desc}</p>
              </div>
            </Div>
          </div>
        ))}
      </div>
    </Section>
  )
}
