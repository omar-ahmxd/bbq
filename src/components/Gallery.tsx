const galleryItems = [
  {
    src: '/images/interior-wide.jpg',
    alt: 'The Barbeque Lounge Interior',
    title: 'Elegant Interior',
    className: 'tall',
  },
  {
    src: '/images/premium-seating.jpg',
    alt: 'Premium Seating Area',
    title: 'Premium Seating',
  },
  {
    src: '/images/live-counters.jpg',
    alt: 'Live Counters',
    title: 'Live Counters',
  },
  {
    src: '/images/dining-vibe.jpg',
    alt: 'Dining Experience',
    title: 'The Vibe',
    className: 'wide',
  },
  {
    src: '/images/entrance.jpg',
    alt: 'The Barbeque Lounge Entrance',
    title: 'Welcome',
  },
  {
    src: '/images/buffet-stations.jpg',
    alt: 'Buffet Stations',
    title: 'Buffet Spread',
  },
  {
    src: '/images/restaurant-depth.jpg',
    alt: 'Restaurant Overview',
    title: 'The Lounge',
  },
  {
    src: '/images/dessert-corner.jpg',
    alt: 'Dessert Corner',
    title: 'Dessert Galore',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="gallery-grid">
        <div className="gallery-text-card">
          <h2 className="gallery-label">A Glimpse Inside</h2>
          <h3 className="gallery-heading">Experience The Ambiance</h3>
          <div className="gallery-text-divider"></div>
          <p className="gallery-text-body">
            From the moment you step in, you're greeted by the aroma of sizzling grills and the
            warmth of a lively lounge. Our interiors are stylish, aesthetic, comfortable and perfect
            for both casual dining and celebrations.
          </p>
          <p className="gallery-text-promise">
            Great food, great company, and great vibes - that's the Barbeque Lounge promise.
          </p>
        </div>

        {galleryItems.map((item) => (
          <div key={item.title} className={`gallery-item${item.className ? ' ' + item.className : ''}`}>
            <img src={item.src} alt={item.alt} loading="lazy" />
            <div className="gallery-overlay">
              <h4>{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
