import React from "react";
import Marquee from "react-fast-marquee";
import "./page.css";

export default function Experence() {
  return (
    <section className="experience-section">
      <div className="container">
        <div className="row">
          <h2>
            Turn your local deliveries into an{" "}
            <span className="d-block"> EasyRoutes experience.</span>
          </h2>
          <p>
            Running local deliveries should be as personal and effortless as
            serving customers in-store.{" "}
            <span className="d-block">
              EasyRoutes gives your business the tools to streamline your
              deliveries and delight your customers. Here's how...
            </span>
          </p>

          <Marquee speed={50} delay={2} autoFill className="marquee-slider">
            <div className="item">
              <img src="../../assets/images/experience-img-1.webp" alt="logo" />
            </div>
            <div className="item">
              <img src="../../assets/images/experience-img-2.webp" alt="logo" />
            </div>
            <div className="item">
              <img src="../../assets/images/experience-img-3.webp" alt="logo" />
            </div>
            <div className="item">
              <img src="../../assets/images/experience-img-4.webp" alt="logo" />
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}
