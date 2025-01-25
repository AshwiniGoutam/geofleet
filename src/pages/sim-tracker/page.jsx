import React from "react";
import Header from "../../components/header/header";
import Banner from "../../components/banner/page";
import Testimonial from "../../components/testimonials/page";
import CtaSection from "../../components/cta-section/page";
import Pricing from "../../components/pricing/page";
import Footer from "../../components/footer/footer";
import {
  SimFeature,
  SimHightlights,
  SimTrackingData,
} from "../../data";
import HightLightFeature from "../../components/Highlights/page";
import PageFeatures from "../../components/PageFeatures/page";

export default function SimTracking() {
  return (
    <>
      <Header />
      <Banner data={SimTrackingData} hideExplore />
      <HightLightFeature data={SimHightlights} />
      <PageFeatures data={SimFeature} />
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
