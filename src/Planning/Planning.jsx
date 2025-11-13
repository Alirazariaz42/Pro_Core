import React from "react";
import { PageNameContainer } from "../Common_Components/PageNameContainer";
import Planningpic from "../Images/planningpic.png";
import { TwoBoxes } from "../Common_Components/TwoBoxes";
import { CommonHeading } from "../Common_Components/CommonHeading";
import { LookAtTrades } from "../Common_Components/LookAtTrades";
import Service1 from "../Images/Service1.png";
import Service2 from "../Images/Service2.png";
import Service3 from "../Images/Service3.png";
import Service4 from "../Images/Service4.png";
import { Banner } from "../Common_Components/Banner";
import { Cards } from "../Common_Components/Cards";
import Strategic from "../Images/Strategic planning.png";
import Operational from "../Images/Operational Planning.png";
import { GetStartedwithUs } from "../Common_Components/GetStartedwithUs";
import planning from "../Images/Planning.png";
import Scheduling from "../Images/Scheduling (3).png";
import QuantitesTakeoff from "../Images/QuantitiesTakeOff.png";
import CostEstimation from "../Images/CostEstimation(1).png";
import { Helmet } from "react-helmet";

export const Planning = () => {
  const cardsArray = [
    {
      Title: "Cost Estimation",
      text: "Cost estimation is most important and useful technique to get to know what is the budget and time duration to complete entire project but it’s very hectic and time consuming task",
      src: CostEstimation,
      redirect: "/cost-estimating-services/",
    },
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
      redirect: "/Scheduling",
    },
    
  ];

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
  const paragraph2 = (
    <>
      <ul>
        <li>Budget cost estimate for financing purposes</li>
        <li>
          Budgeted cost after assigning to contractor but before construction.
        </li>
        <li>Estimated cost of completion during ongoing construction.</li>
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
      Owner's planners decide what projects to pursue and when to finish to meet
      goals, while construction teams create execution plans following their
      guidelines.{" "}
    </>
  );
  const text12 = (
    <>
      This involves the detailed planning required to meet the strategic
      objectives{" "}
    </>
  );

  return (
    <div>
      <Helmet>
          <title>
          Construction Planning - Procore Estimators
          </title>

          <meta
            name="description"
            content="Efficient construction planning with Procore Estimators. Accurate cost estimates for materials and labor to ensure your projects stay on track."
          />
        </Helmet>
      <PageNameContainer Pagename="Planning" src={Planningpic} />
      <div className="container">
        <p className="paragraph mt-5">
          In the world of project management, the first and crucial step is
          planning. This involves creating a detailed blueprint for the
          project's journey. Now, planning isn't the same as scheduling.
          Planning is like making a big map with the project managers and
          construction folks, while scheduling is like putting that map into a
          timeline with the help of scheduling experts. So, planning sets the
          direction, and scheduling makes sure everything happens at the right
          time.
        </p>
        <TwoBoxes
          title1="Design Estimators"
          title2="Control Estimates"
          paragraph1={paragraph1}
          paragraph2={paragraph2}
        />
        <CommonHeading text="Types of Planning" />
        <p className="paragraph">
          There are several types of project planning. The two major types of
          construction project planning are:
        </p>
        <div className="row w-100 m-0 justify-content-center">
          <div
            className="col-md-6 col-12"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Cards Title="Strategic planning" text={text1} src={Strategic} />
          </div>

          <div
            className="col-md-6 col-12"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Cards
              Title="Operational Planning"
              text={text12}
              src={Operational}
            />
          </div>
        </div>
        
      </div>
      <GetStartedwithUs />

        <div className=" text-center">
          <CommonHeading text="Our Services" />
        </div>
        <div>
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
      <Banner />
    </div>
  );
};
