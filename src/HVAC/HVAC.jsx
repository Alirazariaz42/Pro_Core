import React from "react";

import { HalfTextHalfImg } from "../Common_Components/HalfTextHalfImg";
import HVACHTHI from "../Images/HVACHTHI.webp";
import HVACHTHI2 from "../Images/HVACHTHI2.webp";
import { GetStartedwithUs } from "../Common_Components/GetStartedwithUs";
import { LookAtTrades } from "../Common_Components/LookAtTrades";
import { Banner } from "../Common_Components/Banner";
import pagenamecontainerpic from "../Images/HVACPNCPic.webp";
import { CommonHeading } from "../Common_Components/CommonHeading";
import { PageNameContainer } from "../Common_Components/PageNameContainer";
import { Helmet } from "react-helmet";
export const HVAC = () => {
  
  const text = (
    <>
      Heating, Ventilation, and Air-Conditioning professionals turn to us for
      their HVAC Cost estimation needs. Our MEP estimators, who are experts in
      HVAC calculations, assess ducts, hangers, elbows, and fixtures, as well as
      condensing and evaporating units. These specialized professionals prepare
      markup plans with comprehensive line item descriptions. The provided shop
      drawings serve fabricators, sheet metal contractors, and facilitate clear
      comprehension. We believe that the more understanding a contractor gains,
      the more effectively our construction estimation services fulfill their
      purpose.
    </>
  );
  const text2 = (
    <>
      <ul className=" paragraph">
        <li>Takeoff report in the shape of excel spreadsheet</li>
        <li>Material cost and labour cost</li>
        <li>Fixture tools</li>
        <li>Total labour count</li>
        <li>A colour-coded drawing plan</li>
        <li>Review of the bid</li>
        <li>Overall takeoff summary report</li>
      </ul>
    </>
  );
  return (
    <div>
      <Helmet>
          <title>
          HVAC Estimating Services - Procore Estimators
          </title>

          <meta
            name="description"
            content="Bid confidently! Get accurate and fast HVAC estimating services. Affordable quotes and quick turnarounds. Request your free quote now."
          />
        </Helmet>
      <PageNameContainer Pagename="HVAC" src={pagenamecontainerpic} />

      <div className=" container mt-4">
        <HalfTextHalfImg text={text} src={HVACHTHI} />
        <CommonHeading text="Our HVAC Cost Estimating Services" />
        <p className=" paragraph">
          We are providing the HVAC estimation and takeoff services. All these
          are listed below.
        </p>
        <div className=" row mt-0 justify-content-center">
          <div
            className="col-md-6 col-12"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div>
              <ul className=" paragraph">
                <li>Condensing</li>
                <li>Ductwork</li>
                <li>Casings</li>
                <li>Duct insulation</li>
                <li>Exhaust Fan estimating cost</li>
              </ul>
            </div>
          </div>
          <div
            className="col-md-6 col-12"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div>
              <ul className=" paragraph">
                <li>Pumps estimates</li>
                <li>Piping estimating services</li>
                <li>Hangers and Supports</li>
                <li>Building Automation and control</li>
              </ul>
            </div>
          </div>
        </div>
        <CommonHeading text="Flexibility To Handle All Types & Sizes Of HVAC Cost Estimates" />
        <HalfTextHalfImg text={text2} src={HVACHTHI2} />
        <CommonHeading text="Details Of Our HVAC Estimate Package" />
        <div className=" row mt-0 justify-content-center">
          <div
            className="col-md-6 col-12"
          
          >
            <div>
              <ul className=" paragraph">
                <li>Smart HVAC Systems</li>
                <li>Sustainable Building Design</li>
                <li>DeVAP HVAC Systems</li>
                <li>Solar HVAC Systems</li>
                <li>Geothermal HVAC Systems</li>
                <li>BAS (Building Automation System)</li>
                <li>BMS (Building Management System)</li>
                <li>Refrigeration Systems</li>
                <li>Heating & Air Conditioning</li>
                <li>Ventilation</li>
                <li>Hybrid Heat Systems</li>
                <li>Gas Systems</li>
                <li>Exhaust Systems</li>
              </ul>
            </div>
          </div>
          <div
            className="col-md-6 col-12"
           
          >
            <div>
              <ul className=" paragraph">
                <li>High Purity Water Systems</li>
                <li>Air Purification Systems</li>
                <li>Humidification Systems</li>
                <li>Boiler & Heating Plants</li>
                <li>Chilled & condenser water plants</li>
                <li>Heat Recovery Systems</li>
                <li>Variable Air Volume Systems</li>
                <li>Hydronic Heating & Cooling Systems</li>
                <li>Steam Heating Systems</li>
                <li>Clean Room Systems</li>
                <li>Heat Pump Systems</li>
                <li>Combined Heat & Power Systems</li>
                <li>Energy Management Control Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <GetStartedwithUs />
      <div className="container">
        <LookAtTrades  />
      </div>
      <Banner />
    </div>
  );
};
