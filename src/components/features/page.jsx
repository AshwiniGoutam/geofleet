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

export default function Features() {
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
      src: "../../assets/images/feature-image-3.png",
      alt: "Image showing the impact of intelligent route optimization.",
    },
    {
      src: "../../assets/images/features-image-2.png",
      alt: "Routific's app for drivers and live tracking dashboard.",
    },
    {
      src: "../../assets/images/feature-image-1.png",
      alt: "Real-time delivery tracker page with GPS location.",
    },
    {
      src: "../../assets/images/feature-image-4.png",
      alt: "Real-time delivery tracker page with GPS location.",
    },
    {
      src: "../../assets/images/feature-image-5.png",
      alt: "Real-time delivery tracker page with GPS location.",
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
              title="Real-Time Fleet Tracking and Movement Replay"
              description="Geofleet combines live tracking with historical insights to give you complete visibility and control over your fleet's performance."
              subheading="Stay Connected and Optimize Operations with Precision"
              featuresList={[
                "Live GPS Tracking: Monitor your fleet’s location and status in real time with pinpoint accuracy.",
                "Geo-Fencing Alerts: Ensure vehicle safety and compliance with customizable virtual boundaries.",
                "Fleet Movement Replay: Replay past trips to analyze routes, identify inefficiencies, and make data-driven improvements.",
              ]}
              index={0}
            />
            <FeatureBlock
              title="Advanced Analytics and Reporting"
              description="Make smarter decisions with Geofleet’s detailed analytics, helping you understand performance trends, identify inefficiencies, and improve productivity."
              subheading="Transform Data into Actionable Insights"
              featuresList={[
                "Visual dashboards with key performance indicators.",
                "Generate detailed customized reports to share with stakeholders.",
                "Track fuel consumption, driver behavior, and delivery efficiency.",
              ]}
              index={1}
            />
            <FeatureBlock
              title="Electronic Proof of Delivery (EPOD) and OTP Validation"
              description="Simplify the delivery confirmation process with electronic proof of delivery and OTP verification for enhanced accuracy and customer satisfaction."
              subheading="Ensure Accurate and Secure Deliveries"
              featuresList={[
                "Capture digital signatures and delivery photos.",
                "Secure deliveries with OTP validation for sensitive goods.",
                "Streamline documentation and improve accountability.",
              ]}
              index={2}
            />
            <FeatureBlock
              title="Customer Tracking Links"
              description="Enhance customer experience by providing real-time tracking of their deliveries with a secure tracking link."
              subheading="Deliver Transparency with Live Tracking Links"
              featuresList={[
                "Build trust with real-time updates on delivery status.",
                "Enable customers to monitor ETA and progress.",
                "Reduce calls and inquiries about delivery timings.",
              ]}
              index={3}
            />
            <FeatureBlock
              title=" Driver Attendance Management"
              description="Track and manage driver attendance effortlessly to ensure operational efficiency."
              subheading="Streamline Attendance and Shift Scheduling"
              featuresList={[
                "Enable drivers to check-in and check-out via a mobile app or fleet device.",
                "Automate attendance tracking with GPS-based time stamping.",
                "Manage shifts, breaks, and overtime with an intuitive dashboard.",
                "Generate detailed attendance reports for payroll and compliance.",
                "Set alerts for late check-ins or unscheduled absences to mitigate delays.",
              ]}
              index={4}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
