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
          <h2>
            Sassy, Massy, Classy –{" "}
            <span className="d-block">ParallaxIQ Driver App</span>
          </h2>
          <p>
            Experience seamless navigation, intuitive design, and top-tier
            functionality{" "}
            <span className="d-block">
              with the best UI/UX in our Driver Mobile App!
            </span>
          </p>

          <img
            src="../../assets/images/bannergraphic.png"
            alt="banner"
            className="mt-4"
          />

          {cardData.map((card) => (
            <div className="col-sm-12 col-md-6 col-lg-3" key={card.id}>
              <div className="card">
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
