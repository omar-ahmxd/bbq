export default function PricingTimings() {
  return (
    <section id="pricing" className="pricing-timings">
      <div className="container">
        <h2 className="section-subtitle">Buffet Pricing</h2>
        <h3 className="section-title">Pricing &amp; Timings</h3>

        <div className="pricing-timings-content">
          <div className="pricing-columns">
            <div className="pricing-column">
              <h4 className="day-heading">Monday to Thursday</h4>
              <div className="pricing-list">
                <div className="pricing-item">
                  <span className="pricing-label">VEG</span>
                  <span className="pricing-value">&#8377;1150</span>
                </div>
                <div className="pricing-item">
                  <span className="pricing-label">NON VEG</span>
                  <span className="pricing-value">&#8377;1250</span>
                </div>
                <div className="pricing-item">
                  <span className="pricing-label">KIDS</span>
                  <span className="pricing-value">&#8377;400 + TAX</span>
                </div>
              </div>
            </div>

            <div className="pricing-column">
              <h4 className="day-heading">Friday to Sunday</h4>
              <div className="pricing-list">
                <div className="pricing-item">
                  <span className="pricing-label">VEG</span>
                  <span className="pricing-value">&#8377;1150</span>
                </div>
                <div className="pricing-item">
                  <span className="pricing-label">NON VEG</span>
                  <span className="pricing-value">&#8377;1250</span>
                </div>
                <div className="pricing-item">
                  <span className="pricing-label">KIDS</span>
                  <span className="pricing-value">&#8377;400 + TAX</span>
                </div>
              </div>
            </div>
          </div>

          <div className="timings-columns timings-inline">
            <div className="timing-column">
              <h4 className="day-heading">Lunch</h4>
              <div className="timing-list timing-list-inline">
                <p>12:00 PM - 2:00 PM</p>
                <span className="separator">|</span>
                <p>2:30 PM - 4:30 PM</p>
              </div>
            </div>

            <div className="timing-column">
              <h4 className="day-heading">Dinner</h4>
              <div className="timing-list timing-list-inline">
                <p>7:00 PM - 9:00 PM</p>
                <span className="separator">|</span>
                <p>9:30 PM - 11:30 PM</p>
              </div>
            </div>
          </div>
        </div>

        <p className="note-text">
          Saturday &amp; Sunday: Special extended timings available. Please contact us for details.
        </p>
      </div>
    </section>
  );
}
