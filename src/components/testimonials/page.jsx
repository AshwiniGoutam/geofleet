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
            <h2>
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
            <SwiperSlide>
              <div className="card">
                <div>
                  <h4>Lorem Ipsum is simply dummy text of the printing</h4>
                  <p>
                    Nostrum exercitationem ullam corporis suscipit laboriosam,
                    nisiaeruo aliuid commodi consenuatur reprehenderit in
                    voluptate velit esse cia incididunt ut labore aet dolore
                    magna.
                  </p>
                </div>

                <div className="user-div">
                  <img
                    src="../../assets/images/testimonial-personimage3.jpg"
                    alt=""
                  />

                  <div>
                    <h5>Zenith Neaulo</h5>
                    <p>Happy Customer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card">
                <div>
                  <h4>Lorem Ipsum is simply dummy text of the printing</h4>
                  <p>
                    Nostrum exercitationem ullam corporis suscipit laboriosam,
                    nisiaeruo aliuid commodi consenuatur reprehenderit in
                    voluptate velit esse cia incididunt ut labore aet dolore
                    magna.
                  </p>
                </div>

                <div className="user-div">
                  <img
                    src="../../assets/images/testimonial-personimage3.jpg"
                    alt=""
                  />

                  <div>
                    <h5>Zenith Neaulo</h5>
                    <p>Happy Customer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div>
                  <h4>Lorem Ipsum is simply dummy text of the printing</h4>
                  <p>
                    Nostrum exercitationem ullam corporis suscipit laboriosam,
                    nisiaeruo aliuid commodi consenuatur reprehenderit in
                    voluptate velit esse cia incididunt ut labore aet dolore
                    magna.
                  </p>
                </div>

                <div className="user-div">
                  <img
                    src="../../assets/images/testimonial-personimage3.jpg"
                    alt=""
                  />

                  <div>
                    <h5>Zenith Neaulo</h5>
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
