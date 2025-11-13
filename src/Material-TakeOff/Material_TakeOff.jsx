import React from "react";
import { PageNameContainer } from "../Common_Components/PageNameContainer";
import MaterialTakeOff from "../Images/Quantities & Material Takeoff  .png";
import Service1 from "../Images/Service1.png";
import Service2 from "../Images/Service2.png";
import Service3 from "../Images/Service3.png";
import Service4 from "../Images/Service4.png";
import { Banner } from "../Common_Components/Banner";
import { LookAtTrades } from "../Common_Components/LookAtTrades";
import { TwoBoxes } from "../Common_Components/TwoBoxes";
import { CommonHeading } from "../Common_Components/CommonHeading";
import serviceAreapic from "../Images/ServiceArea.png";
import { HalfTextHalfImg } from "../Common_Components/HalfTextHalfImg";
import { GetStartedwithUs } from "../Common_Components/GetStartedwithUs";

import planning from "../Images/Planning.png";
import Scheduling from "../Images/Scheduling (3).png";
import QuantitesTakeoff from "../Images/QuantitiesTakeOff.png";
import CostEstimation from "../Images/CostEstimation(1).png";

import { Cards } from "../Common_Components/Cards";
import { Helmet } from "react-helmet";


export const Material_TakeOff = () => {
  const cardsArray = [
    {
      Title: "Cost Estimation",
      text: "Cost estimation is most important and useful technique to get to know what is the budget and time duration to complete entire project but it’s very hectic and time consuming task",
      src: CostEstimation,
      redirect: "/cost-estimating-services/",
    },
    // {
    //   Title: "Quantities & Material Takeoff",
    //   text: "Our experts are always here to help you to fill the gaps which exits in the initial phases of the proposed solution especially when we talk about Quantities and Material Takeoff. ",
    //   src: QuantitesTakeoff,
    //   redirect: "/Material-TakeOff",
    // },
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

  const TradeData = [
    { ServiceName: "General Requirement", imgSrc: Service1, redirectTo: "/" },
    { ServiceName: "Site Works", imgSrc: Service2, redirectTo: "/" },
    { ServiceName: "Concrete", imgSrc: Service3, redirectTo: "/" },
    { ServiceName: "Masonry", imgSrc: Service4, redirectTo: "/" },
  ];
  const paragraph1 = (
    <>
      Our team provides high quality takeoff services to many construction
      companies. Our experienced team, equipped with the latest technologies and
      tools, provides fast and accurate quantity takeoff numbers for labor and
      material. Even on short notice, we can provide many takeoff services
      within 24 hours.{" "}
    </>
  );
  const paragraph2 = (
    <>
      Our material takeoff services are here to help you plan your project
      budget effectively. By hiring us, you can work efficiently and save time.
      We provide detailed records of expected prices and quantities of supplies
      needed for your project, allowing you to submit competitive bids and start
      working faster. Planning ahead with accurate quantity takeoffs will save
      you time and money by ensuring you have everything you need.{" "}
    </>
  );
  const serviceAreatext = (
    <>
      We have clients that have construction projects being built in many parts
      of the country. So no matter where you are located or the project you are
      bidding, we provide Estimating services all over the United States. We
      specialize in material takeoffs and quantity surveys for both labor and
      materials and for most construction trades. One of our construction
      Estimators will quantify from the blueprints, all the materials and
      accessories needed for your trade. It will be in Microsoft Excel or Adobe
      , in the format you need, so you can send it out to bid quickly. We can
      quantify building materials faster and more accurate than most Estimators.
      We calculate every material item required to build any size construction
      project. Our Estimator will list the items by location as well. Your
      superintendents and sub-contractors benefit from this because it helps
      them identify easily where every item goes.
    </>
  );
  return (
    <div>
      <Helmet>
          <title>
          Quantities & Material Takeoff Services- Procore Estimators
          </title>

          <meta
            name="description"
            content="Accurate quantities & materials takeoff for construction projects at Procore Estimators. Get detailed estimates today."
          />
        </Helmet>
      <PageNameContainer
        Pagename="Quantities & Material Takeoff"
        src={MaterialTakeOff}
      />
      <div className="container">
        <p className="paragraph mt-4">
          <span style={{color:"#FF7518", fontWeight:"700"}}>Procore Estimators</span> have experience takeoff estimators who has the
          skills and knowledge to provide you services from beginning to end.
          More profit margin dollars can be lost by mistakes in the framing
          materials order than in any other part of the process. That is why,
          after evaluating many software packages, we purchased a full-featured
          system that allows us to tailor our Material Estimates to local
          practices.
        </p>
        <TwoBoxes
          title1="Quantities Takeoff"
          title2="Material Takeoff"
          paragraph1={paragraph1}
          paragraph2={paragraph2}
        />
        <CommonHeading text="Service Area" />
        <HalfTextHalfImg text={serviceAreatext} src={serviceAreapic} />
        <CommonHeading text="We Provide Quantity Takeoff Services To Our Clients In All CSI Divisions:"/>
        <div className=" row w-100 m-0 justify-content-center">
          <div className="col-md-6 col-12" style={{display:"flex", justifyContent:"center"}}>
            <div>
              <ul className=" paragraph">
                <li>Site Work Takeoff</li>
                <li>Masonry Takeoff</li>
                <li>Concrete Takeoff</li>
                <li>Drywall Takeoff</li>
                <li>Painting Takeoff</li>
                <li>Insulation Takeoff</li>
                <li>Roofing Takeoff</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-12" style={{display:"flex", justifyContent:"center"}}>
            <div>
              <ul className=" paragraph">
                <li>Lumber Takeoff</li>
                <li>Millwork Takeoff</li>
                <li>Cabinet Takeoff</li>
                <li>Mechanical Takeoff</li>
                <li>HVAC Takeoff</li>
                <li>Plumbing Takeoff</li>
                <li>Electrical Takeoff</li>
              </ul>
            </div>
          </div>

        </div>
       
      </div>
      <GetStartedwithUs/>
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
      <div>
        <Banner />
      </div>
    </div>
  );
};
