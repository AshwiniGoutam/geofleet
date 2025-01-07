import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { CalendlyBadge } from "./calendly";

export default function PricingModal({ onHide, show }) {
  useEffect(() => {
    if (
      !document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Schedule a demo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {show && (
          <CalendlyBadge url="https://calendly.com/parallaxiq-yuk/schedule-demo-clone" />
        )}
      </Modal.Body>
    </Modal>
  );
}
