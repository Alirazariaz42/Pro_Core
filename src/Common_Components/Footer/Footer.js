import React from "react";
import footerLogo from "../../Images/LogoWhite.png";
import "./Footer.css";
import whatsApp from "../../Images/whatsApp.png";
import email from "../../Images/Email.png";
import location from "../../Images/locarions.png";
import MFBZONEText from "../../Images/MFBZONEText.png";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <>
      <div className="FooterContainer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-12">
              <img
                src={footerLogo}
                style={{ height: "85px", width: "205px" }}
                alt="LOGO"
              />
              <p className="FooterDescription">
                <span style={{ color: "#FF7518", fontWeight: "700" }}>
                  PROCORE Estimators
                </span>{" "}
                are an industry leader in providing accurate and reliable
                construction cost estimation services. We specialize in Quantity
                and Material Takeoff, Scheduling, and Planning for your project
                management needs. Our experts use advanced softwares and we pay
                close attention to detail to ensure accurate estimates. We
                provide you with accurate information in a timely manner,
                enabling you to make informed decisions and execute projects
                efficiently. Rely on{" "}
                <span style={{ color: "#FF7518", fontWeight: "700" }}>
                  PROCORE Estimators
                </span>{" "}
                for precise and prompt cost estimation in construction.
              </p>
            </div>
            <div
              className="col-md-4 col-sm-6 col-12"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="text-center footerLinks">
                <h1> Navigation</h1>
                <Link style={{ textDecoration: "none" }} to="/Services">
                  {" "}
                  <h4>Services</h4>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/AboutUs">
                  {" "}
                  <h4>About us</h4>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/Payment">
                  <h4>Payment</h4>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/Samples">
                  <h4>Sample</h4>
                </Link>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-6 col-12"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className=" footerLinks">
                <h1>Contact</h1>

                <p>
                  <img src={location} height={30} width={30} /> 2505 Bedford
                  Ave,
                  <br /> Brooklyn, NY 11226, USA
                </p>

                <p>
                  {" "}
                  <img src={whatsApp} height={30} width={30} /> 
                  <a style={{textDecoration:"none", color:"white"}}  href="tel:+ 1 917 720 3892"> +1 917 720 3892</a>
                 
                </p>
                <p>
                  {" "}
                  <img src={email} height={30} width={30} />{" "}
                  <a style={{textDecoration:"none", color:"white"}} href="mailto:Dave@procoreestimators.com">Dave@procoreestimators.com</a>

                </p>
              </div>
            </div>
          </div>
          <p className=" text-center" style={{ color: "white" }}>
            {" "}
            Copyright © 2023 Procore Estimators Designed By{" "}
           <a href="http://www.mfbzone.com/" target="blanck "> <img src={MFBZONEText} width={75} height={13} /></a>
          </p>
        </div>
      </div>
    </>
  );
};
