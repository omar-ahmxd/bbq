const items = [
  { icon: 'fas fa-users', label: 'Family Dining' },
  { icon: 'fas fa-heart', label: 'Friends & Group Gatherings' },
  { icon: 'fas fa-briefcase', label: 'Office Outings' },
  { icon: 'fas fa-birthday-cake', label: 'Birthdays & Celebrations' },
];

export default function PerfectFor() {
  return (
    <div className="perfect-for-banner">
      <span className="perfect-for-label">Perfect For</span>
      <div className="perfect-for-strip">
        {items.map((item) => (
          <div key={item.label} className="perfect-for-chip">
            <i className={item.icon}></i>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
