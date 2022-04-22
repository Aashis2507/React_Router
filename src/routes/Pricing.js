import React from "react";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import PricingCom from "../components/PricingCom";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="PRICING" text="Lets Go to the Space" />
      <PricingCom />
      <Footer />
    </div>
  );
};

export default Pricing;
