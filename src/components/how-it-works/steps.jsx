"use client";

import { motion } from "framer-motion";
import { Phone, Package, CreditCard, Upload, Route } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Upload Orders",
    description: "Upload orders or integrate to automate",
    icon: Upload,
    position: "right",
    gradient: "linear-gradient(135deg, #ff4b4b 0%, #ff6b6b 100%)",
  },
  {
    number: "02",
    title: "Plan Routes",
    description: "Optimize delivery routes automatically",
    icon: Route,
    position: "left",
    gradient: "linear-gradient(135deg, #ff6b6b 0%, #ff8585 100%)",
  },
  {
    number: "03",
    title: "Get Paid Fast",
    description:
      "We'll send a speedy payment upon receiving your phone. For your peace of mind, we give you several payment type of options to choose from. Whether you want to get paid quickly and conveniently directly.",
    icon: CreditCard,
    position: "right",
    gradient: "linear-gradient(135deg, #ff8585 0%, #ffa3a3 100%)",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function HowItWorks() {
  return (
    <div className="container py-5" style={{ background: "#fff" }}>
      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h6 className="text-danger fw-bold mb-2">PROCESS</h6>
        <h2 className="display-5 fw-bold mb-4">HOW IT WORKS</h2>
        <div className="w-50 mx-auto">
          <p className="text-muted lead">
            Follow these simple steps to sell your phone and get paid fast!
          </p>
        </div>
      </motion.div>

      <motion.div
        className="position-relative py-4"
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
                  height: "80px",
                  background:
                    "repeating-linear-gradient(to bottom, #293fccb8 0, #293fccb8 4px, transparent 4px, transparent 8px)",
                }}
              />
            )}

            {step.position === "right" ? (
              <>
                <div className="col-md-6 text-end">
                  <motion.div
                    className="pe-4"
                    // whileHover={{ x: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="d-inline-block rounded-pill bg-primary bg-opacity-10 px-3 py-1 text-danger fw-semibold mb-3">
                      STEP {step.number}
                    </div>
                    <h3 className="h3 fw-bold mb-3">{step.title}</h3>
                    <p className="text-muted lead fs-6">{step.description}</p>
                  </motion.div>
                </div>
                <div className="col-md-6">
                  <motion.div
                    className="d-flex justify-content-start"
                    // whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div
                      className="rounded-circle shadow-lg d-inline-flex align-items-center justify-content-center"
                      style={{
                        width: "140px",
                        height: "140px",
                        background: step.gradient,
                        boxShadow: "0 10px 30px #293fccb8",
                      }}
                    >
                      <step.icon className="text-white" size={50} />
                    </div>
                  </motion.div>
                </div>
              </>
            ) : (
              <>
                <div className="col-md-6">
                  <motion.div
                    className="d-flex justify-content-end"
                    // whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div
                      className="rounded-circle shadow-lg d-inline-flex align-items-center justify-content-center"
                      style={{
                        width: "140px",
                        height: "140px",
                        background: step.gradient,
                        boxShadow: "0 10px 30px #293fccb8",
                      }}
                    >
                      <step.icon className="text-white" size={50} />
                    </div>
                  </motion.div>
                </div>
                <div className="col-md-6">
                  <motion.div
                    className="ps-4"
                    // whileHover={{ x: 5 }}
                    // transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="d-inline-block rounded-pill bg-primary bg-opacity-10 px-3 py-1 text-danger fw-semibold mb-3">
                      STEP {step.number}
                    </div>
                    <h3 className="h3 fw-bold mb-3">{step.title}</h3>
                    <p className="text-muted lead fs-6">{step.description}</p>
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
