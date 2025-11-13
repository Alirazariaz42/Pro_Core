import React, { useState } from "react";
import mainImgWithOutText from "../Images/AboutUsWIthOutText.webp";
import mainImgWithText from "../Images/changedPicture.png";
import mission from "../Images/rocket.webp";
import vission from "../Images/banicolr.webp";
import logo from "../Images/logo.png";
import "./AboutUs.css";
import { Banner } from "../Common_Components/Banner";
import { CommonHeading } from "../Common_Components/CommonHeading";
import { Helmet } from "react-helmet";
export const AboutUs = () => {
  const [mainImg, setMainimg] = useState(mainImgWithOutText);

  const changeImg = () => {
    setTimeout(() => {
      setMainimg(mainImgWithText);
    }, 500);
  };
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <Helmet>
          <title>
          About- Procore Estimators - Our Story & Expertise
          </title>

          <meta
            name="description"
            content="Discover the story of Procore Estimators. Learn about our expertise in providing accurate construction cost estimate. Your trusted partner in Estimating."
          />
        </Helmet>
      <div className="CircilerDivesContainer">
        <div className="orrangeDiv">
          <div className="yellowDiv">
            <div className="whiteDiv">
              <div>
                <img src={logo} alt="" height={50} width={130} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container  ">
          <div className="MainParagraphContainer  ">
            <p className="Heading">
              {" "}
              <span className="blacktext">About</span> <br /> PROCORE Estimators{" "}
            </p>
            <p className="paragraph">
              <span style={{ color: "#FF7518", fontWeight: "700" }}>
                PROCORE Estimators
              </span>{" "}
              offers Cost Estimating, Quantities & Material Takeoff, and
              Scheduling services to Contractors, subcontractors, material
              suppliers, and manufacturers . As we understand each client's
              unique requirements, our experts generate accurate and reliable
              estimates, eliminating alternatives. We have successfully served
              various developments, architectural firms, and contracting
              companies across America.
            </p>
          </div>
        </div>{" "}
      </div>
      <div className="verticalDivContainer mt-4">
        <div className="verticalDivTextContainer mt-5 ">
          <p className="paragraph">
            {" "}
            Over 10 years in the AEC industry, we have developed a deep
            understanding of the rapidly changing construction landscape and
            guide our clients accordingly. We combine industry expertise,
            cutting-edge technology, and an unwavering commitment to improving
            construction estimating, scheduling, and cost management procedures
            to conserve your resources and time. We can assist you with an
            expert if you need one.<br></br>{" "}
            <span span style={{ color: "#FF7518", fontWeight: "700" }}>
              Reach us at{" "}
              <a
                style={{ textDecoration: "none", color: "#FF7518" }}
                href="tel:+ 1 917 720 3892"
              >
                {" "}
                +1 917 720 3892
              </a>
            </span>
          </p>
        </div>
        <div className="verticalDivRectangle text-center">
          <img src={mission} alt="" height={120} width={90} />
          <h1> Our Mission</h1>
          <p>
            Our vision is to build and maintain a successful business
            relationship which includes providing uncompromising quality,
            reliable accuracy, and fast turnaround time to General Contractors,
            Home Builders, Subcontractors, Architects, Developers, and Home
            Owners
          </p>
        </div>
        <div className="verticalDivRectangle mt-5 text-center">
          {" "}
          <img src={vission} alt="" height={120} width={90} />
          <h1>Our Vision</h1>
          <p>
            We are driven by the goal of establishing and nurturing enduring,
            fruitful business connections with our clients. We achieve this by
            ensuring their complete contentment in terms of Turnaround time,
            Price, and above all, consistent Accuracy. If you're interested in
            discovering more about our services, industry background, and
            examples of our work, please don't hesitate to inquire.
          </p>
        </div>
      </div>
      <div className=" container mt-4">
        <CommonHeading text="Why Choose Us" />
      </div>
      <div className="MainImgContainer">
        <img src={mainImgWithText} alt="" />
      </div>
      <Banner />
    </div>
  );
};
