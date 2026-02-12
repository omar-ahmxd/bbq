import { useState } from 'react';

const faqs = [
  {
    id: 'faq1',
    question: 'Do you offer unlimited barbeque?',
    answer: 'Yes, we offer an unlimited barbeque and buffet experience.',
  },
  {
    id: 'faq2',
    question: 'Do you have vegetarian options?',
    answer: 'Yes, we have a wide range of vegetarian starters and dishes.',
  },
  {
    id: 'faq3',
    question: 'Is prior reservation required?',
    answer: 'Reservations are recommended, especially on weekends.',
  },
  {
    id: 'faq4',
    question: 'Do you host group events?',
    answer: 'Yes, we cater to group dining, corporate outings, and celebrations.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq">
      <div className="container">
        <h2 className="section-subtitle">Questions?</h2>
        <h3 className="section-title">Frequently Asked Questions</h3>

        <div className="faq-accordion">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className={`faq-item card${isOpen ? ' open' : ''}`}>
                <button
                  className="faq-question"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={faq.id}
                  onClick={() => toggle(faq.id)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon" aria-hidden="true">
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </button>
                <div
                  className="faq-answer"
                  id={faq.id}
                  role="region"
                  aria-hidden={!isOpen}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
