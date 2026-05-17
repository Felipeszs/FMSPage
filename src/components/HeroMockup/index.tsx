import './styles.scss'

const sorrisoPrimeUrl = 'https://sorriso-prime-kappa.vercel.app'

export function HeroMockup() {
  return (
    <div className="mockup-card" aria-label="Modelo demonstrativo de landing page odontológica">
      <div className="browser-bar" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="mockup-badge">Modelo demonstrativo</div>

      <div className="mockup-hero">
        <div>
          <span className="mockup-rating">4,9 de avaliação</span>
          <h3>Clínica Sorriso Prime</h3>
          <p>Tratamentos odontológicos com atendimento claro, humano e bem localizado.</p>
        </div>
        <div className="mockup-logo" aria-hidden="true">
          SP
        </div>
      </div>

      <div className="mockup-services">
        <span>Avaliação</span>
        <span>Clareamento</span>
        <span>Implantes</span>
      </div>

      <div className="mockup-info-grid">
        <div>
          <strong>Localização</strong>
          <span>Centro, São Paulo</span>
        </div>
        <div>
          <strong>WhatsApp</strong>
          <span>Resposta em horário comercial</span>
        </div>
      </div>

      <a className="mockup-button" href={sorrisoPrimeUrl} target="_blank" rel="noreferrer">
        Agendar avaliação
      </a>
    </div>
  )
}
