import React, { useRef } from "react";
import "./page.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

export default function HomeServicesSection({ page }) {
  const swiperRef = useRef(null);
  return (
    <section className={`home-services-section  ${page && "mt-0"}`} id="use-cases">
      <div className="container">
        <div className="row">
          <div className="testimonial-section-header">
            <h2 data-aos="fade-up">Use Cases</h2>
            <div className="custom-nav">
              <button className="custom-prev">
                <img src="../../assets/images/arrow.svg" alt="" />
              </button>
              <button className="custom-next">
                <img src="../../assets/images/arrow.svg" alt="" />
              </button>
            </div>
          </div>

          <Swiper
            ref={swiperRef}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            pagination={{
              clickable: false,
            }}
            navigation={{
              prevEl: ".custom-prev", // Custom prev button
              nextEl: ".custom-next", // Custom next button
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="card">
                <img
                  src="../../assets/images/routing-feature-1.png"
                  alt="feature-1"
                />
                <div>
                  <h4>
                    Optimized Routing: Smart Plans Based on Driver & Vehicle
                    Capacity
                  </h4>
                  <p>
                    Enhance your fleet's efficiency with GeoFleet's advanced
                    routing service. Create optimized routes that consider both
                    driver and vehicle capacity to ensure seamless,
                    cost-effective operations.
                  </p>
                </div>
                <Link to="/route-as-service">
                  <button className="primary-btn w-auto">Know More</button>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card">
                <img
                  src="../../assets/images/supervisor-feature-2.png"
                  alt="feature-1"
                />
                <div>
                  <h4>
                    Delivery Lifecycle Management & Order Assignment: Streamline
                    Operations from Start to Finish
                  </h4>
                  <p>
                    GeoFleet’s delivery lifecycle management and order
                    assignment features provide full visibility and control over
                    every step of the delivery process, ensuring smooth,
                    efficient operations from start to finish.
                  </p>
                </div>
                <Link to="/supervisor-app">
                  <button className="primary-btn w-auto">Know More</button>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card">
                <img
                  src="../../assets/images/driver-feature-2.png"
                  alt="feature-1"
                />
                <div>
                  <h4>
                    Instant Route Optimization: Save Time, Cut Costs, and Boost
                    Efficiency
                  </h4>
                  <p>
                    GeoFleet’s instant route optimization feature provides
                    drivers with the best routes, ensuring faster deliveries,
                    reduced fuel consumption, and overall improved fleet
                    efficiency.
                  </p>
                </div>
                <Link to="/driver-mobile-app">
                  <button className="primary-btn w-auto">Know More</button>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card">
                <img
                  src="../../assets/images/sim-feature-6.png"
                  alt="feature-1"
                />
                <div>
                  <h4>
                    Real-Time Data Sync:Continuous Connectivity for Accurate
                    Tracking
                  </h4>
                  <p>
                    GeoFleet’s Real-Time Data Sync feature ensures continuous
                    synchronization of vehicle status, routes, and delivery
                    updates through reliable IoT connectivity.
                  </p>
                </div>
                <Link to="/sim-tracking">
                  <button className="primary-btn w-auto">Know More</button>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card">
                <img
                  src="../../assets/images/fleet-feature-6.png"
                  alt="feature-1"
                />
                <div>
                  <h4>
                    Geofencing:Improve Safety and Accountability with Smart
                    Boundaries
                  </h4>
                  <p>
                    GeoFleet’s Geofencing feature combines video footage with
                    telematics data to enhance safety, monitor incidents, and
                    improve driver accountability.
                  </p>
                </div>
                <Link to="/fleet-management">
                  <button className="primary-btn w-auto">Know More</button>
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
