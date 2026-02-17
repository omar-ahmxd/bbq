import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Reservations() {
  const formRef = useRef<HTMLFormElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const [submitState, setSubmitState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    emailjs.init('YOUR_PUBLIC_KEY');
  }, []);

  useEffect(() => {
    if (dateRef.current) {
      const today = new Date().toISOString().split('T')[0];
      dateRef.current.setAttribute('min', today);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSubmitState('sending');

    const form = formRef.current;
    const templateParams = {
      to_email: 'thebarbequelounge@gmail.com',
      from_name: (form.elements.namedItem('name') as HTMLInputElement).value,
      from_email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      date: (form.elements.namedItem('date') as HTMLInputElement).value,
      time: (form.elements.namedItem('time') as HTMLInputElement).value,
      guests: (form.elements.namedItem('guests') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value || 'No special requests',
      reservation_date: new Date().toLocaleString(),
    };

    emailjs
      .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
      .then(() => {
        setSubmitState('success');
        alert(
          'Thank you for your reservation! We have sent the details to thebarbequelounge@gmail.com and will contact you shortly to confirm.'
        );
        setTimeout(() => {
          form.reset();
          setSubmitState('idle');
        }, 3000);
      })
      .catch((error) => {
        console.error('Failed to send reservation:', error);
        setSubmitState('error');
        alert(
          'Sorry, there was an error sending your reservation. Please try again or contact us directly at thebarbequelounge@gmail.com'
        );
        setTimeout(() => {
          setSubmitState('idle');
        }, 3000);
      });
  };

  const buttonText =
    submitState === 'sending'
      ? 'Sending reservation...'
      : submitState === 'success'
        ? '\u2713 Reservation Sent!'
        : submitState === 'error'
          ? '\u2717 Failed - Try Again'
          : 'Confirm Reservation';

  const buttonStyle =
    submitState === 'success'
      ? { backgroundColor: '#4CAF50' }
      : submitState === 'error'
        ? { backgroundColor: '#f44336' }
        : {};

  return (
    <section id="reservations" className="reservations">
      <div className="container">
        <div className="reservation-layout">
          <div className="reservation-info">
            <h2 className="section-subtitle">Book Your Experience</h2>
            <h3 className="section-title">Reserve Your Table</h3>
            <div className="reservation-divider"></div>
            <p className="reservation-tagline">Come Hungry. Leave Happy.</p>
            <p className="reservation-description">
              Experience the joy of barbeque the way it's meant to be - bold, indulgent and unforgettable.
            </p>
            <p className="reservation-cta-text">Reserve your table today.</p>
            <div className="reservation-contact-info">
              <div className="reservation-contact-item">
                <i className="fas fa-phone"></i>
                <span>+91 9884211666</span>
              </div>
              <div className="reservation-contact-item">
                <i className="fas fa-envelope"></i>
                <span>thebarbequelounge@gmail.com</span>
              </div>
              <div className="reservation-contact-item">
                <i className="fas fa-clock"></i>
                <span>Lunch & Dinner, All week</span>
              </div>
            </div>
          </div>

          <div className="reservation-container">
            <h4 className="form-heading">Fill in your details</h4>
            <form className="reservation-form" ref={formRef} onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <input type="text" id="name" name="name" required />
                  <label htmlFor="name">Full Name</label>
                </div>
                <div className="form-group">
                  <input type="email" id="email" name="email" required />
                  <label htmlFor="email">Email Address</label>
                </div>
                <div className="form-group">
                  <input type="tel" id="phone" name="phone" required />
                  <label htmlFor="phone">Phone Number</label>
                </div>
                <div className="form-group">
                  <input type="date" id="date" name="date" ref={dateRef} required />
                  <label htmlFor="date" className="active">
                    Date
                  </label>
                </div>
                <div className="form-group">
                  <input type="time" id="time" name="time" required />
                  <label htmlFor="time" className="active">
                    Time
                  </label>
                </div>
                <div className="form-group">
                  <select id="guests" name="guests" required>
                    <option value="">Select Guests</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6+ People</option>
                  </select>
                  <label htmlFor="guests" className="active">
                    Number of Guests
                  </label>
                </div>
              </div>
              <div className="form-group full-width">
                <textarea id="message" name="message" rows={3}></textarea>
                <label htmlFor="message">Special Requests</label>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-submit"
                disabled={submitState === 'sending'}
                style={buttonStyle}
              >
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
