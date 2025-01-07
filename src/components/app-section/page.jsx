import React from "react";
import "./page.css";

export default function AppSection() {
  const cardData = [
    {
      id: 1,
      imgSrc: "../../assets/images/features-card-1.png",
      title: "Traffic, Weather Aware Routing",
      description:
        "Intelligent route optimization that avoids rush hour traffic, weather conditions, busy tunnels, and bridges.",
    },
    {
      id: 2,
      imgSrc: "../../assets/images/features-card-2.png",
      title: "Easy-to-use, yet powerful",
      description:
        "A simple, yet powerful interface, so you're always on top of your deliveries.",
    },
    {
      id: 3,
      imgSrc: "../../assets/images/features-card-1.png",
      title: "No more spaghetti routes",
      description:
        "Happier drivers with practical, efficient, and non-overlapping routes.",
    },
    {
      id: 4,
      imgSrc: "../../assets/images/features-card-4.png",
      title: "Delivery Notifications",
      description:
        "Boost customer loyalty with a 5-star delivery experience by keeping them updated with a real-time tracker and accurate ETAs.",
    },
  ];

  return (
    <section className="app-section">
      <div className="container">
        <div className="row">
          <h2 data-aos="fade-up">
            Sassy, Massy, Classy –{" "}
            <span className="d-block">Geofleet Driver App</span>
          </h2>
          <p data-aos="fade-up">
            Experience seamless navigation, intuitive design, and top-tier
            functionality{" "}
            <span className="d-block">
              with the best UI/UX in our Driver Mobile App!
            </span>
          </p>

          {/* <img
            src="../../assets/images/bannergraphic.png"
            alt="banner"
            className="mt-4"
          /> */}

          <div className="driver-section">
            <div className="round-1">
              <img
                src="../../assets/images/user-img-2.png"
                alt="user-img-1"
                className="user-img-1"
              />

              <div className="order-div">
                <div className="d-flex align-items-start gap-2">
                  <img
                    src="../../assets/images/order-img.png"
                    alt="user-img-1"
                    className="mt-1"
                  />
                  <p>
                    Your Order is out for Delivery and shall be delivered by
                    12:15 PM. <span className="d-block">1st Jan</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="round-2">
              <img
                src="../../assets/images/user-img-1.png"
                alt="user-img-1"
                className="user-img-2"
              />

              <div className="order-div driver-div">
                <div className="d-flex align-items-start gap-2">
                  <img
                    src="../../assets/images/driver-icon.png"
                    alt="user-img-1"
                    className="mt-1"
                  />
                  <p>
                    Driver Shuvam would like to chat with you, please accept the
                    request. <span className="d-block">june 05</span>
                  </p>
                </div>
              </div>
            </div>

            <img
              src="../../assets/images/iphone-mockup.png"
              alt="iphone-mockup-img"
              className="iphone-mockup-img"
            />
          </div>

          {cardData.map((card, index) => (
            <div className="col-sm-12 col-md-6 col-lg-3" key={card.id}>
              <div
                className="card"
                data-aos="fade-up"
                data-aos-offset={`${index + 2 + "00"}`}
                data-aos-easing="ease-in-sine"
              >
                <img src={card.imgSrc} alt={card.title} />
                <div>
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
