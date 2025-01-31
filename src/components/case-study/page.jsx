import React, { useRef } from "react";
import "./page.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function CaseStudy({ page }) {
  const swiperRef = useRef(null);
  return (
    <section
      className={`home-services-section  ${page && "mt-0"}`}
      id="use-cases"
    >
      <div className="container">
        <div className="row">
          <div className="testimonial-section-header">
            <h2 data-aos="fade-up">Case Study</h2>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="case-study-boxes">
              <img
                src="../../assets/images/case-study-1.png"
                alt="case-study"
              />
              <div className="content">
                <h4>
                  Transforming Field Operations with AI-Driven Fleet Management
                  for a Renewable Energy Leader
                </h4>
                <p>
                  Field teams were spending 30% of their time on administrative
                  tasks like logging site visits and manually calculating travel
                  distances for billing. Speeding incidents accounted for 25% of
                  near-miss safety reports, and delayed emergency response
                  during storms raised stakeholder concerns
                </p>

                <button className="primary-btn">
                  Read more <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="case-study-boxes">
              <img
                src="../../assets/images/case-study-2.png"
                alt="case-study"
              />
              <div className="content">
                <h4>
                  Revolutionizing Employee Transportation with AI-Driven
                  Mobility Solutions for a Solar Manufacturing Giant
                </h4>
                <p>
                  A global solar panel manufacturer, with 10,000+ employees
                  across five sprawling production plants in remote regions,
                  faced persistent challenges in managing daily employee
                  commutes. With workers operating in shifts across 24/7
                  facilities.
                </p>

                <button className="primary-btn">
                  Read more <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="case-study-boxes">
              <img
                src="../../assets/images/case-study-3.png"
                alt="case-study"
              />
              <div className="content">
                <h4>
                  Optimizing EV Fleet Operations with AI-Powered Battery
                  Management for a Logistics Leader
                </h4>
                <p>
                  A major logistics service provider, operating a fleet of 500+
                  electric vehicles (EVs) across North America, faced challenges
                  in scaling its green transition. While committed to replacing
                  diesel trucks with EVs,
                </p>

                <button className="primary-btn">
                  Read more <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
