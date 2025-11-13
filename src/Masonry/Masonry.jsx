import React from "react";
import { PageNameContainer } from "../Common_Components/PageNameContainer";
import MAssonryPN from "../Images/MassonryPN.webp";
import { CommonHeading } from "../Common_Components/CommonHeading";
import { HalfTextHalfImg } from "../Common_Components/HalfTextHalfImg";
import MasonaryHTHI from "../Images/MasonryHTHI.webp";
import "./Masonry.css";
import Service1 from "../Images/Service1.webp";
import Service2 from "../Images/Service2.webp";
import Service3 from "../Images/Service3.webp";
import Service4 from "../Images/Service4.webp";
import { LookAtTrades } from "../Common_Components/LookAtTrades";
import { Banner } from "../Common_Components/Banner";
import { GetStartedwithUs } from "../Common_Components/GetStartedwithUs";
import { LookAtTradesTwo } from "../Common_Components/LookAtTradesTwo";
import { Helmet } from "react-helmet";

export const Masonry = () => {
  const text = (
    <>
      We have extensive experience and practical expertise in the AEC industry,
      making us experts in providing precise and timely estimates for masonry
      work to a range of clients. These include general contractors, masonry
      contractors, masonry repair contractors, vendors, masons, developers,
      architects, designers, and home builders.
    </>
  );
  const TradeData = [
    { ServiceName: "General Requirement", imgSrc: Service1, redirectTo: "/" },
    { ServiceName: "Site Works", imgSrc: Service2, redirectTo: "/" },
    { ServiceName: "Concrete", imgSrc: Service3, redirectTo: "/" },
    { ServiceName: "Masonry", imgSrc: Service4, redirectTo: "/" },
  ];
  return (
    <div>
      <Helmet>
        <title>Masonry Estimating Services - Procore Estimators</title>

        <meta
          name="description"
          content="Discover precise masonry estimating services by Procore Estimators. Our detailed assessments help you plan and execute projects with confidence."
        />
      </Helmet>
      <PageNameContainer Pagename="Masonry Estimations" src={MAssonryPN} />
      <div className="container">
        <p className="paragraph mt-4 mb-4">
          For top-tier masonry estimating services, look no further than{" "}
          <span style={{ color: "#FF7518" }}>Procore Estimators</span>. With
          extensive experience spanning America we excel in providing precise
          and punctual estimates. Our adept masonry cost estimator is
          well-versed in Division 4, comprehensively covering brickwork, CMU
          walls, masonry types, and more. Using advanced software like AccuBid,
          Planswift, and Bluebeam, and adhering to esteemed organizations like
          AACE and AIQS, our dedicated team ensures quality and accuracy in
          every estimation.
        </p>
        <CommonHeading text="Our estimation for masonry" />
        <HalfTextHalfImg text={text} src={MasonaryHTHI} />
        <CommonHeading text="The Masonry Trade includes" />
        <div className="row w-100 justify-content-center m-0 ULstyle">
          <div className="col-md-6 col-sm-6 col-12">
            <ul>
              <li>CMU Masonry</li>
              <li>Glass unit masonry</li>
              <li>Clay unit masonry</li>
              <li>Architectural & glazed masonry</li>
              <li>Stonemasonry walls</li>
              <li>Granite</li>
              <li>Limestone</li>
              <li>Marble</li>
              <li>Sandstone</li>
              <li>Soapstone</li>
              <li>Slate</li>
            </ul>
          </div>
          <div className="col-md-6 col-sm-6 col-12">
            <ul>
              <li>Cast stone</li>
              <li>Mortar and grout</li>
              <li>Masonry Flashing</li>
              <li>Masonry Anchorage</li>
              <li>Masonry Insulation</li>
              <li>Chimney brick</li>
              <li>Brick tuckpointing</li>
              <li>brick wall tiles</li>
              <li>Brick Veneer</li>
              <li>Stucco work</li>
              <li>Terra Cotta Masonry</li>
            </ul>
          </div>
        </div>
        <CommonHeading text="Why should you outsource your masonry estimate?" />
        <p className="paragraph">
          In today's fiercely competitive construction landscape, where narrow
          profit margins prevail, the key to gaining a competitive edge lies in
          precise and comprehensive estimates. Crafting a masonry estimate on
          your own presents challenges of accuracy, complexity, and time
          constraints. Achieving accurate masonry estimates necessitates
          in-depth knowledge of materials, labor, transportation, and software
          proficiency.
          <br />
          <br />
          Opting to outsource your estimates to a seasoned firm like{" "}
          <spaan style={{ color: "#FF7518" }}>Procore Estimators</spaan> offers
          distinct advantages: <br />
          <br />
          1. <b>Time Savings:</b> Free up valuable time for strategic business
          development by entrusting your estimates to experts
          <br />
          <br />
          2. <b>Assured Accuracy:</b> Rely on meticulously crafted estimates by
          skilled estimators, boosting your confidence in bid submissions.
          <br />
          <br />
          3. <b>Increased Bidding Power:</b> With accurate estimates, you can
          confidently bid on more projects, enhancing your win rate.
          <br />
          <br />
          4. <b>Enhanced Efficiency:</b> Improved estimating efficiency
          translates to higher profit margins for your projects.
          <br />
          <br />
          5. <b>Cost Savings:</b> Sidestep the expenses associated with software
          purchase and full-time estimators, preserving your budget.
        </p>
      </div>
      <GetStartedwithUs />

      <div className="container">
        <LookAtTradesTwo />
      </div>
      <Banner />
    </div>
  );
};
