import React from "react";
import { PageNameContainer } from "../Common_Components/PageNameContainer";
import pagenamecontainerpic from "../Images/ConveyingSystemPNCpic.webp";

import { GetStartedwithUs } from "../Common_Components/GetStartedwithUs";
import { LookAtTrades } from "../Common_Components/LookAtTrades";
import { Banner } from "../Common_Components/Banner";
import { CommonHeading } from "../Common_Components/CommonHeading";
import ConveyingSystemTextImgCard1 from "../Images/ConveyingSystemTextImgCard1.webp";
import ConveyingSystemTextImgCard2 from "../Images/ConveyingSystemTextImgCard2.webp";
import ConveyingSystemTextImgCard3 from "../Images/ConveyingSystemTextImgCard3.webp";
import {TextImgCardContainer} from '../Common_Components/TextImgCardContainer'
import { Helmet } from "react-helmet";

export const ConveyinySystem = () => {
 
  const Data=[
    {Title:"Elevators", imgSrc:ConveyingSystemTextImgCard1},
    {Title:"Wheelchair Lifts", imgSrc:ConveyingSystemTextImgCard2},
    {Title:"Laundry Chute", imgSrc:ConveyingSystemTextImgCard3}
  ]
  return (
    <div>
      <Helmet>
          <title>
          Conveyor System Estimating - Procore Estimators
          </title>

          <meta
            name="description"
            content="Accurate cost estimates for conveying systems. Trust Procore Estimators for reliable project planning. Stay on budget and on schedule."
          />
        </Helmet>
      <PageNameContainer
        Pagename="Conveying Systems"
        src={pagenamecontainerpic}
      />
      <div className=" container">
        <p className=" paragraph mt-4 ">
          {" "}
          At{" "}
          <span style={{ color: "#FF7518", fontWeight: "700" }}>
            {" "}
            PROCORE Estimators
          </span>
          , where our focus lies in offering precise and comprehensive
          assessments for conveying systems across diverse sectors. Our team of
          professionals is dedicated to assisting you in choosing and for the
          ideal conveying options to improve the effectiveness of your
          processes.
        </p>
        <CommonHeading text="Our Conveying Systems Estimation Process" />
        <p className=" paragraph">
          <span style={{ color: "#FF7518", fontWeight: "700" }}>
            {" "}
            Site Assessment:
          </span>{" "}
          If needed, we carry out an in-depth site evaluation to account for any
          specific factors that may influence conveyor system selection, such as
          layout, material kind, and flow necessities.
        </p>
        <p className=" paragraph">
          <span style={{ color: "#FF7518", fontWeight: "700" }}>
            {" "}
            Conveyor System Selection:
          </span>{" "}
          Based on your project's specifications, we suggest a variety of
          conveyor systems customized for your distinctive material handling
          wants, whether it's for bulk materials, packages, or specialized
          items.
        </p>
        <p className=" paragraph">
          <span style={{ color: "#FF7518", fontWeight: "700" }}>
            {" "}
            Detailed Estimate:
          </span>{" "}
          Our team offers a complete summary of the projected costs for each
          conveyor system type, encompassing equipment costs, installation, and
          any supplementary expenses like controls and integration.
        </p>
        <p className=" paragraph">
          <span style={{ color: "#FF7518", fontWeight: "700" }}>
            {" "}
            Presentation and Approval:
          </span>{" "}
          We reveal the estimate to you, clarifying each component and
          addressing any questions or concerns you may have. Once approved, we
          proceed with procurement.
        </p>
        <p className=" paragraph">
          <span style={{ color: "#FF7518", fontWeight: "700" }}>
            {" "}
            Procurement and Installation Management:
          </span>{" "}
          We handle the procurement process to guarantee that the conveyor
          systems meet the set criteria. Our team can also collaborate with
          equipment providers to supervise proper installation and integration.
        </p>
        <CommonHeading text="We provide" />
<TextImgCardContainer Data={Data}/>
      </div>

      <GetStartedwithUs />
      <div className="container">
        <LookAtTrades />
      </div>
      <Banner />
    </div>
  );
};
