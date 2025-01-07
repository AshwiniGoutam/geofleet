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

          <div className="col-sm-12 col-md-6 col-lg-4" data-aos="fade-up">
            <div className="stats-div">
              <img src="../../assets/images/delivery-icon-1.png" alt="icon" />
              <div>
                <h4>25%</h4>
                <p>Lower cost per delivery</p>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4" data-aos="fade-up">
            <div className="stats-div">
              <img src="../../assets/images/delivery-icon-2.png" alt="icon" />
              <div>
                <h4>99%</h4>
                <p>On-time deliveries</p>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4" data-aos="fade-up">
            <div className="stats-div">
              <img src="../../assets/images/delivery-icon-3.png" alt="icon" />
              <div>
                <h4>5 Stars</h4>
                <p>Delivery experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
