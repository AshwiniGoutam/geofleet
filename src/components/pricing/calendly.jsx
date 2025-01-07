import React, { useEffect } from "react";

export const CalendlyBadge = ({ url }) => {
  useEffect(() => {
    const parentElement = document.getElementById("calendly-inline-widget");

    // Clear existing widget if present
    parentElement.innerHTML = "";

    if (window.Calendly) {
      window.Calendly.initInlineWidget({
        url,
        parentElement,
      });
    }
  }, [url]);

  return <div id="calendly-inline-widget" style={{ height: "900px" }} />;
};
