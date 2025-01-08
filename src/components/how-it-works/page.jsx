"use client";

import { motion } from "framer-motion";
import { Phone, Package, CreditCard, Upload, Route, TrainTrack, AlarmCheck, Camera, ParkingMeterIcon } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

const steps = [
  {
    number: "01",
    title: "Upload Orders",
    description: "Upload orders or integrate to automate",
    icon: Upload,
    position: "right",
  },
  {
    number: "02",
    title: "Plan Routes",
    description: "Optimize delivery routes automatically",
    icon: Route,
    position: "left",
  },
  {
    number: "03",
    title: "Track Driver",
    description: "Real-time driver tracking",
    icon: TrainTrack,
    position: "right",
  },
  {
    number: "04",
    title: "Real-Time Alerts",
    description: "Keep customers informed",
    icon: AlarmCheck,
    position: "left",
  },
  {
    number: "05",
    title: "Proof of Delivery",
    description: "Capture delivery confirmation",
    icon: Camera,
    position: "right",
  },
  {
    number: "06",
    title: "Measure Performance",
    description: "Track delivery metrics",
    icon: ParkingMeterIcon,
    position: "left",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function HowItWorks() {
  return (
    <div className="container pt-5" id="how-it-works">
      <motion.h2
        className="text-center mb-5"
         data-aos="fade-up"
      >
        HOW IT WORKS
      </motion.h2>

      <motion.div
        className="position-relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            className="row align-items-center mb-5 position-relative"
            variants={itemVariants}
          >
            {/* Dotted connector line */}
            {index < steps.length - 1 && (
              <div
                className="position-absolute"
                style={{
                  left: "50%",
                  top: "100%",
                  width: "2px",
                  height: "50px",
                  background:
                    "repeating-linear-gradient(to bottom, #dee2e6 0, #dee2e6 4px, transparent 4px, transparent 8px)",
                }}
              />
            )}

            {step.position === "right" ? (
              <>
                <div className="col-md-6 text-end mb-2 mt-2">
                  <motion.div className="pe-4">
                    <div className="small text-primary  mb-2">
                      STEP {step.number}
                    </div>
                    <h3 className="h4 mb-0">{step.title}</h3>
                    <p className="text-muted">{step.description}</p>
                  </motion.div>
                </div>
                <div className="col-md-6 mb-2 mt-2">
                  <motion.div
                    className="d-flex justify-content-start"
                  >
                    <div
                      className="rounded-circle bg-primary p-4 d-inline-flex align-items-center justify-content-center"
                      style={{ width: "80px", height: "80px" }}
                    >
                      <step.icon className="text-white" size={40} />
                    </div>
                  </motion.div>
                </div>
              </>
            ) : (
              <>
                <div className="col-md-6 mb-2 mt-2">
                  <motion.div
                    className="d-flex justify-content-end"
                  >
                    <div
                      className="rounded-circle bg-primary p-4 d-inline-flex align-items-center justify-content-center"
                      style={{ width: "80px", height: "80px" }}
                    >
                      <step.icon className="text-white" size={40} />
                    </div>
                  </motion.div>
                </div>
                <div className="col-md-6 mb-2 mt-2">
                  <motion.div className="ps-4">
                    <div className="steps small text-primary  mb-2">
                      STEP {step.number}
                    </div>
                    <h3 className="h4 mb-0">{step.title}</h3>
                    <p className="text-muted">{step.description}</p>
                  </motion.div>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
