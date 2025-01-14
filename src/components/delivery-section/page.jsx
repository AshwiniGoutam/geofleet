import React from "react";
import "./page.css";
import PricingModal from "../pricing/pricing-model";
import { useState } from "react";

export default function DeliverySection() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <PricingModal show={modalShow} onHide={() => setModalShow(false)} />
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
              <button
                className="devlivery-btn-1"
                onClick={() => setModalShow(true)}
              >
                Schedule a demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
