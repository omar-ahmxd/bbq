const items = [
  { icon: 'fas fa-users', label: 'Family Dining' },
  { icon: 'fas fa-heart', label: 'Friends & Group Gatherings' },
  { icon: 'fas fa-briefcase', label: 'Office Outings' },
  { icon: 'fas fa-birthday-cake', label: 'Birthdays & Celebrations' },
];

export default function PerfectFor() {
  return (
    <section className="perfect-for">
      <div className="container">
        <h2 className="section-subtitle">Occasions</h2>
        <h3 className="section-title">Perfect For</h3>

        <div className="perfect-for-list">
          {items.map((item) => (
            <div key={item.label} className="perfect-for-item">
              <i className={item.icon}></i>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
