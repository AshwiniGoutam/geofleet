import React, { useEffect, useState } from "react";
import "./page.css";

const FeatureBlock = ({
  title,
  description,
  subheading,
  featuresList,
  index,
}) => (
  <div className="layout348_content" id={`feature-${index}`}>
    <h2>{title}</h2>
    <p>{description}</p>
    <h4>{subheading}</h4>
    <ul>
      {featuresList?.map((item, i) => {
        return <li key={i}>{item}</li>;
      })}
    </ul>
  </div>
);

export default function TmsFeatures() {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const featureElements = document.querySelectorAll(".layout348_content");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const featureIndex = Array.from(featureElements).indexOf(
              entry.target
            );
            setActiveFeature(featureIndex);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    featureElements.forEach((element) => observer.observe(element));

    return () => {
      featureElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  const images = [
    {
      src: "../../assets/images/tms-feature-1.png",
      alt: "Image showing the impact of intelligent route optimization.",
    },
    {
      src: "../../assets/images/tms-feature-2.png",
      alt: "Routific's app for drivers and live tracking dashboard.",
    },
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="w-layout-grid layout348_component">
          <div className="layout348_desktop-image-wrapper">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={`layout348_image ${
                  index === 2 || index === 3 || index == 4
                    ? "w-75 h-75"
                    : "w-100"
                }`}
                style={{
                  opacity: activeFeature === index ? 1 : 0,
                  transition: "opacity 0.5s ease-in-out",
                  objectFit: "contain",
                }}
              />
            ))}
          </div>
          <div className="layout348_content-wrapper">
            <FeatureBlock
              title="Smart and Intelligent Route Optimization to Maximize Efficiency and Cut Costs by 25%"
              description="Experience the power of intelligent route optimization with Geofleet. Our cutting-edge platform helps you create optimized delivery routes that take into account traffic patterns, driver preferences, and your unique business priorities. Say goodbye to inefficiencies and hello to cost savings!"
              subheading="With Geofleet, you can:"
              featuresList={[
                "Save up to 25% per delivery by optimizing every route for maximum efficiency.",
                "Easily create routes that factor in real-time traffic data, reducing delays and improving delivery times.",
                "Customize routes based on driver preferences and operational needs. Edit routes effortlessly—although with our smart optimization, you’ll rarely need to!",
              ]}
              index={0}
            />
            <FeatureBlock
              title="Live Monitoring – Keep Your Delivery Fleet on Track"
              description="Stay in control of your fleet with Geofleet’s real-time live monitoring. Dispatch routes directly to our user-friendly driver app, track driver progress in real time, and gain insights into every journey. At the end of the day, you can easily review performance stats and optimize future operations."
              subheading="Transform Data into Actionable Insights"
              featuresList={[
                "Track driver progress in real time, ensuring on-time deliveries and operational efficiency.",
                "Dispatch optimized routes seamlessly to the driver app, simplifying the process for your team.",
                "Review daily stats to identify opportunities for further optimization and improve fleet performance.",
              ]}
              index={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
