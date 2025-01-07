import React, { useRef } from "react";
import "./page.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonial() {
  const swiperRef = useRef(null);
  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="row">
          <div className="testimonial-section-header">
            <h2  data-aos="fade-up">
              What Our Customer <span className="d-block">are Saying</span>
            </h2>
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
            <SwiperSlide  data-aos="fade-up">
              <div className="card px-4">
                <div>
                  {/* <h4>Lorem Ipsum is simply dummy text of the printing</h4> */}
                  <p>
                    Geofleet.ai has completely revolutionized how we manage our
                    fleet operations. As a renewable energy company, optimizing
                    our routes for efficiency and minimizing fuel usage aligns
                    perfectly with our sustainability goals. The platform's
                    real-time tracking and advanced analytics have streamlined
                    our logistics, saving us countless hours and costs.
                    Geofleet.ai isn’t just a tool; it’s a partner in our mission
                    toward a greener future.
                  </p>
                </div>

                <div className="user-div">
                  {/* <img
                    src="../../assets/images/testimonial-personimage3.jpg"
                    alt=""
                  /> */}

                  <div>
                    <h5>Bharat Sharma, AGM, Renew</h5>
                    <p>Happy Customer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide  data-aos="fade-up">
              <div className="card px-2">
                <div>
                  {/* <h4>Lorem Ipsum is simply dummy text of the printing</h4> */}
                  <p>
                    In a fast-paced industry like ours, staying ahead in
                    operational efficiency is critical. Geofleet.ai has become a
                    game-changer for our fleet management. Its intuitive
                    interface, customizable dashboards, and route optimization
                    capabilities have empowered our team to deliver faster, more
                    reliably, and with fewer resources. The customer tracking
                    links and real-time alerts ensure complete transparency for
                    our clients. It's a must-have for any business aiming for
                    excellence in fleet management.
                  </p>
                </div>

                <div className="user-div">
                  {/* <img
                    src="../../assets/images/testimonial-personimage3.jpg"
                    alt=""
                  /> */}

                  <div>
                    <h5>Sneha Rajan, Operations Lead, STL.tech</h5>
                    <p>Happy Customer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide  data-aos="fade-up">
              <div className="card px-4">
                <div>
                  {/* <h4>Lorem Ipsum is simply dummy text of the printing</h4> */}
                  <p>
                    Geofleet.ai has completely revolutionized how we manage our
                    fleet operations. As a renewable energy company, optimizing
                    our routes for efficiency and minimizing fuel usage aligns
                    perfectly with our sustainability goals. The platform's
                    real-time tracking and advanced analytics have streamlined
                    our logistics, saving us countless hours and costs.
                    Geofleet.ai isn’t just a tool; it’s a partner in our mission
                    toward a greener future.
                  </p>
                </div>

                <div className="user-div">
                  {/* <img
                    src="../../assets/images/testimonial-personimage3.jpg"
                    alt=""
                  /> */}

                  <div>
                    <h5>Bharat Sharma, AGM, Renew</h5>
                    <p>Happy Customer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide  data-aos="fade-up">
              <div className="card px-2">
                <div>
                  {/* <h4>Lorem Ipsum is simply dummy text of the printing</h4> */}
                  <p>
                    In a fast-paced industry like ours, staying ahead in
                    operational efficiency is critical. Geofleet.ai has become a
                    game-changer for our fleet management. Its intuitive
                    interface, customizable dashboards, and route optimization
                    capabilities have empowered our team to deliver faster, more
                    reliably, and with fewer resources. The customer tracking
                    links and real-time alerts ensure complete transparency for
                    our clients. It's a must-have for any business aiming for
                    excellence in fleet management.
                  </p>
                </div>

                <div className="user-div">
                  {/* <img
                    src="../../assets/images/testimonial-personimage3.jpg"
                    alt=""
                  /> */}

                  <div>
                    <h5>Sneha Rajan, Operations Lead, STL.tech</h5>
                    <p>Happy Customer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
