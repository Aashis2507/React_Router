import React from "react";
import Footer from "../components/Footer";
import FormCom from "../components/FormCom";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="CONTACT" text="Contact GLX TRVL" />
      <FormCom />
      <Footer />
    </div>
  );
};

export default Contact;
