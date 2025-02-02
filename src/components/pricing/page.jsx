import React, { useState } from "react";
import "./page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import PricingModal from "./pricing-model";

export default function Pricing() {
  const [Active, setActive] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const pricingTiers = [
    {
      title: "Base",
      description: "If you only need route optimization and basic dispatching.",
      price: `${Active ? "12" : "10"}`,
      buttonText: "Try for Free",
      buttonVariant: "secondary-custom",
      h5Heading: "Includes:",
      features: [
        "Live GPS & Progress Tracking",
        "Mobile App for Dispatch.",
        "SIM-Based Tracking",
        "Fleet Management Module.",
        "Basic Reports & Analytics.",
        "Real-time Order Tracking",
        "Basic Delivery Analytics",
        "Basic Route Planning",
        "Route Replay & History",
      ],
    },
    {
      title: "Standard",
      description:
        "For growing businesses that benefit from more real-time visibility.",
      price: `${Active ? "15" : "12"}`,
      buttonText: "Start 14 Days Free Trial",
      buttonVariant: "primary-custom",
      h5Heading: "Everything in Standard, plus:",
      features: [
        "Fleet Performance Analytics",
        "API Integrations",
        "Driver Behavior Monitoring	",
        "Customer Notifications",
        "API & Marketplace Integrations	",
        "AI-Driven Route Optimization",
        "Traffic & Weather-Based Adjustments",
      ],
    },
    {
      title: "Enterprise",
      description:
        "For innovative delivery businesses that offer a 5-star delivery experience.",
      price: "Contact Us",
      buttonText: "Start 14 Days Free Trial",
      buttonVariant: "secondary-custom",
      h5Heading: "Everything in Professional, plus:",
      features: [
        "AI Copilot for Fleet Guidance",
        "Dedicated Account Manager",
        "24/7 Support & Custom Integrations	",
        "AI-Based Dispatch & Load Balancing",
        "SLA Compliance & Priority Support	",
        "Dynamic Routing with Real-Time Adjustments",
        "API & AI-Based Load Optimization",
        "Dedicated Routing Support",
      ],
    },
  ];

  return (
    <>
      <PricingModal show={modalShow} onHide={() => setModalShow(false)} />
      <section className="pricing-section" id="pricing">
        <div className="container py-5">
          <div
            className="text-center mb-5"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
          >
            <h2>Expand your options with a subscription</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: "800px" }}>
              Graphs displaying your performance for metrics like follower
              evolution, average rate per post and reach and impressions to give
              you the insights.
            </p>

            <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
              <span className="text-muted">Bill Monthly</span>
              <div className="form-check form-switch pricing-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="billingSwitch"
                  onChange={() => setActive(!Active)}
                />
              </div>
              <span className="text-muted">Bill Anually</span>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className="col"
                data-aos="fade-up"
                data-aos-offset={`${index + 2 + "00"}`}
                data-aos-easing="ease-in-sine"
              >
                <div className="card h-100 pricing-card">
                  {index === 2 && (
                    <div className="popular-card">
                      <p>Most popular for delivery businesses</p>
                    </div>
                  )}
                  <div className="card-body p-4">
                    <h3 className="card-title">{tier.title}</h3>
                    <p className="text-muted">{tier.description}</p>
                    <div className="my-4">
                      {index !== 2 && (
                        <span className="h3 fw-bold text-primary-custom">
                          $
                        </span>
                      )}
                      <span className="display-5 fw-semi-bold text-primary-custom">
                        {tier.price}
                      </span>
                      {index === 2 ? (
                        ""
                      ) : (
                        <span className="d-block text-muted ms-2">
                          Per User / Per {Active ? "Year" : "Month"}
                        </span>
                      )}

                      <button onClick={() => setModalShow(true)}>
                        Schedule a demo
                      </button>
                      <span className="credit-span">
                        No credit card requried.
                      </span>
                    </div>
                    <ul className="feature-list">
                      <h5 className="mb-4">{tier?.h5Heading}</h5>
                      {tier?.features &&
                        tier?.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="feature-item d-flex align-items-center"
                          >
                            <span className="check">
                              <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className="text-muted">{feature}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
