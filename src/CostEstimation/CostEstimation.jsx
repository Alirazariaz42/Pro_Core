import React from "react";
import "./CostEstimation.css";
import { PageNameContainer } from "../Common_Components/PageNameContainer";
import { CommonHeading } from "../Common_Components/CommonHeading";
import CostEstimationpic from "../Images/CostEstimation.png";
import { TwoBoxes } from "../Common_Components/TwoBoxes";
import { LookAtTrades } from "../Common_Components/LookAtTrades";
import Service1 from "../Images/Service1.png";
import Service2 from "../Images/Service2.png";
import Service3 from "../Images/Service3.png";
import Service4 from "../Images/Service4.png";
import { Banner } from "../Common_Components/Banner";
import { HalfTextHalfImg } from "../Common_Components/HalfTextHalfImg";
import { GetStartedwithUs } from "../Common_Components/GetStartedwithUs";
import CostEstimationHTHI2 from "../Images/CostEstimationHTHI2.png";

import planning from "../Images/Planning.png";
import Scheduling from "../Images/Scheduling (3).png";
import QuantitesTakeoff from "../Images/QuantitiesTakeOff.png";
import CostEstimationpicArray from "../Images/CostEstimation(1).png";

import { Cards } from "../Common_Components/Cards";
import { Helmet } from "react-helmet";
export const CostEstimation = () => {
  const cardsArray = [
    // {
    //   Title: "Cost Estimation",
    //   text: "Cost estimation is most important and useful technique to get to know what is the budget and time duration to complete entire project but it’s very hectic and time consuming task",
    //   src: CostEstimationpicArray,
    //   redirect: "/Cost-Estimation",
    // },
    {
      Title: "Quantities & Material Takeoff",
      text: "Our experts are always here to help you to fill the gaps which exits in the initial phases of the proposed solution especially when we talk about Quantities and Material Takeoff. ",
      src: QuantitesTakeoff,
      redirect: "/construction-takeoff-services/",
    },
    {
      Title: " Scheduling ",
      text: "Scheduling transforms a project's high-level plan into a time-focused schedule, considering task durations, priorities, dependencies, resource availability, and deadlines, while acknowledging real-world constraints that can impact execution.",
      src: Scheduling,
      redirect: "/cost-scheduling/",
    },
    {
      Title: "Planning",
      text: "In project management, planning establishes the project's roadmap, while scheduling aligns that roadmap with a timeline for timely execution.",
      src: planning,
      redirect: "/planning/",
    },
  ];

  const paragraph2 = (
    <>
      <ul>
        <li>Budget cost estimate for financing purposes.</li>
        <li>
          Budgeted cost after assigning to contractor but before construction.
        </li>
        <li>Estimated cost of completion during ongoing construction.</li>
      </ul>
    </>
  );

  const paragraph1 = (
    <>
      <ul>
        <li>Design Estimates</li>
        <li>Screening estimates</li>
        <li>
          Engineer's estimates (based on specifications and architectural
          plans).
        </li>
        <li>Preliminary cost estimates</li>
      </ul>
    </>
  );
  const TradeData = [
    { ServiceName: "General Requirement", imgSrc: Service1, redirectTo: "/" },
    { ServiceName: "Site Works", imgSrc: Service2, redirectTo: "/" },
    { ServiceName: "Concrete", imgSrc: Service3, redirectTo: "/" },
    { ServiceName: "Masonry", imgSrc: Service4, redirectTo: "/" },
  ];
  const text1 = (
    <>
      <ul className=" paragraph" style={{ textAlign: "left" }}>
        <li>General Contractors</li>
        <li>Subcontractors</li>
        <li>Project managers</li>
        <li>Developers</li>
        <li>Investors</li>
        <li>Architects</li>
        <li>Homebuilders</li>
        <li>Owners</li>
        <li>Vendors</li>
        <li>Supplier</li>
        
      </ul>
    </>
  );
  return (
    <>
    <Helmet>
          <title>
          Best Construction Cost Estimating Services- Procore Estimators
          </title>

          <meta
            name="description"
            content="For precise construction cost estimating services? Trust Procore Estimators. Our experts ensure accurate budgeting for your construction projects."
          />
        </Helmet>
      <PageNameContainer Pagename="Cost Estimation" src={CostEstimationpic} />
      <div className="container">
        <div>
          <p className="paragraph mt-4">
            A detailed construction cost estimation is necessary for predicting
            the cost of any facility or structure under construction. It is an
            important part of the overall cost management for the builder, as
            well as necessary for budget adherence.
          </p>
          <CommonHeading text="Different Types of Construction Cost Estimates" />
          <p className="paragraph ">
            A majority of construction cost estimates were previously prepared
            by architects, contractors, or other specialized estimating firms.
            Construction cost estimates are based on a variety of factors, which
            generally fall into three categories.
          </p>
          <TwoBoxes
            title1="Design Estimators"
            title2="Control Estimates"
            paragraph1={paragraph1}
            paragraph2={paragraph2}
          />
          <p className="paragraph " style={{ textAlign: "left" }}>
            We firmly maintain that a precise forecast serves as a key
            instrument in establishing the budget and managing expenses
            throughout a project's lifespan. Our company initiates the
            estimation procedure with a comprehensive examination of design
            plans, alongside scrutinizing building methods, materials, location,
            permits, logistics, and other elements that expose concealed
            expenses impacting the project's cost prediction. Once our
            industry-specific estimators finalize the quantity assessment, the
            chief estimator verifies the estimate's adherence to standards and
            alignment with project objectives.
            <br />
            <br />
            We recognize the unique requirements of our clients and our
            construction cost estimating services are tailored to their
            particular needs. Among our clients are:
          </p>
          <HalfTextHalfImg text={text1} src={CostEstimationHTHI2} />
          <CommonHeading text="Methods of Cost Estimation:" />
          <ul className=" paragraph">
            <li>
              <b>Analogous Estimating:</b>This method uses historical data from
              similar projects to estimate costs. It's useful when detailed
              information is limited.
            </li>
            <li>
              {" "}
              <b>Parametric Estimating:</b> It involves using statistical
              relationships between historical data and project parameters (such
              as size, weight, or complexity) to estimate costs.
            </li>
            <li>
              {" "}
              <b>Bottom-Up Estimating:</b> This detailed approach involves
              estimating the cost of individual components or tasks and then
              aggregating them to get the total cost.
            </li>
            <li>
              {" "}
              <b>Three-Point Estimating:</b> It incorporates an optimistic,
              pessimistic, and most likely scenario to calculate a range of
              possible costs. This method is especially useful for complex
              projects with a high level of uncertainty.
            </li>
          </ul>
         
        </div>
      </div>

      <GetStartedwithUs />
         <div className=" text-center">
         <CommonHeading text="Our Services" />
         </div>
         <div className=" ">
         <div className="row w-100 m-0 justify-content-center">
            {cardsArray.map((CardData) => (
              <div
                className="col-lg-3 col-md-6 col-12"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div>
                  <Cards
                    src={CardData.src}
                    Title={CardData.Title}
                    text={CardData.text}
                    redirect={CardData.redirect}
                  />{" "}
                </div>
              </div>
            ))}
          </div>
         </div>
      <div>
        <Banner />
      </div>
    </>
  );
};
