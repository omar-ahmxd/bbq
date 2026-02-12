import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const aboutSection = document.querySelector('.about') as HTMLElement | null;
      if (!aboutSection) return;

      const sectionTop = aboutSection.offsetTop;
      const sectionHeight = aboutSection.offsetHeight;
      const windowHeight = window.innerHeight;

      if (scrolled + windowHeight > sectionTop && scrolled < sectionTop + sectionHeight) {
        const parallaxElements = document.querySelectorAll('.stack-image') as NodeListOf<HTMLElement>;
        const relativeScroll = scrolled - sectionTop + windowHeight;

        parallaxElements.forEach((element, index) => {
          const speeds = [0.15, 0.1, 0.12];
          const speed = speeds[index] || 0.1;
          const yPos = -(relativeScroll * speed);
          const currentRotation = element.classList.contains('stack-1')
            ? -5
            : element.classList.contains('stack-2')
              ? 3
              : -2;
          element.style.transform = `translateY(${yPos}px) rotate(${currentRotation}deg)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-subtitle">About Us</h2>
            <h3 className="section-title">Fire, Flavor &amp; Finesse</h3>
            <p className="about-text">
              Welcome to The Barbeque Lounge - a destination crafted for true BBQ lovers. From
              sizzling grills to lavish spreads, every experience here is designed to bring people
              together over great food and unforgettable moments.
            </p>
            <p className="about-text">
              At The Barbeque Lounge, we believe barbeque is more than just food - it's an
              experience. Built around fire, flavor, and finesse, our lounge blends bold tastes with
              a warm, vibrant ambience.
            </p>
            <p className="about-text">
              Whether you're dining with family, celebrating with friends, or hosting a special
              gathering, we offer an atmosphere that's lively, welcoming, and indulgent. Every dish
              is carefully prepared, every grill fired to perfection, and every detail crafted to
              elevate your dining experience.
            </p>
          </div>
          <div className="about-images">
            <div className="image-stack">
              <img
                src="/photo-1555939594-58d7cb561ad1.avif"
                alt="BBQ Platter"
                className="stack-image stack-1"
                loading="lazy"
              />
              <img
                src="/emerson-vieira-_aR4l6fj6wQ-unsplash.jpg"
                alt="Grill Master at Work"
                className="stack-image stack-2"
                loading="lazy"
              />
              <img
                src="/istockphoto-2213556496-612x612.jpg"
                alt="Grilled Steak"
                className="stack-image stack-3"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
