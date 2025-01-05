import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row row-gap-4 justify-content-between w-100">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="logo-div">
                <img
                  src="../assets/images/white-dots.png"
                  alt="logo"
                  width=""
                />
                <img
                  src="../assets/images/white-dots.png"
                  alt="logo"
                  width=""
                />
                <img
                  src="../assets/images/white-dots.png"
                  alt="logo"
                  width=""
                />
                geofleet.ai
              </div>
              <p className="mt-4">
                Optimizing Fleets, Planning Routes, and Ensuring Seamless
                Deliveries with Driver Excellence.
              </p>

              <a
                href="tel:(730) 3993-102"
                className="d-flex align-items-center gap-2 mt-3 mb-0"
              >
                <FontAwesomeIcon icon={faPhone} />
                (730) 3993-102
              </a>
              <a
                href="mailto:care@parallaxiq.com"
                className="d-flex align-items-center gap-2 mt-3 mb-0"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                care@parallaxiq.com
              </a>
            </div>
            <div className="col-6 col-md-6 col-lg-2">
              <h4 className="footer-heading">Useful Links</h4>

              <ul>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Products</Link>
                </li>
                <li>
                  <Link to="/">Team</Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-6 col-lg-2">
              <h4 className="footer-heading">Help & Support</h4>

              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
                <li>
                  <Link to="/">Support</Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-6 col-lg-2">
              <h4 className="footer-heading">Resources</h4>

              <ul>
                <li>
                  <a href="#">Support Centre</a>
                </li>
                <li>
                  <Link to="/">Blogs</Link>
                </li>
              </ul>
            </div>

            <div className="d-flex align-items-center gap-2">
              <a href="/">
                {" "}
                <img src="../../assets/images/google-store.png" alt="" />
              </a>
              <a href="/">
                {" "}
                <img src="../../assets/images/apple-store.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright-section">
        <div className="container">
          <div className="row">
            <a href="https://parallaxiq.com/" target="_blank">
              Copyright @ 2025 © Pixelcrews All rights reserved
            </a>

            <div className="d-flex align-items-center gap-4 w-auto">
              <a href="/">
                {" "}
                <img src="../../assets/images/instagram-icon.png" alt="" />
              </a>
              <a href="/">
                {" "}
                <img src="../../assets/images/twitter-icon.png" alt="" />
              </a>
              <a href="/">
                {" "}
                <img src="../../assets/images/linkedin-icon.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
