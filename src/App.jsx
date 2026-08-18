import Hero from "./components/Hero";
import IntroText from "./components/IntroText";
import ImageStrip from "./components/ImageStrip";
import ProblemsSection from "./components/ProblemsSection";
import ProcessSection from "./components/ProcessSection";
import PortfolioGallery from "./components/PortfolioGallery";
import WhoItsFor from "./components/WhoItsFor";
import FaqSection from "./components/FaqSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main>
        <Hero />
        <IntroText />
        <ImageStrip />
        <ProblemsSection />
        <ProcessSection />
        <PortfolioGallery />
        <WhoItsFor />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
