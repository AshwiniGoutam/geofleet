import React from "react";
import Header from "../../components/header/header";
import Banner from "../../components/banner/page";
import Testimonial from "../../components/testimonials/page";
import CtaSection from "../../components/cta-section/page";
import Pricing from "../../components/pricing/page";
import Footer from "../../components/footer/footer";

export default function FleetManagment() {
  return (
    <>
      <Header />
      <Banner/>
      <Testimonial/>
      <CtaSection/>
      <Pricing/>
      <Footer/>
    </>
  );
}
