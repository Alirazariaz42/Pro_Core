import React from "react";


import { HalfTextHalfImg } from "../Common_Components/HalfTextHalfImg";
import ComericalHTHI from "../Images/ComericalHTHI.webp";

import { GetStartedwithUs } from "../Common_Components/GetStartedwithUs";
import { LookAtTrades } from "../Common_Components/LookAtTrades";
import { Banner } from "../Common_Components/Banner";

import pagenamecontainerpic from "../Images/CommericalPNCpic.webp";
import { CommonHeading } from "../Common_Components/CommonHeading";
import { PageNameContainer } from "../Common_Components/PageNameContainer";
import { Helmet } from "react-helmet";

export const Commercial_Estimation = () => {
  
  const text = (
    <>
      Precise, streamlined, and expert commercial estimation services crafted
      for commercial general contractors, subcontractors, commercial area
      developers, financiers, architectural, engineering, and design companies.
      Commercial estimating necessitates comprehensive and profound technical
      expertise combined with accuracy and experience. We maintain that a
      precise estimate acts as a fundamental instrument for budget establishment
      and expense management during the entire project's duration.
    </>
  );
  return (
    <div>
      <Helmet>
          <title>
          Construction Estimators - Commercial Estimating Services
          </title>

          <meta
            name="description"
            content="Experienced construction cost estimators delivering precise commercial estimating services for General and sub-contractors."
          />
        </Helmet>
      <PageNameContainer
        Pagename="Commercial Estimating Services"
        src={pagenamecontainerpic}
      />
      <div className=" container">
        <HalfTextHalfImg text={text} src={ComericalHTHI} />
        <CommonHeading text="Our Commercial Cost Estimating Services" />
        <div className=" row mt-0 justify-content-center">
          <div
            className="col-md-4 col-12"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div>
              <ul className=" paragraph">
                <li>Commercial facilities</li>
                <li>Restaurants</li>
                <li>Retail spaces</li>
                <li>Airports</li>
                <li>Condominiums</li>
                <li>Educational facilities</li>
                <li>High Rise Buildings</li>
                <li>Shopping Centers</li>
              </ul>
            </div>
          </div>
          <div
            className="col-md-4 col-12"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div>
              <ul className=" paragraph">
                <li>Theaters & Museums</li>
                <li>Sports Auditoriums</li>
                <li>Exhibition Buildings</li>
                <li>Prisons & Police Stations</li>
                <li>Fire Stations</li>
                <li>Courts</li>
                <li>Office Buildings</li>
                <li>Warehouses</li>
              </ul>
            </div>
          </div>
          <div
            className="col-md-4 col-12"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div>
              <ul className=" paragraph">
                <li>Parking Garages</li>
                <li>Libraries</li>
                <li>Medical Facilities</li>
                <li>Hotels & Motels</li>
                <li>Airport Facilities</li>
                <li>Bus & Subway Facilities</li>
              </ul>
            </div>
          </div>
        </div>
        <CommonHeading text="For Commercial Architects & Designers" />
        <CommonHeading text="Design-Phase Estimates" />
        <p className=" paragraph mb-4">
          Our estimating team thoroughly engages with architects and designers
          involved with commercial projects providing cost evaluations for
          various design alternatives throughout the design phase. This aids the
          design team to analyze and customize the design parameters according
          to their client’s budget limits avoiding additional costs or overruns
          at a later stage. Our design phase estimates include the conceptual,
          schematic design, design development, and construction document
          estimates. We also provide a review of drawings and specifications for
          errors, exclusions, and trade consistency.
        </p>
        <CommonHeading text="Budget Creation" />
        <p className=" paragraph">
          Budget planning is central to Architects & Designers during a
          project's design phase. We assist Commercial Architects and Designers
          in formulating budgets by allowing you to submit your design
          development and schematic sketches, enabling us to generate cost
          approximations during the design development stage.
        </p>
      </div>
      <GetStartedwithUs />
      <div className="container">
        <LookAtTrades />
      </div>
      <Banner />
    </div>
  );
};
