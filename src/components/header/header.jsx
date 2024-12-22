import React, { useEffect, useState } from "react";
import "./header.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import HumbergMenu from "../HumbergMenu";
import ArrowDown from "../arrowDown";

export default function Header({ ShowHeader, home, mobile, csms, contact }) {
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
      >
        <div data-aos="fade-down">
          <Link to="/" className="logo-div">
            <img src="../assets/images/logo.png" alt="logo" width="160px" />
          </Link>
        </div>

        <ul data-aos="fade-down" className="desktop-menu">
          {!home && (
            <li>
              <Link to="/">
                Product <ArrowDown />
              </Link>
            </li>
          )}
          <li className="dropdown">
            <Link to="#">Pricing</Link>
          </li>
          {/* <li>
            <a href="#about-us">About</a>
          </li> */}
          <li>
            <a href="#features">Features</a>
          </li>
          {!mobile && !csms && !contact && (
            <li>
              <a href="#explore-solutions">
                Resources <ArrowDown />
              </a>
            </li>
          )}
        </ul>

        {/* Hamburger Menu */}
        <div className="mobile-menu-icon" onClick={toggleSidebar}>
          <HumbergMenu />
        </div>

        <Link to="/contact-us" className="primary-btn" data-aos="fade-down">
          Contact Us <img src="../../assets/images/arrow.svg" alt="" />
        </Link>
      </header>

      {/* Mobile Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          ✖
        </button>
        <ul>
          <li>
            {!home && (
              <Link to="/" onClick={toggleSidebar}>
                Home
              </Link>
            )}
          </li>
          <li>
            <a href="#features" onClick={toggleSidebar}>
              Features
            </a>
          </li>
          <li>
            <Link to="/mobile-app" onClick={toggleSidebar}>
              Mobile App
            </Link>
          </li>
          <li>
            <Link to="/csms-platform" onClick={toggleSidebar}>
              CSMS Platform
            </Link>
          </li>
          <li>
            <Link to="/contact-us" onClick={toggleSidebar}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
}
