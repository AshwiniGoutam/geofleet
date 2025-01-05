import React from "react";
import "./page.css";

export default function Pricing() {
  const pricingTiers = [
    {
      title: "Base",
      description: "Free start for your project on our platform.",
      price: "0",
      buttonText: "Try for Free",
      buttonVariant: "secondary-custom",
    },
    {
      title: "Standard",
      description: "For a small company that wants to show what it's worth.",
      price: "300",
      buttonText: "Start 14 Days Free Trial",
      buttonVariant: "primary-custom",
    },
    {
      title: "Unlimited",
      description: "For a large company that wants to achieve maximum returns",
      price: "600",
      buttonText: "Start 14 Days Free Trial",
      buttonVariant: "secondary-custom",
    },
  ];

  const features = [
    "Access to editing all blocks",
    "Editing blocks together",
    "Access to all premium icons",
    "A dedicated domain",
    "Ability to integrate with CMS",
  ];
  return (
    <section className="pricing-section">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2>
            Expand your options with a subscription
          </h2>
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
              />
            </div>
            <span className="text-muted">Bill Anually</span>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {pricingTiers.map((tier, index) => (
            <div key={index} className="col">
              <div className="card h-100 pricing-card">
                <div className="card-body p-4">
                  <h3 className="card-title">
                    {tier.title}
                  </h3>
                  <p className="text-muted">{tier.description}</p>
                  <div className="my-4">
                    <span className="h3 fw-bold text-primary-custom">$</span>
                    <span className="display-5 fw-bold text-primary-custom">
                      {tier.price}
                    </span>
                    <span className="text-muted ms-2">Per User / Per Year</span>
                  </div>
                  <ul className="feature-list">
                    {features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="feature-item d-flex align-items-center"
                      >
                        {/* <Check className="check-icon me-2" size={20} /> */}
                        <span className="text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`btn btn-${tier.buttonVariant} w-100 py-2 mt-4`}
                  >
                    {tier.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
