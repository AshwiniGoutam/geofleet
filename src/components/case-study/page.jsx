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
                <h4>AI-Driven Safety Overhaul Reduces Speeding by 40%</h4>
                <p>
                  <b>Challenge:</b> High speeding incidents and unsafe driving
                  at remote sites risked worker safety.
                </p>
                <p>
                  <b>Solution:</b> GeoFleet.ai’s real-time monitoring with AI
                  behavior scoring, geofence alerts, and instant speed
                  notifications.
                </p>
                <p>
                  <b>Result:</b> 40% fewer speeding cases, 35% accident
                  reduction via targeted coaching, and automated compliance
                  logs.
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
                <h4>Automated Fleet Management Saves 200+ Hours Monthly</h4>
                <p>
                  <b>Challenge:</b> Manual billing and route planning drained
                  productivity.
                </p>
                <p>
                  <b>Solution:</b> AI-optimized routing cut fuel use by 20%,
                  while GPS tracking auto-generated invoices.{" "}
                </p>
                <p>
                  <b>Result:</b> 50% faster billing cycles, 200+ hours/month
                  saved, and zero billing disputes.
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
                  Dynamic Geofencing Ensures 100% Compliance During Emergencies
                </h4>
                <p>
                  <b>Challenge:</b> Audit failures and slow storm response
                  threatened operations.
                </p>
                <p>
                  <b>Solution:</b> Disaster-responsive geofences, movement
                  replay logs, and escalation workflows.
                </p>
                <p>
                  <b>Result:</b> 100% compliance during audits, 90% faster
                  emergency deployments, and real-time accountability.
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
