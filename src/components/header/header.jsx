import React, { useEffect, useState } from "react";
import "./header.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import HumbergMenu from "../HumbergMenu";
import ArrowDown from "../arrowDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { Accordion } from "react-bootstrap";

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
      <header
        className={`header ${
          isScrolled || ShowHeader ? "header-scrolled" : ""
        }`}
        style={{ border: border ? "1px solid #ccc" : "" }}
      >
        <div className="container">
          <div>
            <Link to="/" className="logo-div">
              <img src="../assets/images/logo.svg" alt="logo" width="200px" />
            </Link>
          </div>

          <ul className="desktop-menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#features">
                Features <FontAwesomeIcon icon={faChevronDown} />{" "}
              </a>

              <div class="mega-menu">
                <div class="mega-menu-links">
                  <ul class="menu-links">
                    {/* <li className="flex-column">
                      <img src="../../assets/images/logo.svg" alt="logo-svg" />
                    </li> */}
                    <h3>Geofleet</h3>
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
                <div class="mega-menu-products">
                  <h5>Features</h5>
                  <Link to="/route-as-service" class="product-item">
                    <div class="product-content">
                      <h3>Routing as Service →</h3>
                    </div>
                  </Link>
                  <Link to="/supervisor-app" class="product-item">
                    <div class="product-content">
                      <h3>Supervisor App →</h3>
                    </div>
                  </Link>
                  <Link to="/driver-mobile-app" class="product-item">
                    <div class="product-content">
                      <h3>Driver Mobile App →</h3>
                    </div>
                  </Link>
                  <Link to="/sim-tracking" class="product-item">
                    <div class="product-content">
                      <h3>Sim Tracking →</h3>
                    </div>
                  </Link>
                  <Link to="/fleet-management" class="product-item">
                    <div class="product-content">
                      <h3>Fleet Management →</h3>
                    </div>
                  </Link>
                </div>

                <div class="mega-menu-products">
                  <h5>Products</h5>
                  <Link to="/" class="product-item">
                    <div class="product-content">
                      <h3>Track & Trace, →</h3>
                    </div>
                  </Link>
                  <a href="/" class="product-item">
                    <div class="product-content">
                      <h3>Order Management System →</h3>
                    </div>
                  </a>
                  <a href="/" class="product-item">
                    <div class="product-content">
                      <h3>Route Planning API →</h3>
                    </div>
                  </a>
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
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          ✖
        </button>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Features</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  <Link to="/route-as-service" class="product-item">
                    <div class="product-content">
                      <h3>Routing as Service →</h3>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/supervisor-app" class="product-item">
                    <div class="product-content">
                      <h3>Supervisor App →</h3>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/driver-mobile-app" class="product-item">
                    <div class="product-content">
                      <h3>Driver Mobile App →</h3>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/sim-tracking" class="product-item">
                    <div class="product-content">
                      <h3>Sim Tracking →</h3>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/fleet-management" class="product-item">
                    <div class="product-content">
                      <h3>Fleet Management →</h3>
                    </div>
                  </Link>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <a href="#how-it-works" onClick={toggleSidebar}>
                How it works
              </a>
            </Accordion.Header>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <a href="#pricing" onClick={toggleSidebar}>
                Pricing
              </a>
            </Accordion.Header>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <Link to="http://app.geofleet.ai/">Sign In</Link>
            </Accordion.Header>
          </Accordion.Item>
        </Accordion>
      </div>

      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
}
