import React, { useState } from "react";
import "./page.css";
import Header from "../../components/header/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { IntegrationData } from "../../data";
import CtaSection from "../../components/cta-section/page";
import Footer from "../../components/footer/footer";
import { Modal } from "react-bootstrap";
import {
  MapPin,
  Radio,
  Smartphone,
  ArrowRight,
  DollarSign,
  Clock,
  Package,
  User,
  LayoutGrid,
  Route,
  Blocks,
} from "lucide-react";
import PricingModal from "../../components/pricing/pricing-model";

export default function Intigration() {
  const [Show, setShow] = useState(false);

  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <PricingModal show={modalShow} onHide={() => setModalShow(false)} />
      <Header hideWorks />
      <section className="intigration-section">
        <div className="container">
          <div className="intigration-logo-1">
            <img src="../../assets/images/flipkart.webp" alt="" />
          </div>
          <div className="intigration-logo-2">
            <img src="../../assets/images/shopify.png" alt="" />
          </div>
          <div className="intigration-logo-3">
            <img src="../../assets/images/Bigcommerce.png" alt="" />
          </div>
          <div className="intigration-logo-4">
            <img src="../../assets/images/Unicommerce.png" alt="" />
          </div>

          <div className="banner-content-section">
            <h1>
              Reimagine Power with{" "}
              <span className="d-block">Unbeatable Platform </span> Integrations
            </h1>
            <div className="d-flex align-items-center gap-3">
              <button
                className="primary-btn"
                onClick={() => setModalShow(true)}
              >
                Schedule a Demo
              </button>
              <a href="#integration">
                <button className="secondary-btn">Browse Intigration</button>
              </a>
            </div>
          </div>

          <div className="intigration-logo-5">
            <img src="../../assets/images/Zoho.png" alt="" />
          </div>
          <div className="intigration-logo-6">
            <img src="../../assets/images/SAP.png" alt="" />
          </div>
          <div className="intigration-logo-7">
            <img src="../../assets/images/Porter.png" alt="" />
          </div>
          <div className="intigration-logo-8">
            <img src="../../assets/images/Shiprocket.png" alt="" />
          </div>
        </div>
      </section>

      <section className="major-intigration" id="integration">
        <div className="container">
          <div className="row row-gap-4 align-items-center">
            <div className="col-sm-12 col-lg-4">
              {" "}
              <h2>Major Intigration</h2>
            </div>
            <div className="col-sm-12 col-lg-8">
              <div>
                <span>Marketplace</span>
                <span>Point of Sale</span>
                <span>Shipping and Fullfillment</span>
                <span>eCommerce Storefronts</span>
                <span>Warehousing</span>
                <span>Accounting and ERP</span>
                <span>Cross-product Intigration</span>
              </div>
            </div>
          </div>

          <div className="row row-gap-4 integration-row">
            {IntegrationData &&
              IntegrationData?.map((items, index) => {
                return (
                  <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
                    <div
                      className="integration-boxes"
                      // onClick={() => setShow(true)}
                    >
                      <div>
                        <img src={items?.image} alt="icon" />
                        <h4>{items?.heading}</h4>
                        <p>{items?.description}</p>
                      </div>

                      {/* <a href="#">
                        Request Integration{" "}
                        <FontAwesomeIcon icon={faChevronRight} />
                      </a> */}
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="row stat-row">
            <div>
              <h2>
                Other Integration to{" "}
                <h2 className="d-block m-0">Support Your Business</h2>
              </h2>
              <p>
                Leading enterprise thoughout the world have achieved significant
                results with Geofleet management.
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="stat-boxes">
                <div className="stat-svg">
                  <DollarSign />
                  <span>400+</span>
                </div>
                <h4>Multi-Carrier Integration</h4>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="stat-boxes">
                <div className="stat-svg">
                  <Clock />
                  <span>30 +</span>
                </div>
                <h4>Communication Gatways</h4>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="stat-boxes">
                <div className="stat-svg">
                  <Package />
                  <span>50 + </span>
                </div>
                <h4>Leading WMS, OMS Platforms Integration.</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />

      <Footer />

      <Modal
        show={Show}
        onHide={() => setShow(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Request Integration
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="integration-form">
            <div>
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="form-control"
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control"
              />
            </div>
            <div>
              <label>Message</label>
              <textarea placeholder="Message" className="form-control" />
            </div>

            <button className="primary-btn">Send Request</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
