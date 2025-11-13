import React from "react";
import SchedulingPic from "../Images/SchedulingHeading .png";
import { PageNameContainer } from "../Common_Components/PageNameContainer";
import { CommonHeading } from "../Common_Components/CommonHeading";
import { HalfTextHalfImg } from "../Common_Components/HalfTextHalfImg";
import SchedulingHTHI from "../Images/SchedulingHTHI.png";
import { ThreeBoxes } from "../Common_Components/ThreeBoxes";
import { LookAtTrades } from "../Common_Components/LookAtTrades";
import Service1 from "../Images/Service1.png";
import Service2 from "../Images/Service2.png";
import Service3 from "../Images/Service3.png";
import Service4 from "../Images/Service4.png";
import { Banner } from "../Common_Components/Banner";
import { GetStartedwithUs } from "../Common_Components/GetStartedwithUs";

import planning from "../Images/Planning.png";
import QuantitesTakeoff from "../Images/QuantitiesTakeOff.png";
import CostEstimation from "../Images/CostEstimation(1).png";

import { Cards } from "../Common_Components/Cards";
import { Helmet } from "react-helmet";

export const Scheduling = () => {
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
    // {
    //   Title: " Scheduling ",
    //   text: "Scheduling transforms a project's high-level plan into a time-focused schedule, considering task durations, priorities, dependencies, resource availability, and deadlines, while acknowledging real-world constraints that can impact execution.",
    //   src: Scheduling,
    //   redirect: "/Scheduling",
    // },
    {
      Title: "Planning",
      text: "In project management, planning establishes the project's roadmap, while scheduling aligns that roadmap with a timeline for timely execution.",
      src: planning,
      redirect: "/planning/",
    },
  ];
  const text1 = (
    <>
      While creating a project schedule, data is gathered from multiple sources.
      Submission guidelines stem from the specifications and additional
      contractual materials. Installation processes and interactions are
      ascertained from the estimate and contract papers. Workforce allocation,
      timeframes, and cost-related details for the schedule are extracted from
      the estimation. Furthermore, the project's management and supervisory
      staff contribute to the schedule development process.
    </>
  );
  const paragraph1 = (
    <>
      <ul>
        <li>
          Planning Schedule for Owners, Developers and Design Professionals.
        </li>
        <li>Bid Schedule and “What-If” Study.</li>
        <li>Contract Required CPM Schedule with Cost and Resource Loading.</li>
      </ul>
    </>
  );
  const paragraph2 = (
    <>
      {" "}
      <ul>
        <li>Contractor Schedule Update and Progress Report.</li>
        <li>Comparison of Actual versus Planned Production Graphics.</li>
      </ul>
    </>
  );

  const paragraph3 = (
    <>
      {" "}
      <ul>
        <li>
          Early discovery and assessment of items that critically impact your
          schedule.
        </li>
        <li>
          Ability to maximize time recoveries and reduce the cost impact of
          slippage.
        </li>
      </ul>
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
          <title>
          Efficient Project Scheduling - Procore Estimators
          </title>

          <meta
            name="description"
            content="Optimize project timelines with Procore Estimators. Our efficient project scheduling solutions ensure timely completion and successful project outcomes."
          />
        </Helmet>
      <PageNameContainer Pagename="Scheduling" src={SchedulingPic} />
      <div className="container">
        <p className="paragraph mt-5">
          A schedule is the process by which a general or outline project plan
          is transformed into a time-based schedule based on the duration,
          significance, external order relationships, resource availability, and
          target dates of the project. It may influence the execution of the
          plan to recognize realistic time and resource constraints.
        </p>
        <CommonHeading text="Maintaining" />
        <HalfTextHalfImg text={text1} src={SchedulingHTHI} />
        <ThreeBoxes
          title1="Project Planning Schedules"
          title2="Progress Schedule Updates & Monitoring"
          title3="Benefits We Deliver To You"
          paragraph1={paragraph1}
          paragraph2={paragraph2}
          paragraph3={paragraph3}
        />
        <CommonHeading text="SCHEDULING SOFTWARE" />
        <p className=" paragraph">
          Our expert team is proficient in developing and monitoring schedules
          with the following construction consulting software:
          <ul>
            <li>Microsoft Project</li>
            <li>Primavera P6</li>
           
          </ul>
        </p>
     
      </div>
      <GetStartedwithUs />
        <div className=" text-center">
         <CommonHeading text="Our Services" />
         </div>
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
      <Banner />
    </div>
  );
};
