import { useEffect, useState } from 'react';
import SoberHero from '@/components/SoberHero';
import EditorialCaseStudies from '@/components/EditorialCaseStudies';
import JudasChronicleArchive from '@/components/JudasChronicleArchive';
import JudasPsychologicalCore from '@/components/JudasPsychologicalCore';
import JudasOmniLedger from '@/components/JudasOmniLedger';
import { useCinematicMotion } from '@/hooks/useCinematicMotion';

export default function Home() {
  const [progress, setProgress] = useState(0);
  useCinematicMotion();

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="portfolio-shell">
      <div className="ambient-field" aria-hidden="true" />
      <div className="grain-overlay" aria-hidden="true" />
      <div className="scroll-progress" style={{ transform: `scaleY(${progress})` }} aria-hidden="true" />

      <nav className="minimal-nav" aria-label="Navegación principal">
        <a href="#top" className="wordmark">BELENTANI<span>//</span></a>
        <div className="minimal-nav__links">
          <a href="#works">OBRA</a>
          <a href="#method">MÉTODO</a>
          <a href="#contact">CONTACTO</a>
        </div>
        <span className="minimal-nav__status"><i /> DISPONIBLE / 2026</span>
      </nav>

      <main>
        <SoberHero />

        <section id="method" className="manifesto-section">
          <div className="manifesto-section__label" data-reveal>
            <span className="eyebrow">02 / POSICIÓN</span>
            <span>ESTUDIO INDEPENDIENTE</span>
          </div>
          <div className="manifesto-section__content" data-reveal>
            <p className="manifesto-kicker">PROCESS / 02 / MEMORY</p>
            <h2>No diseñamos superficies. <em>Instanciamos sistemas.</em></h2>
            <p className="manifesto-copy">La traición es el input. La voz es el output. Belentani escribe imagen, sonido y código en el mismo archivo para que una marca deje de hablar y empiece a tener presencia.</p>
          </div>
        </section>

        <EditorialCaseStudies />

        {/* JUDAS MASSIVE CHRONICLE ARCHIVE */}
        <JudasChronicleArchive />

        {/* PSYCHOLOGICAL TOPOLOGY & OMNI LEDGER */}
        <JudasPsychologicalCore />
        <JudasOmniLedger />

        <section className="principles-section">
          <div className="principles-heading" data-reveal>
            <p className="eyebrow">03 / MÉTODO</p>
            <h2>Precisión<br /><em>antes que ruido.</em></h2>
          </div>
          <div className="principles-list">
            <article data-reveal>
              <span>01</span>
              <h3>La imagen como portal</h3>
              <p>Una dirección de arte no ilustra una idea. Abre un mundo, guarda un símbolo y decide quién puede atravesarlo.</p>
            </article>
            <article data-reveal>
              <span>02</span>
              <h3>El movimiento como señal</h3>
              <p>El ritmo, la pausa y la fricción importan tanto como el frame final. Cada transición revela el estado del sistema.</p>
            </article>
            <article data-reveal>
              <span>03</span>
              <h3>La tecnología como archivo</h3>
              <p>WebGL, sonido y código no son ornamento. Son la memoria que permanece después del scroll y vuelve a activar la llave.</p>
            </article>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-section__topline"><span>04 / CONTACTO</span><span>BARCELONA — WORLDWIDE</span></div>
          <h2 data-reveal>Hagamos algo<br /><em>difícil de olvidar.</em></h2>
          <a className="contact-link" href="mailto:studio@belentani.com" data-reveal>studio@belentani.com <span>↗</span></a>
          <footer className="contact-footer"><span>© BELENTANI / JUDAS ERA</span><span>INSTAGRAM&nbsp;&nbsp; SPOTIFY&nbsp;&nbsp; YOUTUBE</span><span>BACK TO TOP ↑</span></footer>
        </section>
      </main>
    </div>
  );
}
