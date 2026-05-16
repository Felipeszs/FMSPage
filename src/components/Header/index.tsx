import { navLinks, whatsappUrl } from '../../data/landingContent'
import fsLogo from '../../assets/fs-logo.png'
import './styles.scss'

export function Header() {
  return (
    <header className="header-section">
      <div className="site-header">
        <a className="brand" href="#top" aria-label="Felipe Souza - início">
          <img className="brand-logo" src={fsLogo} alt="Logo Felipe Souza" />
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href={whatsappUrl}>
          Falar no WhatsApp →
        </a>
      </div>
    </header>
  )
}
