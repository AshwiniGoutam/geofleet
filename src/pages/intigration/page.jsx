import React from "react";
import "./page.css";
import Header from "../../components/header/header";

export default function Intigration() {
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
          <div className="row align-items-center">
            <div className="col-4">
              {" "}
              <h2>Major Intigration</h2>
            </div>
            <div className="col-8">
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
        </div>
      </section>
    </>
  );
}
