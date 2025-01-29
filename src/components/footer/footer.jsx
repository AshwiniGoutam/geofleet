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
                  src="../assets/images/white-logo.png"
                  alt="logo"
                  width="180px"
                />
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
                href="mailto:care@geofleet.ai"
                className="d-flex align-items-center gap-2 mt-3 mb-0"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                care@geofleet.ai
              </a>
            </div>
            <div className="col-6 col-md-6 col-lg-2">
              <h4 className="footer-heading">Useful Links</h4>

              <ul>
                <li>
                  <Link to="/route-as-service">Routing as Service</Link>
                </li>
                <li>
                  <Link to="/supervisor-app">Supervisor App</Link>
                </li>
                <li>
                  <Link to="/driver-mobile-app">Driver Mobile App</Link>
                </li>
                <li>
                  <Link to="/sim-tracking">Sim Tracking</Link>
                </li>
                <li>
                  <Link to="/tms">Track and Trace</Link>
                </li>
                <li>
                  <Link to="/fleet-management">Fleet Management</Link>
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
              <h4 className="footer-heading">Others</h4>

              <ul>
                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms-and-condition">Terms and Condition</a>
                </li>
              </ul>
            </div>

            <div className="d-flex align-items-center gap-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.geofleet.app&hl=en_IN"
                target="_blank"
              >
                {" "}
                <img src="../../assets/images/play_store_badge.svg" alt="" />
              </a>
              <a
                href="https://apps.apple.com/in/app/geofleet/id6739492785"
                target="_blank"
              >
                {" "}
                <img src="../../assets/images/app_store_badge.svg" alt="" />
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
              {/* <a href="/">
                {" "}
                <img src="../../assets/images/instagram-icon.png" alt=""  width="30px" height="30px"/>
              </a> */}
              <a href="https://x.com/geofleetAI" target="_blank">
                {" "}
                <img
                  src="../../assets/images/twitter-icon.png"
                  alt=""
                  width="30px"
                  height="30px"
                />
              </a>
              <a
                href="https://www.linkedin.com/showcase/geofleetin"
                target="_blank"
              >
                {" "}
                <img
                  src="../../assets/images/linkedin-icon.png"
                  alt=""
                  width="30px"
                  height="30px"
                />
              </a>
              <a href="https://www.youtube.com/@getgeofleet" target="_blank">
                {" "}
                <img
                  src="../../assets/images/youtube.png"
                  alt=""
                  width="40px"
                  height="40px"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
