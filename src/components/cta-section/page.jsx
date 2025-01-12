import React from "react";
import "./page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function CtaSection() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="row align-items-center overflow-hidden">
          <div className="col-sm-6" data-aos="fade-right">
            <h2>
              Secure and Reliable – Our Geofleet Driver App is Built for Your
              Peace of Mind.
            </h2>
            <p>
              Designed with safety and transparency, ensuring no hidden{" "}
              <span className="d-block">risks or surprises.</span>
            </p>
            <input
              type="email"
              placeholder="Enter your email address"
              className="form-control"
            />

            <p className="login-text">
              Already a member? <a href="#">Sign In</a>
            </p>
          </div>
          <div className="col-sm-6" data-aos="fade-left">
            <img src="../../assets/images/cta-image.png" alt="images" className="w-100"/>
          </div>
        </div>
      </div>
    </section>
  );
}
