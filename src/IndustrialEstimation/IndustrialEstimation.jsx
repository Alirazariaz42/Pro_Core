import React from "react";


import { GetStartedwithUs } from "../Common_Components/GetStartedwithUs";
import { LookAtTrades } from "../Common_Components/LookAtTrades";
import { Banner } from "../Common_Components/Banner";

import pagenamecontainerpic from "../Images/IndustrialPNCpic.webp";
import { CommonHeading } from "../Common_Components/CommonHeading";
import { PageNameContainer } from "../Common_Components/PageNameContainer";
import { HalfTextHalfImg } from "../Common_Components/HalfTextHalfImg";
import IndustrialHTHI from "../Images/IndustrialHTHI.webp";
import { Helmet } from "react-helmet";

export const IndustrialEstimation = () => {
 
  const text = (
    <>
      Obtain our Industrial estimation solutions for reducing estimation
      expenses and increasing precision, while having your estimates and
      takeoffs reviewed and evaluated by expert construction estimators with the
      quickest turnaround times.{" "}
      <span
        style={{
          color: "#FF7518",
          fontWeight: "700",
          marginRight: "10px",
        }}
      >
        Procore Estimators
      </span>{" "}
      has experience providing complete estimating services to EPC contractors,
      owners, engineering companies, financial backers, and joint venture
      associates in the North American industrial sector. Our comprehensive
      array of industrial estimating solutions is customized to the unique
      requirements of each client, from project planning and initiation to
      construction.
    </>
  );
  return (
    <div>
      <Helmet>
          <title>
          Industrial & Remodel Estimating Services
          </title>

          <meta
            name="description"
            content="Procore Estimators delivers precise industrial estimating services through expert cost estimators, ensuring skilled and disciplined services for your projects."
          />
        </Helmet>
      <PageNameContainer
        Pagename="Industrial Estimating Services"
        src={pagenamecontainerpic}
      />
      <div className=" container mt-4">
        <HalfTextHalfImg text={text} src={IndustrialHTHI} />
        <CommonHeading text="Our Range Industrial Estimating Services" />
        <div className=" row mt-0 justify-content-center">
          <div
            className="col-md-6 col-12"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div>
              <ul className=" paragraph">
                <li>
                  Comprehensive quantity takeoffs and cost estimates for all
                  divisions
                </li>
                <li>Estimates for quality assurance and quality control</li>
                <li>Expert eye witnesses</li>
                <li>Cold eyes reviews</li>
                <li>Bid Evaluation & Management</li>
                <li>Procurement Services</li>
                <li>Change Order Preparation & Review</li>
              </ul>
            </div>
          </div>
          <div
            className="col-md-6 col-12"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div>
              <ul className=" paragraph">
                <li>Feasibility Studies</li>
                <li>Risk Analysis</li>
                <li>Productivity Analysis</li>
                <li>Project Scheduling</li>
                <li>Project Cost Management</li>
                <li>Value Engineering</li>
              </ul>
            </div>
          </div>
        </div>
        <CommonHeading text="Industrial Structural Steel Estimating" />
        <p className=" paragraph">
          With our team of expert estimators and engineers specializing in steel
          estimation, we have successfully served numerous structural steel
          contractors and design companies involved in steel erection for
          multi-story buildings and industrial facilities. Utilizing the finest
          estimating practices, our team produces accurate structural steel
          estimates that aid in planning, bidding, procurement, and also reduce
          waste, contributing to a greener environment. Our takeoffs provide a
          comprehensive breakdown of all structural steel design parts, such as
          channels, beams, angles, plates, connectors, and additional
          accessories, offering a complete understanding of the costs involved
          in your project.
        </p>
        <CommonHeading text="Industrial Electrical Estimating" />
        <p className=" paragraph">
          Our team of skilled estimators and engineers, specializing in steel
          calculation, has successfully supported numerous structural steel
          contractors and design firms engaged in steel assembly for multi-level
          structures and industrial complexes. Employing the finest calculation
          techniques, our team generates precise structural steel evaluations
          that assist in planning, bidding, procurement, and minimizing waste,
          promoting a more sustainable environment. Our take-offs offer a
          thorough analysis of all structural steel design components, such as
          channels, beams, angles, plates, connectors, and extra accessories,
          delivering a comprehensive understanding of the expenses associated
          with your project.
        </p>
      </div>
      <GetStartedwithUs />
      <div className="container">
        <LookAtTrades  />
      </div>
      <Banner />
    </div>
  );
};
