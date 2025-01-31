import React, { useEffect } from "react";
import Header from "../../components/header/header";
import Banner from "../../components/banner/page";
import Testimonial from "../../components/testimonials/page";
import CtaSection from "../../components/cta-section/page";
import Pricing from "../../components/pricing/page";
import Footer from "../../components/footer/footer";
import {
  RouteServiceData,
  RoutingFeature,
  RoutingHightlights,
} from "../../data";
import HightLightFeature from "../../components/Highlights/page";
import PageFeatures from "../../components/PageFeatures/page";
import { useLocation } from "react-router-dom";

export default function RouteAsService() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      <Header hideWorks />
      <Banner data={RouteServiceData} hideExplore />
      <HightLightFeature data={RoutingHightlights} />
      <PageFeatures data={RoutingFeature} />
      <section className="delivery-section m-0">
        <div className="container">
          <div className="row">
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
      <Testimonial page />
      <CtaSection />
      <Pricing />
      <Footer />
    </>
  );
}
