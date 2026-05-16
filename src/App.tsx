import { Examples } from "./components/Examples";
import { Faq } from "./components/Faq";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Pricing } from "./components/Pricing";
import { ProblemSolution } from "./components/ProblemSolution";
import { whatsappUrl } from "./data/landingContent";

export default function App() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <ProblemSolution />
        <Examples />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <a className="whatsapp-float" href={whatsappUrl} aria-label="Falar no WhatsApp">
        W
      </a>
    </>
  );
}
