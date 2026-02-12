const offerings = [
  {
    icon: 'fas fa-fire',
    title: 'Unlimited Barbeque Experience',
    description:
      'An all-you-can-enjoy barbeque spread featuring smoky grills, bold marinades, and perfectly cooked favorites.',
  },
  {
    icon: 'fas fa-utensils',
    title: 'Lavish Buffet',
    description:
      'A wide selection of starters, mains, and accompaniments curated to suit every palate.',
  },
  {
    icon: 'fas fa-plate-wheat',
    title: 'Live Counters',
    description:
      'Freshly prepared dishes served straight from the counter — hot, flavorful, and made just for you.',
  },
  {
    icon: 'fas fa-birthday-cake',
    title: 'Dessert Galore',
    description: 'A generous dessert spread to end your meal on a sweet note.',
  },
];

export default function WhatWeOffer() {
  return (
    <section className="what-we-offer">
      <div className="container">
        <h2 className="section-subtitle">Highlights</h2>
        <h3 className="section-title">What We Offer</h3>

        <div className="offerings-grid">
          {offerings.map((item) => (
            <div key={item.title} className="offering-item card">
              <i className={`${item.icon} feature-icon`}></i>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
