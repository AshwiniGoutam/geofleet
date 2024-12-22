import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./page.css";

export default function Features() {
  return (
    <section className="features-section">
      <div className="container">
        <div className="row row-gap-4 align-items-center">
          <div className="col-sm-6">
            <h3>Create optimized delivery routes from your orders.</h3>
            <p>
              Create optimized delivery routes from your orders in seconds with
              EasyRoutes, whether through our web platform or seamlessly
              integrated into your Shopify Admin.
            </p>
            <button className="primary-btn">
              Route Optimization <FontAwesomeIcon icon={faArrowRight} />{" "}
            </button>
          </div>
          <div className="col-sm-6">
            <img
              src="../../assets/images/features-image-1.png"
              alt="feature-1"
              width="100%"
            />
          </div>

          <div className="col-sm-6">
            <img
              src="../../assets/images/features-image-2.png"
              alt="feature-1"
              width="100%"
            />
          </div>
          <div className="col-sm-6">
            <h3>Keep customers up-to-date and informed.</h3>
            <p>
              EasyRoutes keeps your customers informed with automated delivery
              notifications and customizable tracking pages, allowing you to
              craft the perfect branded delivery experience.
            </p>
            <button className="primary-btn">
              Learn More <FontAwesomeIcon icon={faArrowRight} />{" "}
            </button>
          </div>

          <div className="col-sm-6">
            <h3>Give drivers the tools they need to deliver succesfully.</h3>
            <p>
              Our mobile app for iOS and Android walks your drivers through
              their delivery routes step-by-step, with all the information they
              need, right at their fingertips.
            </p>
            <button className="primary-btn">
              Route Optimization <FontAwesomeIcon icon={faArrowRight} />{" "}
            </button>
          </div>
          <div className="col-sm-6">
            <img
              src="../../assets/images/features-image-3.png"
              alt="feature-1"
              width="100%"
            />
          </div>
        </div>
        <div className="divider"></div>
      </div>
    </section>
  );
}
