import React from "react";
import "./page.css";

export default function PageFeatures({ data }) {
  return (
    <section className="page-features-section">
      <div className="container">
        {data?.map((item, index) => {
          return (
            <div className="row" key={index}>
              <div className="col-sm-6">
                <img
                  src={item?.image}
                  alt="images"
                  // className={index === 5 ? "w-100" : ""}
                />
              </div>
              <div className="col-sm-6 content-col">
                <div>
                  <h2>{item?.heading}</h2>
                  <p>{item?.description}</p>
                </div>
                <hr />
                <div>
                  <h4>{item?.subHeading}</h4>
                  <ul>
                    {item?.List?.map((i, o) => {
                      return <li key={o}>{i}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
