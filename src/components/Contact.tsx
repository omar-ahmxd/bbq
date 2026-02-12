export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="section-subtitle">Get In Touch</h2>
            <h3 className="section-title">Visit Us</h3>

            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Location</h4>
                  <p>
                    The Barbeque Lounge
                    <br />
                    5/360, First Floor, Rajiv Gandhi Salai
                    <br />
                    Okkiyampet, Mutthukaranchavadi
                    <br />
                    Thoraipakkam, Chennai – 600097
                    <br />
                    Tamil Nadu
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-clock"></i>
                <div>
                  <h4>Hours</h4>
                  <p>
                    Monday - Thursday: 11:30 AM - 10:00 PM
                    <br />
                    Friday - Saturday: 11:30 AM - 11:00 PM
                    <br />
                    Sunday: 12:00 PM - 9:00 PM
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Contact</h4>
                  <p>
                    Phone: +91 9884211666 / +91 9884311666 / +91 9884723999
                    <br />
                    Email: thebarbequelounge@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6677047937744!2d80.24692257507571!3d12.92919098738191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525c5d5e5e5e5e%3A0x5e5e5e5e5e5e5e5e!2s5%2F360%2C%20Rajiv%20Gandhi%20Salai%2C%20Okkiyampet%2C%20Muttukkaranchavadi%2C%20Chennai%2C%20Thoraipakkam%2C%20Tamil%20Nadu%20600097!5e0!3m2!1sen!2sin!4v1234567890"
              allowFullScreen
              loading="lazy"
              title="The Barbeque Lounge Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
