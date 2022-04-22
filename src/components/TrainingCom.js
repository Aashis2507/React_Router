import React from "react";
import "./TrainingCom.css";
import { Link } from "react-router-dom";
import p3 from "../assets/pic_5.jpg";
import p4 from "../assets/pic_2.jpg";
const TrainingCom = () => {
  return (
    <div className="training">
      <div className="left">
        <h1>Training</h1>
        <p>
          Thorough Training is a necessity when travelling to space. We afterall
          inclusive training for pre-flight and in-flight scenarios.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack">
            <div className="img-stack top">
              <img src={p3} className="img" alt="" />
            </div>
            <div className="img-stack bottom">
              <img src={p4} className="img" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingCom;
