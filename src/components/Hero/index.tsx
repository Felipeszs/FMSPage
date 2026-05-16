import { heroProofs, whatsappUrl } from "../../data/landingContent";
import { HeroMockup } from "../HeroMockup";
import "./styles.scss";

export function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero section-shell">
        <div className="hero-content">
          <span className="eyebrow">Landing pages que vendem de verdade</span>
          <h1>
            Seu cliente te achou no <span>Google.</span> <strong>E agora?</strong>
          </h1>
          <p className="hero-subtitle">
            Crio páginas que transformam visitantes em mensagens no WhatsApp
            com design profissional, clareza e foco total em conversão.
          </p>

          <div className="hero-actions">
            <a className="button button--primary" href={whatsappUrl}>
              Quero minha landing page →
            </a>
            <a className="button button--secondary" href="#solucao">
              Ver como funciona
            </a>
          </div>

          <ul className="proof-list" aria-label="Benefícios principais">
            {heroProofs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="social-proof">
            <div className="avatars" aria-hidden="true">
              <span>JM</span>
              <span>RC</span>
              <span>FS</span>
              <span>AL</span>
            </div>
            <p>
              <strong>Negócios locais atendidos</strong>
              Clínicas, salões, consultórios e prestadores de serviço.
            </p>
          </div>
        </div>

        <HeroMockup />
      </div>
    </section>
  );
}
