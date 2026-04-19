import { motion } from 'framer-motion'

const Section = motion.section
const Button = motion.button

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Section
      className="section contact"
      aria-labelledby="contact-heading"
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 id="contact-heading" className="section-title">
        Contact
      </h2>
      <div className="contact-grid">
        <form className="contact-form glass" onSubmit={onSubmit} noValidate>
          <label className="contact-label" htmlFor="contact-name">
            Name
          </label>
          <input id="contact-name" className="contact-input" type="text" autoComplete="name" />

          <label className="contact-label" htmlFor="contact-email">
            Email
          </label>
          <input id="contact-email" className="contact-input" type="email" autoComplete="email" />

          <label className="contact-label" htmlFor="contact-message">
            Message
          </label>
          <textarea id="contact-message" className="contact-input contact-textarea" rows={4} />

          <Button
            type="submit"
            className="contact-submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </Button>
        </form>

        <aside className="contact-aside glass">
          <p className="contact-aside-title">Direct</p>
          <p>
            <a href="mailto:www.parthpr@gmail.com">www.parthpr@gmail.com</a>
          </p>
          <p>
            <a href="tel:+917979714116">7979714116</a>
          </p>
          <p className="contact-note">Form is UI-only; use email or phone to reach me.</p>
        </aside>
      </div>
    </Section>
  )
}
