import { useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatWeOffer from './components/WhatWeOffer';
import Menu from './components/Menu';
import PricingTimings from './components/PricingTimings';
import FAQ from './components/FAQ';
import PerfectFor from './components/PerfectFor';
import Gallery from './components/Gallery';
import Reservations from './components/Reservations';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.animation = 'fadeInUp 1s ease forwards';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(
      '.about-content, .menu-item, .gallery-item, .contact-item'
    );
    elements.forEach((el) => {
      (el as HTMLElement).style.opacity = '0';
      observer.observe(el);
    });

    // Ripple effect for buttons
    const handleButtonClick = function (this: HTMLElement, e: MouseEvent) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');

      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    };

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((btn) => {
      btn.addEventListener('click', handleButtonClick as EventListener);
    });

    return () => {
      observer.disconnect();
      buttons.forEach((btn) => {
        btn.removeEventListener('click', handleButtonClick as EventListener);
      });
    };
  }, []);

  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <WhatWeOffer />
      <Menu />
      <PricingTimings />
      <FAQ />
      <PerfectFor />
      <Gallery />
      <Reservations />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
