import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

const navOffset = -72
const duration = 600

const links = [
  { to: 'hero', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'certifications', label: 'Certs' },
  { to: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar ${menuOpen ? 'navbar--open' : ''}`}>
      <Link
        className="navbar-brand"
        to="hero"
        smooth
        duration={duration}
        offset={navOffset}
        onClick={closeMenu}
        href="#hero"
      >
        SR
      </Link>

      <button
        type="button"
        className="navbar-toggle"
        aria-expanded={menuOpen}
        aria-controls="primary-nav"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span className="navbar-toggle-bar" />
        <span className="navbar-toggle-bar" />
        <span className="navbar-toggle-bar" />
      </button>

      <nav id="primary-nav" className="navbar-nav" aria-label="Primary">
        <ul className="navbar-links">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                activeClass="navbar-link--active"
                to={to}
                spy
                smooth
                duration={duration}
                offset={navOffset}
                className="navbar-link"
                onClick={closeMenu}
                href={`#${to}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
