import React from "react";
import "./page.css";
import Marquee from "react-fast-marquee";

export default function Clients() {
  return (
    <div>
      <Marquee
        speed={50}
        delay={2}
        autoFill
        className="marquee-slider"
      >
        <div className="item">
            <img src="../../assets/images/client-logo-1.png" alt="logo" />
        </div>
        <div className="item">
            <img src="../../assets/images/client-logo-2.png" alt="logo" />
        </div>
        <div className="item">
            <img src="../../assets/images/client-logo-3.png" alt="logo" />
        </div>
        <div className="item">
            <img src="../../assets/images/client-logo-4.png" alt="logo" />
        </div>
        <div className="item">
            <img src="../../assets/images/client-logo-5.png" alt="logo" />
        </div>
        <div className="item">
            <img src="../../assets/images/client-logo-6.png" alt="logo" />
        </div>
        <div className="item">
            <img src="../../assets/images/client-logo-7.png" alt="logo" />
        </div>
      </Marquee>
    </div>
  );
}
