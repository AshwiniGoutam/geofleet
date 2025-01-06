import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import './page.css'

const steps = [
  {
    icon: "📤",
    title: "Upload Orders",
    description: "Upload orders or integrate to automate",
  },
  {
    icon: "🗺️",
    title: "Plan Routes",
    description: "Optimize delivery routes automatically",
  },
  {
    icon: "✏️",
    title: "Adjust & Save",
    description: "Make route adjustments if required",
  },
  {
    icon: "📍",
    title: "Track Driver",
    description: "Real-time driver tracking",
  },
  {
    icon: "🔔",
    title: "Real-Time Alerts",
    description: "Keep customers informed",
  },
  {
    icon: "✅",
    title: "Proof of Delivery",
    description: "Capture delivery confirmation",
  },
  {
    icon: "📊",
    title: "Measure Performance",
    description: "Track delivery metrics",
  },
];

const Step = ({ icon, title, description, isActive }) => (
  <motion.div
    className={`step ${isActive ? "active" : ""}`}
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: isActive ? 1 : 0.5, x: isActive ? 0 : 50 }}
    transition={{ duration: 0.5 }}
  >
    <div className="icon">{icon}</div>
    <div className="content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </motion.div>
);

const HowItWorks = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });

  return (
    <div className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        {steps.map((step, index) => (
          <div key={index} ref={index === 0 ? ref : null}>
            <Step
              icon={step.icon}
              title={step.title}
              description={step.description}
              isActive={inView}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
