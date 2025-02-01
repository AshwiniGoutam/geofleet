import React, { useEffect } from "react";
import "./page.css";
import Header from "../../components/header/header";
import Banner from "../../components/banner/page";
import {
  customerExperience,
  DeliveryHightlightData,
  deliveryManagement,
  HomeBanner,
} from "../../data";
import DeliverySection from "../../components/delivery-section/page";
import OurServices from "../../components/our-solutions/page";
import Features from "../../components/features/page";
import AppSection from "../../components/app-section/page";
import HowItWorks from "../../components/how-it-works/page";
import Testimonial from "../../components/testimonials/page";
import CtaSection from "../../components/cta-section/page";
import Pricing from "../../components/pricing/page";
import Footer from "../../components/footer/footer";
import PageFeatures from "../../components/PageFeatures/page";
import HightLightFeature from "../../components/Highlights/page";
import { useLocation } from "react-router-dom";

export default function TMS() {
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
      <Header />

      <Banner data={HomeBanner} />

      <HightLightFeature data={DeliveryHightlightData} />

      {/* <DeliverySection /> */}

      {/* <TmsFeatures/> */}
      <PageFeatures data={deliveryManagement} />

      <section className="customer-experience-section mt-5" id="customer-experience-management">
        <div className="container">
          <h2 className="text-center">
            Customer Experience Management –{" "}
            <span className="d-block">Deliver Transparency & Satisfaction</span>
          </h2>
          <section className="page-features-section pb-0">
            <div className="container">
              {customerExperience &&
                customerExperience?.map((item, index) => {
                  return (
                    <div className="row" key={index} id={item?.section_id}>
                      <div className="col-sm-12 col-md-12 col-lg-6">
                        <img src={item?.image} alt="images" />
                      </div>
                      <div className="col-sm-12 col-md-12 col-lg-6 content-col">
                        <div>
                          <h2>{item?.heading}</h2>
                          <p>{item?.description}</p>
                        </div>
                        <hr />
                        <div>
                          <ul>
                            {item?.List?.map((i, o) => {
                              return <li key={o}>{i}</li>;
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </section>
        </div>
      </section>

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
