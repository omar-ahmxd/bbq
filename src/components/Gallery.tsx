const galleryItems = [
  {
    src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
    alt: 'BBQ Platter',
    title: 'Signature Platter',
    className: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600',
    alt: 'Restaurant Interior',
    title: 'Elegant Interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600',
    alt: 'BBQ Ribs',
    title: 'Premium Ribs',
  },
  {
    src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200',
    alt: 'Restaurant Ambiance',
    title: 'Dining Experience',
    className: 'wide',
  },
  {
    src: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600',
    alt: 'Grilled Steak',
    title: 'Grilled Perfection',
  },
  {
    src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600',
    alt: 'Bar Area',
    title: 'Premium Bar',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-subtitle">Visual Journey</h2>
        <h3 className="section-title">Experience The Ambiance</h3>
        <div className="experience-content">
          <p>
            From the moment you step in, you're greeted by the aroma of sizzling grills and the
            warmth of a lively lounge. Our interiors are stylish, aesthetic, comfortable and perfect
            for both casual dining and celebrations.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.title} className={`gallery-item${item.className ? ' ' + item.className : ''}`}>
              <img src={item.src} alt={item.alt} />
              <div className="gallery-overlay">
                <h4>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
        <p className="experience-highlight">
          <strong>
            Great food, great company, and great vibes - that's the Barbeque Lounge promise.
          </strong>
        </p>
      </div>
    </section>
  );
}
