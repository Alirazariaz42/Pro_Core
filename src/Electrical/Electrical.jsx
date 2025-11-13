import React from "react";

import { GetStartedwithUs } from "../Common_Components/GetStartedwithUs";
import { LookAtTrades } from "../Common_Components/LookAtTrades";
import { Banner } from "../Common_Components/Banner";
import ElectricalDatapic1 from "../Images/ElectricalDatapic1.webp";
import ElectricalDatapic2 from "../Images/ElectricalDatapic2.webp";
import ElectricalDatapic3 from "../Images/ElectricalDatapic3.webp";
import ElectricalDatapic4 from "../Images/ElectricalDatapic4.webp";
import ElectricalDatapic5 from "../Images/ElectricalDatapic5.webp";
import { TextImgCardContainer } from "../Common_Components/TextImgCardContainer";

import pagenamecontainerpic from "../Images/ElectricalPNCpic.webp";
import { CommonHeading } from "../Common_Components/CommonHeading";
import { PageNameContainer } from "../Common_Components/PageNameContainer";
import { TextImgCardContainerHovertext } from "../Common_Components/TextImgCardContainerHovertext";
import { Helmet } from "react-helmet";
export const Electrical = () => {
  
  const Arrar1 = [
    {
      Title: "Wiring Materials and Components",
      imgSrc: ElectricalDatapic1,
      text: (
        <>
          <ul>
            <li>Breakdown of wiring types (copper, aluminum) and gauges.</li>
            <li>Cost estimates for cables, wires, conduits, and raceways.</li>
            <li>
              Specifications for junction boxes, panels, and distribution
              boards.
            </li>
          </ul>
        </>
      ),
    },
    {
      Title: "Circuitry and Load Analysis",
      imgSrc: ElectricalDatapic2,
      text: (
        <>
          <ul>
            <li>
              Estimation of circuits based on load requirements and safety
              regulations.
            </li>
            <li>
              Analysis of load distribution across different areas or floors.
            </li>
            <li>
              Breakdown of costs for circuit breakers, fuses, and other
              protective devices.
            </li>
          </ul>
        </>
      ),
    },
    {
      Title: "Labor and Installation",
      imgSrc: ElectricalDatapic3,
      text: (
        <>
          <ul>
            <li>
              Labor hours estimation for wiring installation, including pulling
              cables and connections.
            </li>
            <li>
              Inclusion of specialized labor for panel assembly and distribution
              setup.
            </li>
            <li>
              Consideration of safety measures and compliance during
              installation.
            </li>
          </ul>
        </>
      ),
    },
  ];
  const Arrar2 = [
    {
      Title: "Light Fixtures and Luminaires",
      imgSrc: ElectricalDatapic4,
      text: (
        <>
          <ul>
            <li>
            Detailed list of lighting fixtures for various spaces (interior, exterior).
            </li>
            <li>
            Cost estimates for different types of fixtures (LED, fluorescent, incandescent).
            </li>
            <li>
            Labor estimates for fixture installation, including wiring and mounting.
            </li>
          </ul>
        </>
      ),
    },
    {
      Title: "Lighting Control and Automation",
      imgSrc: ElectricalDatapic5,
      text: (
        <>
          <ul>
            <li>
            Data on smart lighting systems and automation technologies.
            </li>
            <li>
            Estimates for control panels, sensors, dimmers, and timers.
            </li>
            <li>
            Information on energy-efficient lighting solutions and their benefits.
            </li>
          </ul>
        </>
      ),
    },
  ];
  return (
    <div>
      <Helmet>
          <title>
          Best Electrical Estimating Services
          </title>

          <meta
            name="description"
            content="Our electrical estimating team stands out, offering unparalleled expertise and advanced skills gained through years of industry experience."
          />
        </Helmet>
      <PageNameContainer Pagename="Electrical" src={pagenamecontainerpic} />
      <div className=" container">
        <p className=" paragraph mt-4">
          <span style={{ color: "#FF7518", fontWeight: "700" }}>
            Procore Estimators
          </span>
          , your trusted source for comprehensive and accurate electrical
          estimation data. We offer a wealth of information to assist you in
          effectively planning and budgeting for your electrical projects. Our
          detailed electrical estimation data is categorized as follows{" "}
        </p>
        <CommonHeading text="Electrical Wiring and Distribution" />

        <TextImgCardContainerHovertext Data={Arrar1} />
        <CommonHeading text="Lighting Systems" />
        <TextImgCardContainerHovertext Data={Arrar2} />
        <CommonHeading text="What are the Benefits of Outsourcing the Estimation" />
        <ul className=" paragraph">
          <li>
            We can offer you the adaptability to deal with all extents of issues
            as an experienced electrical assessing firm.
          </li>
          <li>
            Our exceptionally cutthroat rates can decrease your overhead
            expenses and let you save 60% of the cost of an in-house assessor.
          </li>
          <li>
            Reevaluating can assist you with expanding your assessing limit
            while having a restricted in-house staff.
          </li>
          <li>
            When you re-appropriate your evaluations to proficient electrical
            assessors like us, you get the certainty of a free, fair-minded
            gauge that can check your bid statement, resolve change request
            questions, and so on.
          </li>
          <li>
            Arriving at a free firm for your electrical appraisals assists you
            with moving your essential spotlight on your business development
            while expanding assessing proficiency assists with offering more
            positions that add to winning more positions.
          </li>
          <li>
            Rethinking diminishes stress and late work, long stretches of
            estimating work amounts, and planning quotes while you get the
            computerized gauge report.
          </li>
          <li>
            Hence, all these are the benefits you can get if you outsource.
          </li>
        </ul>
      </div>
      <GetStartedwithUs />
      <div className="container">
        <LookAtTrades  />
      </div>
      <Banner />
    </div>
  );
};
