import React, { useEffect, useState } from "react";
import "./header.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import HumbergMenu from "../HumbergMenu";
import ArrowDown from "../arrowDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";

export default function Header({ ShowHeader, border }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => {
      link.addEventListener("click", handleScrolled);
    });

    // Cleanup listener
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScrolled);
      });
    };
  }, []);

  const handleScrolled = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = 50; // Adjust the offset as needed
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav>
        <header
          className={`header ${
            isScrolled || ShowHeader ? "header-scrolled" : ""
          }`}
          style={{ border: border ? "1px solid #ccc" : "" }}
        >
          <div data-aos="fade-down">
            <Link to="/" className="logo-div">
              <img src="../assets/images/logo.svg" alt="logo" width="200px" />
            </Link>
          </div>

          <ul data-aos="fade-down" className="desktop-menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#features">
                Features <FontAwesomeIcon icon={faChevronDown} />{" "}
              </a>

              <div class="mega-menu">
                <div class="mega-menu-products">
                  <Link to="/fleet-managment" class="product-item">
                    <div class="product-content">
                      <h3>Fleet Management System →</h3>
                      <p>
                        Seamless oversight with real-time vehicle tracking, fuel
                        monitoring, maintenance alerts, driver behavior
                        analytics, and compliance management to maximize fleet
                        performance.
                      </p>
                    </div>
                  </Link>
                  <a href="#" class="product-item">
                    <div class="product-content">
                      <h3>Transport Management System →</h3>
                      <p>
                        Simplify logistics through load optimization, multi-stop
                        planning, order management, real-time tracking, and
                        actionable delivery analytics for smooth operations.
                      </p>
                    </div>
                  </a>
                  <a href="#" class="product-item">
                    <div class="product-content">
                      <h3>Route Planning APIs →</h3>
                      <p>
                        Integrate powerful APIs offering route optimization, ETA
                        calculations, traffic-aware navigation, multi-vehicle
                        dispatching, and dynamic rerouting for operational
                        efficiency.
                      </p>
                    </div>
                  </a>
                  <a href="#" class="product-item">
                    <div class="product-content">
                      <h3>Geofleet Supervisor App →</h3>
                      <p>
                        Stay in control with a live fleet tracking dashboard,
                        geofencing alerts, route playback, task allocation, and
                        quick issue reporting for effective decision-making.
                      </p>
                    </div>
                  </a>
                  <a href="#" class="product-item">
                    <div class="product-content">
                      <h3>Geofleet Mobile App →</h3>
                      <p>
                        Empower drivers with navigation tools, task updates,
                        proof of delivery (EPODs), OTP-based delivery
                        validation, and seamless communication with supervisors.
                      </p>
                    </div>
                  </a>
                </div>
                <div class="mega-menu-links">
                  <ul class="menu-links">
                    <li className="flex-column">
                      <img
                        src="../../assets/images/white-logo.png"
                        alt="logo-svg"
                      />
                    </li>
                    <li>
                      <p>
                        GeoFleet is a comprehensive fleet management solution
                        with multi-source tracking (Mobile App, SIM, GPS,
                        RFID/Fastag), real-time updates, route optimization, and
                        delivery management features like EPOD, E-Signature, and
                        OTP, ensuring efficient and secure operations.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a href="#how-it-works">How it Works</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
          </ul>

          <div className="right-header">
            {/* Hamburger Menu */}
            <div className="mobile-menu-icon" onClick={toggleSidebar}>
              <HumbergMenu />
            </div>

            <Link
              to="http://app.geofleet.ai/"
              className="primary-btn"
              data-aos="fade-down"
            >
              Sign In
            </Link>
          </div>
        </header>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          ✖
        </button>
        <ul>
          <li>
            <Link to="/" onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li>
            <a href="#features" onClick={toggleSidebar}>
              Features
            </a>
          </li>
          <li>
            <a href="#how-it-works" onClick={toggleSidebar}>
              How it works
            </a>
          </li>
          <li>
            <a href="#pricing" onClick={toggleSidebar}>
              Pricing
            </a>
          </li>
        </ul>
      </div>

      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
}
