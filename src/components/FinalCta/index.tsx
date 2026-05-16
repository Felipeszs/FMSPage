import { whatsappUrl } from '../../data/landingContent'
import './styles.scss'

export function FinalCta() {
  return (
    <section className="final-cta section-shell" id="contato">
      <span className="eyebrow">Próximo passo</span>
      <h2>Quer uma página profissional para transformar visitas em conversas?</h2>
      <p>
        Me chame no WhatsApp e eu te mostro como uma landing page poderia ficar
        para o seu negócio.
      </p>
      <a className="button button--primary" href={whatsappUrl}>
        Falar com Felipe no WhatsApp
      </a>
    </section>
  )
}
