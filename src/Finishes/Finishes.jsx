import React from "react";

import { GetStartedwithUs } from "../Common_Components/GetStartedwithUs";
import { LookAtTrades } from "../Common_Components/LookAtTrades";
import { Banner } from "../Common_Components/Banner";
import { PageNameContainer } from "../Common_Components/PageNameContainer";
import pagenamecontainerpic from "../Images/FinishesPNCpic.png";
import FinishesHTHI from "../Images/FinishesHTHI.webp";
import FinishesHTHI2 from "../Images/FinishesHTHI2.webp";
import FinishesHTHI3 from "../Images/FinishesHTHI3.webp";
import { CommonHeading } from "../Common_Components/CommonHeading";
import { HalfTextHalfImg } from "../Common_Components/HalfTextHalfImg";
import { Helmet } from "react-helmet";

export const Finishes = () => {
  const text = (
    <>
      <ul className="">
        <li>Material Takeoffs</li>
        <li>Flooring Estimates</li>
        <li>Painting Estimates</li>
        <li>Ceiling Estimates</li>
        <li>Drywall Estimates</li>
        <li>Stucco Estimates</li>
        <li>Bid Estimate</li>
        <li>Bid Reviews</li>
        <li>Budget Estimate</li>
        <li>Change Order Estimate</li>
        <li>Project Lead Generation</li>
        <li>Subcontractor Marketing</li>
      </ul>
    </>
  );
  const text2 = (
    <>
      <ul>
        <li>VCT Tiles</li>
        <li>LVT Tiles</li>
        <li>Carpet</li>
        <li>Wood Flooring</li>
        <li>Rubber Flooring</li>
        <li>Epoxy Flooring</li>
        <li>Concretes Flooring</li>
        <li>Stone Flooring</li>
        <li>Laminate Floor</li>
        <li>Transition Strips</li>
      </ul>
    </>
  );
  const text3 = (
    <>
      <ul>
        <li>Gypsum Boards</li>
        <li>Ceilings made of gypsum board</li>
        <li>Insulation</li>
        <li>Studs made of metal and wood</li>
        <li>Studs’ Tracks</li>
        <li>Taping Drywall</li> <li>Mudding Drywall</li>
        <li>Nails</li>
      </ul>
    </>
  );
 
  return (
    <div>
      <Helmet>
          <title>
          Professional - Interior & Exterior Finishes Estimating Services
          </title>

          <meta
            name="description"
            content="The Procore Estimators provides interior & exterior finishes cost estimating services for residential and commercial contractors globally."
          />
        </Helmet>
      <PageNameContainer
        Pagename="Finishes Estimation"
        src={pagenamecontainerpic}
      />
      <div className=" container">
        <p className=" paragraph mt-4 mb-4">
          {" "}
          Estimations for interior and exterior finishes play a crucial role in
          constructing structures. Assessing costs for painting, stucco,
          plaster, and specialized coatings is vital for contractors to secure
          projects and offer accurate pricing to clients. Typically, they
          require bid and material takeoffs for procuring and ordering
          materials.
        </p>
        <CommonHeading text="The Range of Finishes Estimating Service" />
        <HalfTextHalfImg text={text} src={FinishesHTHI} />
        <CommonHeading text="Flooring Estimation Service" />
        <p className=" paragraph">
          At{" "}
          <span style={{ color: "#FF7518", fontWeight: "700" }}>
            {" "}
            PROCORE Estimators
          </span>
          , our objective is to provide accurate material calculations and cost
          estimates for flooring contractors, floor installation companies,
          carpet mills, architects, designers, and manufacturers. Our
          impressively precise flooring estimation services are tailored to
          minimize waste while taking into account all patterns, inlays, and
          design elements.
        </p>
        <CommonHeading text="Flooring estimates service we are Providing" />
        <HalfTextHalfImg text={text2} src={FinishesHTHI2} />
        <CommonHeading text="Drywall Estimation Service" />
        <p className=" paragraph">
          <span style={{ color: "#FF7518", fontWeight: "700" }}>
            {" "}
            PROCORE Estimators
          </span>{" "}
          can give you lots of specific and comprehensive drywall estimating
          services. If you’re looking for a drywall cost estimator, look no
          further. When preparing drywall takeoff estimates, you must consider a
          multitude of elements including drywall mud, repair work, construction
          costs, sheetrock measurements, and much more.
        </p>
        <CommonHeading text="List of Dry Wall Estimating service" />
        <HalfTextHalfImg text={text3} src={FinishesHTHI3} />
      </div>
      <GetStartedwithUs />
      <div className="container">
        <LookAtTrades  />
      </div>
      <Banner />
    </div>
  );
};
