import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { applyLangDir } from './i18n';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import CTA from './components/CTA/CTA';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    applyLangDir(i18n.language);
  }, [i18n.language]);

  return (
    <div className="app">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
