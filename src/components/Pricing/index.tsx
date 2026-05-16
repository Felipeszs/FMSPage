import { plans, whatsappUrl } from '../../data/landingContent'
import { SectionHeader } from '../SectionHeader'
import './styles.scss'

export function Pricing() {
  return (
    <section className="section-shell section-block" id="planos">
      <SectionHeader
        eyebrow="Planos"
        title="Investimento para criar sua landing page"
        description="Planos pensados para diferentes níveis de estrutura, copy e acompanhamento."
      />

      <div className="pricing-grid">
        {plans.map((plan) => (
          <article
            className={`pricing-card ${plan.highlighted ? 'pricing-card--highlight' : ''}`}
            key={plan.name}
          >
            {plan.highlighted ? <span className="plan-tag">Mais escolhido</span> : null}
            <h3>Plano {plan.name}</h3>
            <strong>{plan.price}</strong>
            <p>{plan.description}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <a className="button button--primary" href={whatsappUrl}>
              Criar minha página
            </a>
          </article>
        ))}
      </div>

      <div className="pricing-note">
        <p>
          Valores podem variar conforme complexidade, quantidade de seções e
          necessidade de integrações.
        </p>
        <strong>
          Manutenção a partir de R$ 67/mês para hospedagem, pequenas alterações e suporte.
        </strong>
      </div>
    </section>
  )
}
