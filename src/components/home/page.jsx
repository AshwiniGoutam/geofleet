import React, { useState } from "react";
import Header from "../header/header";
import "./page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronRight,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Clients from "../clients/page";
import Footer from "../footer/footer";
import DeliverySection from "../delivery-section/page";
import Features from "../features/page";
import AppSection from "../app-section/page";
import Testimonial from "../testimonials/page";
import Pricing from "../pricing/page";
import HowItWorks from "../how-it-works/page";
import CtaSection from "../cta-section/page";
import PricingModal from "../pricing/pricing-model";

export default function Home() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <PricingModal show={modalShow} onHide={() => setModalShow(false)} />
      <Header />
      <section className="hero-section overflow-hidden" id="home">
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
              <h1
                data-aos="fade-down"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Smarter Fleets,
                <span className=""> Seamless Deliveries.</span>
              </h1>
              <p
                className="description"
                data-aos="fade-down"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Optimizing Fleets, Planning Routes, and Ensuring Seamless
                Deliveries with Driver Excellence.
              </p>

              <div
                className="d-flex align-items-center gap-4"
                data-aos="fade-down"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
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

              <div
                className="review-section"
                data-aos="fade-down"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
              >
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

      <DeliverySection />

      <Features />

      <AppSection />

      <HowItWorks />

      <Testimonial />

      <CtaSection />

      {/* <section className="routing-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <img
                src="../../assets/images/routing-image.png"
                alt="images"
                className="w-100"
              />
            </div>
            <div className="col-sm-6">
              <div>
                <p>Routing Engine API</p>
                <h2>Need just our algo?</h2>
              </div>
              <p>
                ParallaxIQ's AI-driven route optimization algorithm is fast,
                scalable, and seamlessly integrates with your systems. Tap into
                our machine learning models worldwide for the most precise ETAs.
              </p>

              <button>Go to Engine API</button>
            </div>
          </div>
        </div>
      </section> */}

      <section className="community-section overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h2
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
              >
                Join our community of{" "}
                <span className="d-block">1,000+ businesses</span>
              </h2>
              <img
                src="../../assets/images/community-image.png"
                alt="images"
                className="before-img"
              />
            </div>
            <div className="col-sm-6">
              <div
                className="community-stats-div"
                data-aos="fade-left"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
              >
                <div>
                  <h4>
                    191+ <span className="d-block">milion</span>
                  </h4>
                  <p>Delivery optimized</p>
                </div>
                <div>
                  <h4>
                    57+ <span className="d-block">Kilometers</span>
                  </h4>
                  <p>CO2 reductions</p>
                </div>
                <p className="text-white px-5 mx-4" style={{ zIndex: "9" }}>
                  That's like planting 6 million trees!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Pricing />

      <Footer />
    </>
  );
}
