import { useEffect, useRef, useState } from 'react';
import Portal3D from '@/components/Portal3D';
import Synthesizer from '@/components/Synthesizer';
import ChallengeSystem from '@/components/ChallengeSystem';
import GlitchGallery from '@/components/GlitchGallery';
import MusicPlayer from '@/components/MusicPlayer';
import AIStudio from '@/components/AIStudio';
import MagicGate from '@/components/MagicGate';
import TopNav from '@/components/TopNav';
import HarmonicBar from '@/components/HarmonicBar';
import WaveformCanvas from '@/components/WaveformCanvas';

/**
 * BELENTANI // JUDAS ERA - OMEGA CORE
 * 
 * Design Philosophy: AETHERPUNK ORACLE
 * - Máquina Viva: Interfaz que respira, pulsa, reacciona
 * - Dualidad Sagrada: Negro absoluto vs Rojo neón
 * - Narrativa Interactiva: Usuario es agente en la crónica
 * - Precisión Estética: Cada píxel cuenta
 */

export default function Home() {
  const [bootComplete, setBootComplete] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentSection, setCurrentSection] = useState(0);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const cursorCrossRef = useRef<HTMLDivElement>(null);
  const bootScreenRef = useRef<HTMLDivElement>(null);

  // Boot Sequence
  useEffect(() => {
    const bootTimer = setTimeout(() => {
      setBootComplete(true);
      if (bootScreenRef.current) {
        bootScreenRef.current.style.opacity = '0';
        bootScreenRef.current.style.pointerEvents = 'none';
      }
    }, 3500);

    return () => clearTimeout(bootTimer);
  }, []);

  // Custom Cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${e.clientX}px`;
        cursorDotRef.current.style.top = `${e.clientY}px`;
      }
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.left = `${e.clientX}px`;
        cursorOutlineRef.current.style.top = `${e.clientY}px`;
      }
      if (cursorCrossRef.current) {
        cursorCrossRef.current.style.left = `${e.clientX}px`;
        cursorCrossRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // GSAP Animations on Mount
  useEffect(() => {
    if (!bootComplete || typeof window === 'undefined') return;

    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;

    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    // Hero animations
    gsap.to('.hero-pre-title', {
      opacity: 1,
      transform: 'translateY(0)',
      duration: 1,
      delay: 0.5,
      ease: 'power3.out',
    });

    gsap.to('.hero-title', {
      opacity: 1,
      transform: 'translateY(0)',
      duration: 1.2,
      delay: 0.8,
      ease: 'power3.out',
    });

    gsap.to('.hero-subtitle', {
      opacity: 1,
      transform: 'translateY(0)',
      duration: 1,
      delay: 1.1,
      ease: 'power3.out',
    });

    gsap.to('.cta-btn', {
      opacity: 1,
      transform: 'translateY(0)',
      duration: 1,
      delay: 1.4,
      ease: 'power3.out',
    });

    // Section animations with ScrollTrigger
    gsap.utils.toArray('.section-title').forEach((element: any) => {
      gsap.to(element, {
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    });

    gsap.utils.toArray('.section-subtitle').forEach((element: any) => {
      gsap.to(element, {
        opacity: 1,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    });

    // Parallax effect
    gsap.utils.toArray('.parallax-element').forEach((element: any) => {
      gsap.to(element, {
        y: -100,
        scrollTrigger: {
          trigger: element,
          scrub: 1,
          markers: false,
        },
      });
    });

    // Rune circle rotation
    gsap.to('.rune-svg', {
      rotation: 360,
      duration: 60,
      repeat: -1,
      ease: 'none',
    });

    gsap.to('.rune-svg.reverse', {
      rotation: -360,
      duration: 80,
      repeat: -1,
      ease: 'none',
    });
  }, [bootComplete]);

  // Scroll tracking for nav dots
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        if (
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-[#050505] text-white overflow-x-hidden">
      <MagicGate />
      {/* BOOT SCREEN */}
      <div
        ref={bootScreenRef}
        id="boot-screen"
        className="fixed inset-0 bg-black z-10000 flex flex-col items-center justify-center font-mono text-[#00ff41] text-sm text-center transition-opacity duration-1000"
      >
        <div className="boot-log w-96 h-36 overflow-hidden text-left mb-5 opacity-80 font-mono text-xs">
          <div className="text-[#00ff41]">
            [SYSTEM] Initializing BELENTANI CREATIVE OS v3.0...
            <br />
            [BOOT] Loading core modules...
            <br />
            [GSAP] Animation engine ready
            <br />
            [THREE] WebGL context initialized
            <br />
            [TONE] Audio synthesis active
            <br />
            [PORTAL] Quantum entanglement detected
            <br />
            [STATUS] System ready for consciousness transfer
          </div>
        </div>
        <div className="boot-bar w-80 h-0.5 bg-[rgba(0,255,65,0.2)] relative overflow-hidden">
          <div className="absolute inset-0 w-0 h-full bg-[#00ff41] shadow-[0_0_10px_#00ff41] animate-[bootLoad_3s_linear_forwards]" />
        </div>
        <div className="mt-5 font-mono text-xs">AWAITING TRANSMISSION...</div>
      </div>

      {/* CUSTOM CURSOR */}
      <div ref={cursorDotRef} className="cursor-dot" />
      <div ref={cursorOutlineRef} className="cursor-outline" />
      <div ref={cursorCrossRef} className="cursor-cross" />

      {/* ATMOSPHERE */}
      <div className="vignette" />
      <div className="grain" />
      <div className="scanlines" />
      <TopNav />
      <HarmonicBar />
      <WaveformCanvas />

      {/* HUD LAYER */}
      <div className="hud-layer">
        <div className="hud-top">
          <a href="#" className="hud-logo">
            BELENTANI <span>// JUDAS</span>
          </a>
          <div className="hud-element">
            <span>LIVE</span> OMEGA CORE v3.0
          </div>
        </div>
        <div className="hud-bottom">
          <div className="hud-element">
            <span>LAT:</span> 41.3851°N <span>LON:</span> 2.1734°E
            <br />
            <span>FREQ:</span> 430.08 Hz <span>DATE:</span> 10/7/2026
          </div>
          <div className="nav-dots">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div
                key={i}
                className={`nav-dot ${currentSection === i ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="relative z-5">
        {/* HOME SECTION */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-5">
          <div className="hero-pre-title font-mono text-sm text-[rgba(255,255,255,0.5)] tracking-widest mb-5 opacity-0 translate-y-5 border-b border-[#ff003c] pb-2.5">
            SYSTEM INITIALIZATION COMPLETE
          </div>
          <h1 className="hero-title font-[Cinzel_Decorative] text-8xl font-900 leading-tight mb-8 text-white opacity-0 translate-y-12 italic">
            BELENTANI <span className="text-[#ff003c]">// JUDAS ERA</span>
          </h1>
          <p className="hero-subtitle font-[Chakra_Petch] font-300 text-lg text-[rgba(255,255,255,0.5)] max-w-2xl mb-12 opacity-0 translate-y-5">
            Un sistema operativo humano corriendo cuatro procesos en paralelo. El Ángel. El Guerrero. El Analítico. El Cronista.
            <br />
            <br />
            <em>La traición es el input. La voz es el output.</em>
          </p>
          <button className="cta-btn px-16 py-5 bg-transparent border border-[#ff003c] text-white font-[Orbitron] font-bold text-sm tracking-widest uppercase opacity-0 translate-y-5 hover:text-white hover:shadow-[0_0_60px_rgba(255,0,60,0.8)] hover:border-white transition-all duration-400">
            Desbloquear Portal
          </button>
        </section>

        {/* THE ARTIST SECTION */}
        <section id="artist" className="section min-h-screen flex flex-col justify-center items-center px-8">
          <h2 className="section-title font-[Cinzel_Decorative] text-7xl font-900 text-center mb-5 opacity-0">
            THE <span className="text-white italic">ARTIST</span>
          </h2>
          <p className="section-subtitle font-mono text-sm text-[#ff003c] tracking-widest mb-16 opacity-0">
            Cuatro voces. Un solo hombre.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {[
              { name: 'El Ángel', desc: 'Voz de devoción y compasión. Quien ve lo sagrado en cada alma.' },
              { name: 'El Guerrero', desc: 'Fuerza y determinación. Quien lucha contra la injusticia.' },
              { name: 'El Analítico', desc: 'Precisión y lógica. Quien decodifica los patrones del universo.' },
              { name: 'El Cronista', desc: 'Memoria y testimonio. Quien registra la verdad de los tiempos.' },
            ].map((archetype, i) => (
              <div
                key={i}
                className="glass-panel p-6 bg-gradient-to-br from-[rgba(20,0,10,0.8)] to-[rgba(0,0,0,0.6)] backdrop-blur-2xl border border-[rgba(255,0,60,0.4)] shadow-[0_0_30px_rgba(255,0,60,0.1),inset_0_0_20px_rgba(0,0,0,0.5)]"
              >
                <h3 className="font-[Cinzel_Decorative] text-2xl font-bold text-[#ffd700] mb-2">
                  {archetype.name}
                </h3>
                <p className="text-[rgba(255,255,255,0.7)] text-sm">{archetype.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PORTAL SECTION */}
        <section id="portal" className="section min-h-screen flex flex-col justify-center items-center px-8">
          <h2 className="section-title font-[Cinzel_Decorative] text-7xl font-900 text-center mb-5 opacity-0">
            <span className="text-[#00ffff] italic">PORTAL</span>
          </h2>
          <p className="section-subtitle font-mono text-sm text-[#ff003c] tracking-widest mb-16 opacity-0">
            Diamantes 3D Interactivos
          </p>
          <div className="w-full max-w-4xl">
            <Portal3D />
          </div>
        </section>

        {/* CHALLENGES SECTION */}
        <section id="challenges" className="section min-h-screen flex flex-col justify-center items-center px-8">
          <h2 className="section-title font-[Cinzel_Decorative] text-7xl font-900 text-center mb-5 opacity-0">
            <span className="text-[#b026ff] italic">DESAFÍOS</span>
          </h2>
          <p className="section-subtitle font-mono text-sm text-[#ff003c] tracking-widest mb-16 opacity-0">
            Sistema Gamificado - Desbloquea Contenido Secreto
          </p>
          <div className="w-full max-w-4xl">
            <ChallengeSystem />
          </div>
        </section>

        {/* SYNTHESIZER SECTION */}
        <section id="synthesizer" className="section min-h-screen flex flex-col justify-center items-center px-8">
          <h2 className="section-title font-[Cinzel_Decorative] text-7xl font-900 text-center mb-5 opacity-0">
            <span className="text-[#00ff41] italic">SYNTHESIZER</span>
          </h2>
          <p className="section-subtitle font-mono text-sm text-[#ff003c] tracking-widest mb-16 opacity-0">
            Sintetizador Funcional con Tone.js
          </p>
          <div className="w-full max-w-4xl">
            <Synthesizer />
          </div>
        </section>

        {/* ART GALLERY SECTION */}
        <section id="gallery" className="section min-h-screen flex flex-col justify-center items-center px-8">
          <h2 className="section-title font-[Cinzel_Decorative] text-7xl font-900 text-center mb-5 opacity-0">
            ART <span className="text-white italic">GALLERY</span>
          </h2>
          <p className="section-subtitle font-mono text-sm text-[#ff003c] tracking-widest mb-16 opacity-0">
            Galería con Efectos Glitch
          </p>
          <div className="w-full max-w-6xl">
            <GlitchGallery />
          </div>
        </section>

        {/* MUSIC SECTION - ENHANCED */}
        <section id="music" className="section min-h-screen flex flex-col justify-center items-center px-8">
          <h2 className="section-title font-[Cinzel_Decorative] text-7xl font-900 text-center mb-5 opacity-0">
            <span className="text-[#00ffff] italic">MUSIC</span> ARCHIVE
          </h2>
          <p className="section-subtitle font-mono text-sm text-[#ff003c] tracking-widest mb-16 opacity-0">
            Sonic Archive v4.0 - Reproductor Integrado
          </p>
          <div className="w-full max-w-4xl">
            <MusicPlayer />
          </div>
        </section>

        {/* STUDIO SECTION */}
        <section id="studio" className="section min-h-screen flex flex-col justify-center items-center px-8">
          <h2 className="section-title font-[Cinzel_Decorative] text-7xl font-900 text-center mb-5 opacity-0">
            AI <span className="text-white italic">STUDIO</span>
          </h2>
          <p className="section-subtitle font-mono text-sm text-[#ff003c] tracking-widest mb-16 opacity-0">
            Herramientas Creativas Integradas
          </p>
          <div className="w-full max-w-4xl">
            <AIStudio />
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section min-h-screen flex flex-col justify-center items-center px-8">
          <h2 className="section-title font-[Cinzel_Decorative] text-7xl font-900 text-center mb-5 opacity-0">
            <span className="text-white italic">CONTACT</span>
          </h2>
          <p className="section-subtitle font-mono text-sm text-[#ff003c] tracking-widest mb-16 opacity-0">
            Conecta con Belentani
          </p>
          <div className="flex flex-wrap gap-6 justify-center max-w-4xl">
            {[
              { name: 'Instagram', url: 'https://www.instagram.com/belentani_/', icon: '📱' },
              { name: 'Spotify', url: 'https://open.spotify.com/artist/2bU5Ir70YHHuUnq2f3WCYl', icon: '🎵' },
              { name: 'YouTube', url: 'https://www.youtube.com/c/PedroMarcosSantosBelentani', icon: '📺' },
              { name: 'SoundCloud', url: 'https://soundcloud.com/belentani', icon: '🎧' },
              { name: 'ChartMetric', url: 'https://app.chartmetric.com/es/artist/5573163', icon: '📊' },
              { name: 'Deezer', url: 'https://www.deezer.com/mx/artist/99797362', icon: '🎼' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-[#ff003c] text-white hover:bg-[#ff003c] hover:shadow-[0_0_30px_rgba(255,0,60,0.5)] transition-all duration-300 font-mono text-sm"
              >
                {link.icon} {link.name}
              </a>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <section id="omega" className="min-h-screen flex flex-col justify-center items-center px-8 text-center">
          <div className="space-y-6 max-w-2xl">
            <h2 className="font-[Cinzel_Decorative] text-5xl font-bold text-[#ffd700]">
              LA LLAVE DORADA
            </h2>
            <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
              La traición es el input. La voz es el output.
              <br />
              <br />
              Belentani te canta esta historia para que no cometas el error de Judas.
              Para que no robes llaves que no te pertenecen.
              <br />
              <br />
              Y si ya lo hiciste, Belentani también te canta a ti.
              <br />
              <br />
              Sin condiciones. Sin juicio.
            </p>
            <p className="font-mono text-xs text-[#00ff41] tracking-widest">
              TRANSMISSION END
            </p>
            <p className="font-mono text-xs text-[#ff003c]">
              © 2026 BELENTANI CREATIVE OS v3.0
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
