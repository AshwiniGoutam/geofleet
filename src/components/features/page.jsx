import React from "react";
import "./page.css";

export default function Features() {
  return (
    <section className="features-section">
      <div className="container">
        <div className="row align-items-center overflow-hidden">
          <div className="col-sm-6" data-aos="fade-right">
            <img
              src="../../assets/images/features-image-1.png"
              alt="images"
              width="100%"
            />
          </div>
          <div className="col-sm-6" data-aos="fade-left">
            <h2>
              Smart and Intelligent Route Optimization to Maximize Efficiency
              and Cut Costs by 25%
            </h2>
            <p>
              Experience the power of intelligent route optimization with
              Geofleet. Our cutting-edge platform helps you create optimized
              delivery routes that take into account traffic patterns, driver
              preferences, and your unique business priorities. Say goodbye to
              inefficiencies and hello to cost savings!
            </p>

            <h4>With Geofleet, you can:</h4>

            <ul>
              <li>
                Save up to 25% per delivery by optimizing every route for
                maximum efficiency.
              </li>
              <li>
                Easily create routes that factor in real-time traffic data,
                reducing delays and improving delivery times.
              </li>
              <li>
                Customize routes based on driver preferences and operational
                needs. Edit routes effortlessly—although with our smart
                optimization, you’ll rarely need to!
              </li>
            </ul>
          </div>

          <div className="col-sm-6" data-aos="fade-right">
            <h2>Live Monitoring – Keep Your Delivery Fleet on Track</h2>
            <p>
              Stay in control of your fleet with Geofleet’s real-time live
              monitoring. Dispatch routes directly to our user-friendly driver
              app, track driver progress in real time, and gain insights into
              every journey. At the end of the day, you can easily review
              performance stats and optimize future operations.
            </p>
            <h4>With Geofleet, you can:</h4>
            <ul>
              <li>
                Track driver progress in real time, ensuring on-time deliveries
                and operational efficiency.
              </li>
              <li>
                Dispatch optimized routes seamlessly to the driver app,
                simplifying the process for your team.
              </li>
              <li>
                Review daily stats to identify opportunities for further
                optimization and improve fleet performance.
              </li>
            </ul>
            <p>
              Ensure your fleet is always on track with Geofleet’s Live
              Monitoring.
            </p>
          </div>
          <div className="col-sm-6" data-aos="fade-left">
            <img
              src="../../assets/images/features-image-2.png"
              alt="images"
              width="100%"
            />

            {/* <img src="../../assets/images/col-arrow.png" alt="arrow" className="col-last-arrow" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
