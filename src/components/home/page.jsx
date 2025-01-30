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
import Banner from "../banner/page";
import { HomeBanner, MainBanner } from "../../data";
import OurServices from "../our-solutions/page";
import HomeServicesSection from "../home-services/page";

export default function Home() {
  return (
    <>
      <Header  />

      <Banner data={MainBanner} />

      <DeliverySection />

      <OurServices />

      <HomeServicesSection />

      {/* <Features /> */}

      <AppSection />

      {/* <HowItWorks /> */}

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
