import React, { useState } from "react";
import "./page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";

export default function CtaSection() {
  const [email, setEmail] = useState("");
  const [ModalShow, setModalShow] = useState(false);
  const [Loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission
  
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }
  
    try {
      setLoading(true);
  
      const response = await fetch("https://api.geofleet.in/v1/iam/mail-list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        console.log("Response:", result);
        setModalShow(true);
        setEmail("");
      } else {
        // Show error message returned by the API
        const errorMessage = result.message;
        alert(`Error: ${errorMessage}`);
        console.log(errorMessage)
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false); // Stop loading spinner regardless of success or error
    }
  };
  
  return (
    <>
      <Modal
        show={ModalShow}
        onHide={() => setModalShow(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="cta-success-modal">
          <span className="close" onClick={() => setModalShow(false)}>
            <FontAwesomeIcon icon={faClose} />
          </span>
          <img src="../../assets/images/success-icon.png" alt="success-icon" />
          <h5 className="m-0">Thank you for reach out.</h5>
        </Modal.Body>
      </Modal>
      <section className="cta-section">
        <div className="container">
          <div className="row align-items-center overflow-hidden">
            <div className="col-sm-12 col-md-12 col-lg-6" data-aos="fade-right">
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
                    {Loading ? "Loading..." : "Submit"}
                  </button>
                </form>
              </div>

              <p className="login-text">
                Already a member? <a href="http://app.geofleet.ai/">Sign In</a>
              </p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6" data-aos="fade-left">
              <img
                src="../../assets/images/cta-image.png"
                alt="images"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
