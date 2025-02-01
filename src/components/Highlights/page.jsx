import React from "react";
import "./page.css";

export default function HightLightFeature({ data }) {
  return (
    <section className="hightlight-feature-section">
      <div className="container">
        <div className="mb-5">
          <h2>Feature Highlights</h2>
          <p>
            Comprehensive Features catering all major industries to
            <span className="d-block">manage your fleet efficiently.</span>
          </p>
        </div>
        <div className="row row-gap-5">
          {data?.map((item, index) => {
            return (
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="hightlight-cards">
                  <img src={item?.image} alt="images" />
                  <div>
                    <h4>{item?.heading}</h4>
                    <p>{item?.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
