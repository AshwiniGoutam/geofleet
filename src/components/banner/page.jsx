import React, { useState } from "react";
import Clients from "../clients/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PricingModal from "../pricing/pricing-model";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Banner({ data, hideExplore }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <section
      className="hero-section overflow-hidden"
      id="home"
      data-aos="fade-down"
    >
      <PricingModal show={modalShow} onHide={() => setModalShow(false)} />
      <div className="container">
        <div className="row align-items-center row-gap-4">
          <div className="col-sm-12 col-md-12 col-lg-6">
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
            <h1 className={hideExplore?"banner-h1":""}>{data?.heading}</h1>
            <p className="description">{data?.description}</p>

            <div className="d-flex align-items-center gap-4 flex-wrap">
              <button
                className="primary-btn"
                onClick={() => setModalShow(true)}
              >
                Schedule a Demo{" "}
              </button>
              {!hideExplore && (
                <a href="http://app.geofleet.ai/" target="_blank">
                  Explore the Product <FontAwesomeIcon icon={faArrowRight} />
                </a>
              )}
            </div>

            <div className="review-section" data-aos-easing="ease-in-sine">
              {data?.tags?.map((item, index) => {
                return (
                  <div key={index}>
                    <img src="../../assets/images/right-icon.png" alt="icon" />
                    <p>{item}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-6 text-end"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img src={data?.image} alt="graphic" width="100%" className="w-100" />
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
