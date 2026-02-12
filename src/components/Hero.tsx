import { useEffect, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (window.innerWidth <= 768 && videoRef.current) {
      videoRef.current.removeAttribute('autoplay');
      videoRef.current.poster = 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200';
    }
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-video-container">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
          preload="metadata"
        >
          <source
            src="/vecteezy_ai-generated-beef-steaks-on-barbecue-grill-with-flames-and_40708831.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="title-line">The</span>
          <span className="title-main">Barbeque</span>
          <span className="title-line">Lounge</span>
        </h1>
        <p className="hero-subtitle">Where Fire Meets Flavor</p>
        <p className="hero-highlights">
          Unlimited Barbeque | Lavish Buffet | Live Counters | Dessert Galore
        </p>
        <div className="hero-cta">
          <a href="#reservations" className="btn btn-primary" onClick={(e) => handleClick(e, '#reservations')}>
            Reserve Your Table
          </a>
          <a href="#menu" className="btn btn-outline" onClick={(e) => handleClick(e, '#menu')}>
            Order Online
          </a>
        </div>
      </div>
    </section>
  );
}
