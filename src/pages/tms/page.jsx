import React from "react";
import Header from "../../components/header/header";
import Banner from "../../components/banner/page";
import { HomeBanner } from "../../data";
import DeliverySection from "../../components/delivery-section/page";
import OurServices from "../../components/our-solutions/page";
import Features from "../../components/features/page";
import AppSection from "../../components/app-section/page";
import HowItWorks from "../../components/how-it-works/page";
import Testimonial from "../../components/testimonials/page";
import CtaSection from "../../components/cta-section/page";
import Pricing from "../../components/pricing/page";
import Footer from "../../components/footer/footer";
import TmsFeatures from "../../components/tms-features/page";

export default function TMS() {
  return (
    <>
      <Header />

      <Banner data={HomeBanner} />

      <DeliverySection />

      <TmsFeatures/>

      <AppSection />

      <HowItWorks />

      <Testimonial />

      <CtaSection />

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
