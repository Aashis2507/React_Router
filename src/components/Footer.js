import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "#ffffff", marginRight: "20px" }}
            />
            <div>
              <p>26 New Chord Road</p>
              <h4>Kolkata</h4>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#ffffff", marginRight: "20px" }}
              />
              6289870560
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#ffffff", marginRight: "20px" }}
              />
              aashisgupta@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>
            Our Industry had launched more than 300 satellites for various
            foreign states. There were more than 40 startups in India in early
            2021 in various stages of developing their own launch vehicles,
            designing satellites and other allied activities.
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#ffffff", marginRight: "20px" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#ffffff", marginRight: "20px" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#ffffff", marginRight: "20px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
