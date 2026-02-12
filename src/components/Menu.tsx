const menuItems = [
  {
    image:
      'https://images.unsplash.com/photo-ecpu9sMce-c?auto=format&fit=crop&w=400&q=60',
    alt: 'Smoky Starters',
    name: 'Smoky Starters',
    description:
      'Perfectly grilled starters infused with bold spices and signature marinades',
  },
  {
    image:
      'https://images.unsplash.com/photo-1603285636638-d684a6ccf946?auto=format&fit=crop&w=400&q=60',
    alt: 'Signature Grills',
    name: 'Signature Grills',
    description:
      'Juicy, flame-grilled selections cooked live and served fresh from the grill',
  },
  {
    image:
      'https://images.unsplash.com/photo-1702827496422-edff3a844c9c?auto=format&fit=crop&w=400&q=60',
    alt: 'Main Course Delights',
    name: 'Main Course Delights',
    description:
      'A rich spread of curries, breads, and accompaniments to complete your feast',
  },
  {
    image:
      'https://images.unsplash.com/photo-VmGectHGVmY?auto=format&fit=crop&w=400&q=60',
    alt: 'Desserts',
    name: 'Desserts',
    description:
      'Decadent sweets crafted to perfectly round off your barbeque experience',
  },
];

export default function Menu() {
  return (
    <section id="menu" className="menu">
      <div className="container">
        <h2 className="section-subtitle">Culinary Journey</h2>
        <h3 className="section-title">Our Signature Menu</h3>

        <div className="menu-content">
          <div className="menu-section" id="starters">
            <div className="menu-grid">
              {menuItems.map((item) => (
                <div key={item.name} className="menu-item">
                  <div className="menu-item-image">
                    <img src={item.image} alt={item.alt} loading="lazy" />
                  </div>
                  <div className="menu-item-content">
                    <h4 className="menu-item-name">{item.name}</h4>
                    <p className="menu-item-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
