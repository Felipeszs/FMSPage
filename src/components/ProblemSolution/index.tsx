import { problemCards, processSteps } from "../../data/landingContent";
import { SectionHeader } from "../SectionHeader";
import "./styles.scss";

export function ProblemSolution() {
  return (
    <>
      <section className="problem-section" id="problema">
        <div className="section-shell">
          <SectionHeader
            align="left"
            eyebrow="O problema"
            title="Seu cliente te encontra, mas talvez não entre em contato"
            description="Muitos negócios aparecem no Google Maps ou têm Instagram, mas não têm uma página objetiva que apresente serviços, diferenciais, localização e um botão claro para contato."
          />

          <div className="problem-grid">
            {problemCards.map((card, index) => (
              <article className="problem-card" key={card.title}>
                <span className="problem-icon" aria-hidden="true">
                  {["⚡", "📱", "🔒"][index]}
                </span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="solution-section" id="solucao">
        <div className="section-shell">
          <SectionHeader
            eyebrow="A solução"
            title="Uma landing page cria o caminho mais curto entre interesse e contato"
            description="A página funciona como uma ponte organizada entre a descoberta do negócio e a mensagem no WhatsApp."
          />

          <div className="solution-grid">
            {processSteps.map((step, index) => (
              <article className="solution-step" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
