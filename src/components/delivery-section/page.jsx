import React from "react";
import "./page.css";

export default function DeliverySection() {
  return (
    <section className="delivery-section">
      <div className="container">
        <div className="row">
          <h2 data-aos="fade-up">
            Start saving 30% on your
            <span className="d-block">delivery costs today</span>
          </h2>

          <div
            className="d-flex align-items-center justify-content-center gap-3"
            data-aos="fade-up"
          >
            <button className="devlivery-btn-1">Start free trial</button>
            <button className="devlivery-btn-2">Book a demo</button>
          </div>
        </div>
      </div>
    </section>
  );
}
