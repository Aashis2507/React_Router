import React from "react";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import TrainingCom from "../components/TrainingCom";

const Training = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="TRAINING" text="Pre-Flight & In-Flight Training" />
      <TrainingCom />
      <Footer />
    </div>
  );
};

export default Training;
