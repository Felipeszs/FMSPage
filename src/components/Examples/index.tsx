import { portfolioExamples } from "../../data/landingContent";
import { SectionHeader } from "../SectionHeader";
import "./styles.scss";

export function Examples() {
  return (
    <section className="examples-section" id="exemplos">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Exemplos"
          title="Modelos demonstrativos para negócios locais"
          description="Conceitos criados para mostrar como uma página bem estruturada transforma a presença digital de um negócio."
        />

        <div className="examples-grid">
          {portfolioExamples.map((example, index) => (
            <article className="example-card" key={example.name}>
              <div className={`example-preview example-preview--${index + 1}`}>
                <div className="preview-mock">
                  <div className="preview-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <strong>{example.name}</strong>
                  <p>{example.description}</p>
                  <span className="preview-button">Agendar avaliação →</span>
                </div>
              </div>
              <div className="example-body">
                <span>{example.category}</span>
                <h3>{example.name}</h3>
                <p>{example.description}</p>
                <a
                  href={example.url ?? "#contato"}
                  target={example.url ? "_blank" : undefined}
                  rel={example.url ? "noreferrer" : undefined}
                >
                  Ver modelo demonstrativo →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
