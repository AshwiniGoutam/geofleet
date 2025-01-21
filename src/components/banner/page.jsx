import React, { useState } from "react";
import Clients from "../clients/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PricingModal from "../pricing/pricing-model";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Banner() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <section
      className="hero-section overflow-hidden"
      id="home"
      data-aos="fade-down"
    >
      <PricingModal show={modalShow} onHide={() => setModalShow(false)} />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img
              src="../../assets/images/vector-icon-3.png"
              alt="vector-icon-1"
              className="vector-icon-1"
            />
            <img
              src="../../assets/images/vector-icon-1.png"
              alt="vector-icon-1"
              className="vector-icon-2"
            />
            <h1>
              Smarter Fleets,
              <span className=""> Seamless Deliveries.</span>
            </h1>
            <p className="description">
              Optimizing Fleets, Planning Routes, and Ensuring Seamless
              Deliveries with Driver Excellence.
            </p>

            <div className="d-flex align-items-center gap-4">
              <button
                className="primary-btn"
                onClick={() => setModalShow(true)}
              >
                Schedule a Demo{" "}
              </button>
              <a href="http://app.geofleet.ai/" target="_blank">
                Explore the Product <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>

            <div className="review-section" data-aos-easing="ease-in-sine">
              <div>
                <img src="../../assets/images/right-icon.png" alt="icon" />
                <p>Get 7 days free trial</p>
              </div>

              <div>
                <img src="../../assets/images/right-icon.png" alt="icon" />
                <p> No credit card is required </p>
              </div>

              <div>
                <img src="../../assets/images/right-icon.png" alt="icon" />
                <p> Cancel anytime</p>
              </div>
            </div>
          </div>

          <div
            className="col-sm-12 col-md-6 col-lg-6 text-end"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img
              src="../../assets/images/banner-graphic.png"
              alt="graphic"
              width="100%"
            />
            <img
              src="../../assets/images/vector-icon-2.png"
              alt="vector-icon-1"
              className="vector-icon-3"
            />
          </div>

          <Clients />
        </div>
      </div>
    </section>
  );
}
