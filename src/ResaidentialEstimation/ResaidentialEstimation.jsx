import React from "react";


import { GetStartedwithUs } from "../Common_Components/GetStartedwithUs";
import { LookAtTrades } from "../Common_Components/LookAtTrades";
import { Banner } from "../Common_Components/Banner";

import pagenamecontainerpic from "../Images/ResidentPNCpic.webp";
import { CommonHeading } from "../Common_Components/CommonHeading";
import { PageNameContainer } from "../Common_Components/PageNameContainer";
import { Helmet } from "react-helmet";

export const ResaidentialEstimation = () => {
 
  return (
    <div>
      <Helmet>
          <title>
          Residential Estimating Services - Top Estimating Company
          </title>

          <meta
            name="description"
            content="Procore Estimators, your trusted partner for precise residential estimating services, providing accuracy at a budget-friendly cost."
          />
        </Helmet>
      <PageNameContainer
        Pagename="Residential Estimating Services"
        src={pagenamecontainerpic}
      />
      <div className=" container">
        <p className=" paragraph mt-4">
          Providing fast response times and dependable options in home
          estimation services customized for the unique requirements of
          Residential Contractors, Subcontractors, Homebuilders, Homeowners,
          Developers, Investors, Lenders, and Architects.
        </p>
        <CommonHeading text="Our Range Resenditial Estimating Services" />
        <div className=" row mt-0 justify-content-center">
          <div
            className="col-md-6 col-12"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div>
              <ul className=" paragraph">
                <li>Single-Family Residential Houses</li>
                <li>Multi-Family Residential Houses</li>
                <li>Duplex/Triplex Houses</li>
                <li>Custom homes</li>
                <li>Modular homes</li>
                <li>Apartments</li>
                <li>Bungalows</li>
              </ul>
            </div>
          </div>
          <div
            className="col-md-6 col-12"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div>
              <ul className=" paragraph">
                <li>Townhouses</li>
                <li>Mansions</li>
                <li>Condominium</li>
                <li>Home additions</li>
                <li>Home Improvements</li>
                <li>Remodeling</li>
              </ul>
            </div>
          </div>
        </div>
        <CommonHeading text="Detailed Accurate Residential Bid Estimates" />
        <p className=" paragraph">
          As we have been committed to providing Residential Estimates to the
          Construction industry for so long, our residential estimators and
          Engineers takeoff quantities of material, labor, and man-hours. Our
          relations with the local vendors, we employ the up to date pricing to
          achieve the right estimate. Our services include:
          <ul>
            <li>Accurate and quick bid estimates with marked-up plans</li>
            <li>Assistance on smartly filing bids</li>
            <li>Bidding network profile management</li>
            <li>New project lead generation</li>
            <li>Subcontractor marketing</li>
          </ul>
        </p>
        <CommonHeading text="New Construction Residential Estimates" />
        <p className=" paragraph">
          From modest three-family homes to intricate apartment complexes, our
          skilled estimators possess immense knowledge to detail materials,
          labor, and generate precise residential estimates through our
          residential estimating services. Our familiarity with residential
          construction and expertise in software enables us to swiftly perform
          quantity takeoffs and prepare quotes for you, allowing you to focus on
          your day-to-day site tasks. We proudly serve residential contractors
          across all 50 states and specialize in new construction.
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
