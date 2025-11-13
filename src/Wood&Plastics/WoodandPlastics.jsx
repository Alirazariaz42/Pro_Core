import React from "react";
import { PageNameContainer } from "../Common_Components/PageNameContainer";
import pagenamecontainerpic from "../Images/Wood&PlasticPNCpic.webp";


import WoodPlasticHTHI from "../Images/Wood&PlasticHTHI.webp";

import { GetStartedwithUs } from "../Common_Components/GetStartedwithUs";
import { LookAtTrades } from "../Common_Components/LookAtTrades";
import { Banner } from "../Common_Components/Banner";
import { CommonHeading } from "../Common_Components/CommonHeading";
import { HalfTextHalfImg } from "../Common_Components/HalfTextHalfImg";
import { Helmet } from "react-helmet";

export const WoodandPlastics = () => {

  const text = (
    <>
      <h4 style={{ color: "#FF7518" }}>1. Lumber and Timber:</h4>
      <ul>
        <li>
          Breakdown of various types of wood (softwood, hardwood) and grades.
        </li>
        <li>Cost estimates for different dimensions and lengths of lumber.</li>
        <li>Information on sustainable sourcing and eco-friendly options.</li>
      </ul>
      <h4 style={{ color: "#FF7518" }}>2. Plywood and Panels:</h4>
      <ul>
        <li>List of plywood, particleboard, and MDF panels.</li>
        <li>Estimation of costs based on panel type and thickness.</li>
        <li>
          Consideration of specialized panels like fire-resistant or
          moisture-resistant.
        </li>
      </ul>
      <h4 style={{ color: "#FF7518" }}>3. Finished Wood Products:</h4>
      <ul>
        <li>
          Data on finished wood products like doors, windows, and moldings.
        </li>
        <li>Estimation of costs for standard and custom woodwork.</li>
        <li>
          Labor estimates for installation, including trimming and finishing.
        </li>
      </ul>
    </>
  );
  return (
    <div>
      <Helmet>
          <title>
          Wood-Plastic Composites Estimating & Takeoff Services
          </title>

          <meta
            name="description"
            content="Procore Estimators: Specialized wood & plastic composites estimating for contractors, ensuring accurate project evaluations and streamlined planning."
          />
        </Helmet>
      <PageNameContainer
        Pagename="Wood and Plastics Estimation"
        src={pagenamecontainerpic}
      />
      <div className="container">
        <p className="paragraph mb-4 mt-4">
          Wood & plastic composites estimating and takeoff comprises work
          includes rough carpentry, decking, sheathing, paneling, plastic
          fabrications and wood veneers. The Contactors comes to Procore
          Estimators for quantity material and labor takeoff of all the items
          involved in the scope of work.
        </p>
        <CommonHeading text="Wood Material and Products" />
        <HalfTextHalfImg text={text} src={WoodPlasticHTHI} />
        <CommonHeading text="Our Lumber takeoff clients are" />
        <p className="paragraph">
          Our professionals at Nedes Estimating are experienced in lumber
          takeoff. Having extensive industry knowledge, our estimators know how
          to deliver the best and most accurate services for your construction
          projects. Our portfolio comprises hundreds of happy clients in all
          construction fields. We offer these Services to multiple clients,
          which are as follows.
          <ul>
            <li>Developers</li>
            <li>Framing Contractors</li>
            <li>General Contractors</li>
            <li>Carpenters</li>
            <li>Lumberyards</li>
            <li>Lumber Retailers</li>
            <li>Lumber Wholesale Supply Companies</li>
            <li>Architects/Designers</li>
          </ul>
        </p>
        <CommonHeading text="We offer Lumber Takeoff service to our Clients" />
        <div className="row w-100 justify-content-center m-0">
          <div className="col-md-6 col-12 ">
            <ul className="paragraph">
              <li>Budget Estimates</li>
              <li>Preliminary Estimates</li>
              <li>Bid Estimates</li>
              <li>Bidding Assistance</li>
              <li>Subcontractors Marketing</li>
              <li>Project Lead Generation</li>
              <li>Framing Takeoff</li>
            </ul>
          </div>
          <div className="col-md-6 col-12">
            <ul className="paragraph">
              <li>Umber Cut Lists</li>
              <li>Change Orders</li>
              <li>Value Engineering</li>
              <li>Lumber Cut List</li>
              <li>Marked up drawing plans</li>
              <li>Labor and material costs</li>
              <li>Lumber takeoff EXCEL sheets</li>
            </ul>
          </div>
        </div>
        <CommonHeading text="Benefits of Services" />
        <p className="paragraph">
          Our estimation service offers numerous benefits that make us the
          perfect planning partner. Our comprehensive and precise estimation
          data gives you the power to plan projects with confidence. With our
          data, you can allocate resources efficiently, optimize budgets, and
          avoid unexpected expenses. Whether you are a contractor, project
          manager, or architect, our service provides you with valuable insights
          to make informed decisions, streamline processes, and ensure project
          success.
          <br /> <br />
          Our estimation service offers numerous benefits that make us the
          perfect planning partner. Our comprehensive and precise estimation
          data gives you the power to plan projects with confidence. With our
          data, you can allocate resources efficiently, optimize budgets, and
          avoid unexpected expenses. Whether you are a contractor, project
          manager, or architect, our service provides you with valuable insights
          to make informed decisions, streamline processes, and ensure project
          success.
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
