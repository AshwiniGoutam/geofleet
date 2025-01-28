import React, { useState } from "react";
import "./page.css";
import Header from "../../components/header/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { IntegrationData } from "../../data";
import CtaSection from "../../components/cta-section/page";
import Footer from "../../components/footer/footer";
import { Modal } from "react-bootstrap";

export default function Intigration() {
  const [Show, setShow] = useState(false);
  return (
    <>
      <Header />
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
              <button className="primary-btn">Get Started</button>
              <button className="secondary-btn">Browse Intigration</button>
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

      <section className="major-intigration">
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
                  <div className="col-sm-4" key={index}>
                    <div
                      className="integration-boxes"
                      onClick={() => setShow(true)}
                    >
                      <div>
                        <img src={items?.image} alt="icon" />
                        <h4>{items?.heading}</h4>
                        <p>{items?.description}</p>
                      </div>

                      <a href="#">
                        Request Integration{" "}
                        <FontAwesomeIcon icon={faChevronRight} />
                      </a>
                    </div>
                  </div>
                );
              })}
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
