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
            <img src="../assets/images/dots.png" alt="logo" width="" />
            <img src="../assets/images/dots.png" alt="logo" width="" />
            <img src="../assets/images/dots.png" alt="logo" width="" />
            geofleet.ai
          </Link>
        </div>

        <ul data-aos="fade-down" className="desktop-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="dropdown">
            <Link to="#">Features</Link>
          </li>
          <li>
            <Link to="#">How it Works</Link>
          </li>
          <li>
            <Link to="#">Pricing</Link>
          </li>
          <li>
            <Link to="#">Blog</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <div className="mobile-menu-icon" onClick={toggleSidebar}>
          <HumbergMenu />
        </div>

        <Link to="/contact-us" className="primary-btn" data-aos="fade-down">
          Sign In
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
              How it works
            </Link>
          </li>
          <li>
            <Link to="/csms-platform" onClick={toggleSidebar}>
              Pricing
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
