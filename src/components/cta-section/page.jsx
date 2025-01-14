import React, { useState } from "react";
import "./page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function CtaSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("https://api.geofleet.in/v1/iam/mail-list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Response:", result);
      } else {
        const error = await response.json();
        alert(`Error: ${error.message || "Failed to submit email."}`);
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      alert("An error occurred. Please try again.");
    }
  };
  return (
    <section className="cta-section">
      <div className="container">
        <div className="row align-items-center overflow-hidden">
          <div className="col-sm-6" data-aos="fade-right">
            <h2>
              Secure and Reliable – Our Geofleet Driver App is Built for Your
              Peace of Mind.
            </h2>
            <p>
              Designed with safety and transparency, ensuring no hidden{" "}
              <span className="d-block">risks or surprises.</span>
            </p>
            <div className="mt-4">
              <form
                className="d-flex align-items-center gap-2 w-100"
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="form-control m-0"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Update state with input value
                  required
                />
                <button className="primary-btn" type="submit">
                  Submit
                </button>
              </form>
            </div>

            <p className="login-text">
              Already a member? <a href="http://app.geofleet.ai/">Sign In</a>
            </p>
          </div>
          <div className="col-sm-6" data-aos="fade-left">
            <img
              src="../../assets/images/cta-image.png"
              alt="images"
              className="w-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
