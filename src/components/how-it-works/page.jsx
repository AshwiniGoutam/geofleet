"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Package,
  Upload,
  Route,
  TrainTrack,
  AlarmCheck,
  Camera,
  ParkingMeterIcon,
} from "lucide-react";
import "./page.css";

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
    <section className="how-it-works-section" id="how-it-works">
      <div className="container">
        <div className="row">
          <h2>How it Works</h2>
          <div className="how-it-works-section-cards">
            <div
              className="card card-1"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
            >
              <img
                src="../../assets/images/how-it-works-1.jpg"
                alt="how-it-works"
                style={{ objectFit: "contain" }}
              />
              <p>
                <span>01</span> Upload Orders/Visits
              </p>
            </div>

            <div
              className="card card-2"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
            >
              <p>
                <span>02</span> Optimize Routes
              </p>
              <img
                src="../../assets/images/how-it-works-2.jpg"
                alt="how-it-works"
                style={{ objectFit: "contain" }}
              />
            </div>

            <div
              className="card card-3"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <img
                src="../../assets/images/how-it-works-3.jpg"
                alt="how-it-works"
                style={{ objectFit: "contain" }}
              />
              <p>
                <span>03</span> Real-time tracking
              </p>
            </div>

            <div
              className="card card-4"
              data-aos="fade-up"
              data-aos-offset="400"
              data-aos-easing="ease-in-sine"
            >
              <p>
                <span>04</span> Capture Delivery Proofs
              </p>
              <img
                src="../../assets/images/how-it-works-4.jpg"
                alt="how-it-works"
                style={{ objectFit: "contain" }}
              />
            </div>

            <div
              className="card card-5"
              data-aos="fade-up"
              data-aos-offset="500"
              data-aos-easing="ease-in-sine"
            >
              <img
                src="../../assets/images/how-it-works-5.jpg"
                alt="how-it-works"
                style={{ objectFit: "contain" }}
              />
              <p>
                <span>05</span> Reports & Analytics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
