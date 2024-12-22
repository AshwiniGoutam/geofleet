import React from "react";
import Header from "../header/header";
import "./page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faGem,
  faStar,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import Clients from "../clients/page";
import Experence from "../experience/page";
import Features from "../features/page";
import Footer from "../footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <h1>
              The easy way to manage <span className="">local deliveries</span>
            </h1>
            <p className="description">
              <span>EasyRoutes by Geofleet</span> streamlines your local
              deliveries with route optimization, real-time tracking, delivery
              notifications, and in-depth analytics. Cut costs, enhance
              productivity, and keep your customers happy, all in one platform.
            </p>

            <button className="primary-btn">
              Try it free <FontAwesomeIcon icon={faArrowRight} />{" "}
            </button>

            <div className="review-section">
              <div>
                <div className="svg-section">🏆🏆</div>
                <p> 2x Shopify Staff Pick</p>
              </div>

              <div>
                <div className="svg-section">⭐⭐⭐⭐⭐</div>
                <p> (4.9 rating)</p>
              </div>

              <div>
                <p>💎</p>
                <p> Built for Shopify</p>
              </div>
            </div>

            <Clients />

            <p className="cover-line">
              🌎 Powering deliveries for thousands of businesses across the
              globe
            </p>
          </div>
        </div>
      </section>

      <Experence />

      <Features />

      <section className="cta-section">
        <div className="container">
          <div className="row">
            <h2>
              Cut delivery costs by 25%.{" "}
              <span className="d-block">Reduce customer support by 80%.</span>
            </h2>

            <button className="primary-btn">
              Get Started <FontAwesomeIcon icon={faArrowRight} />{" "}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
