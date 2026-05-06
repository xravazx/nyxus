import React, { useEffect, Suspense, lazy } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

// Componentes de carga diferida (Lazy Loading)
const Features = lazy(() => import('./components/Features'));
const Showcase = lazy(() => import('./components/Showcase'));
const Services = lazy(() => import('./components/Services'));
const Contact = lazy(() => import('./components/Contact'));

const Loader = () => (
  <div style={{ 
    padding: '8rem 0', 
    textAlign: 'center', 
    color: 'var(--accent-color)', 
    fontFamily: "'JetBrains Mono', monospace",
    animation: 'glitch 1s infinite' 
  }}>
    [ CARGANDO MODULO... ]
  </div>
);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <>
      <CustomCursor />
      <div className="scanlines"></div>
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<Loader />}>
          <Features />
          <Showcase />
          <Services />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
