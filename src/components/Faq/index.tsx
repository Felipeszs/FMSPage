import { faqs } from '../../data/landingContent'
import { SectionHeader } from '../SectionHeader'
import './styles.scss'

export function Faq() {
  return (
    <section className="section-shell section-block" id="faq">
      <SectionHeader
        eyebrow="FAQ"
        title="Perguntas frequentes"
        description="Respostas diretas para entender o projeto antes de chamar no WhatsApp."
      />

      <div className="faq-list">
        {faqs.map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
