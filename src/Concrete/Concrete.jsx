import React from "react";
import { PageNameContainer } from "../Common_Components/PageNameContainer";
import ConcreteEstimationPic from "../Images/Concrete EstimationPic.webp";
import { CommonHeading } from "../Common_Components/CommonHeading";
import { HalfTextHalfImg } from "../Common_Components/HalfTextHalfImg";
import ConcreteHTHI from "../Images/ConcreteHTHI.webp";
import { Banner } from "../Common_Components/Banner";

import Service1 from "../Images/Service1.webp";
import Service2 from "../Images/Service2.webp";
import Service3 from "../Images/Service3.webp";
import Service4 from "../Images/Service4.webp";
import { LookAtTrades } from "../Common_Components/LookAtTrades";
import {GetStartedwithUs} from '../Common_Components/GetStartedwithUs'
import { LookAtTradesTwo } from "../Common_Components/LookAtTradesTwo";
import { Helmet } from "react-helmet";


export const Concrete = () => {
  const text = (
    <>
      <ul>
        <li>Concrete Quantity Takeoffs</li>
        <li>Budget & Bid Estimates</li>
        <li>Bid Preparation</li>
        <li>Design Estimates</li>
        <li>Change Order Estimates</li>
        <li>Value Engineering</li>
        <li>Project Lead Generation</li>
        <li>Concrete Contractor Marketing</li>
        <li>Expert Witness</li>
        <li>Litigation Assistance</li>
      </ul>
    </>
  );
  const text2 = (
    <>
      <ul style={{fontSize:"19px"}}>
        <li>
          The amount of concrete required for slabs, piers, footings, headers,
          grade beams, tie beams, foundation walls, columns, lintels, platforms,
          steps, etc. It also includes the estimate of transportation costs as
          well as the equipment required eg cranes, pumps, mixers, etc.
        </li>
        <li>
          The costs for concrete formwork. It depends on the type of formwork,
          whether you buy or rent, repairs, equipment associated, transportation
          costs, labor, etc.
        </li>
        <li>
          Concrete reinforcements including structural rebar, wire mesh, plastic
          mesh, stirrups, dowels, anchors, etc.{" "}
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
          Concrete Estimating Services - Procore Estimators
          </title>

          <meta
            name="description"
            content="Accurate concrete estimating services by The Procore Estimators. Plan your projects effectively with detailed material and labor estimates."
          />
        </Helmet>
      <PageNameContainer
        Pagename="Concrete Estimation"
        src={ConcreteEstimationPic}
      />
      <div className="container">
        <p className="paragraph mt-4 mb-4">
          To assist builders, contractors, and homeowners in evaluating the cost
          of their concrete projects, we offer concrete estimating services. All
          labor and material costs associated with finishing the construction
          are taken into account in our full concrete estimate process. Our team
          of concrete cost estimators is up to date on current market prices and
          trends. They offer precise and trustworthy concrete cost estimates
          using cutting-edge technologies and techniques.
        </p>
        <CommonHeading text="The Range of Concrete Estimating Service" />
        <HalfTextHalfImg text={text} src={ConcreteHTHI} />
        <CommonHeading text="Our Estimation Process" />
        <p className="paragraph">
          {" "}
          The concrete estimation process starts with a thorough study of plans
          submitted by the client to identify the scope of work. After that, an
          on-screen takeoff is performed using digital software like Bluebeam,
          Planswift and On Screen Takeoff (OST) etc. The quantities are imported
          to EXCEL spreadsheets mentioned with detailed line item descriptions.
        </p>
        <h5 className="fw-bold">
          Our concrete takeoff spreadsheet comprises the breakdown of all the
          following quantities:
        </h5>
        <div>
            {text2}
        </div>
        
      </div>

      <GetStartedwithUs />
      
      <div className="container">
      <LookAtTradesTwo/>
      </div>
      <Banner/>
    </div>
  );
};
