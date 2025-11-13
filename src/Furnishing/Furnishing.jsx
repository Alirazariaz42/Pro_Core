import React from "react";
import { GetStartedwithUs } from "../Common_Components/GetStartedwithUs";
import { LookAtTrades } from "../Common_Components/LookAtTrades";
import { Banner } from "../Common_Components/Banner";

import { PageNameContainer } from "../Common_Components/PageNameContainer";
import pagenamecontainerpic from "../Images/FurnishingPNCpic.webp";
import { CommonHeading } from "../Common_Components/CommonHeading";
import FurnishingHTHI from "../Images/FurnishingHTHI.webp";
import { HalfTextHalfImg } from "../Common_Components/HalfTextHalfImg";
import { Helmet } from "react-helmet";
export const Furnishing = () => {
  
  const text = (
    <>
      <ul>
        <li>
          <b>Expertise: </b>Our group is comprised of seasoned experts
          possessing profound knowledge in construction and interior design,
          guaranteeing precise and thorough estimates.{" "}
        </li>
        <li>
          <b>Customized Solutions: </b> We adapt our estimates to address the
          unique requirements and desires of each project, considering elements
          like style, practicality, and financial limitations.
        </li>
        <li>
          <b>Comprehensive Database:</b> We uphold an expansive database of
          furnishings, presenting a vast array of choices in various styles,
          materials, and cost categories.
        </li>
        <li>
          <b>Cost-Efficient Selections: </b> We endeavor to offer
          budget-friendly alternatives without sacrificing quality, enabling you
          to attain a luxurious appearance within your means.
        </li>
      </ul>
    </>
  );
  const text2 = (
    <>
      At  <span style={{ color: "#FF7518", fontWeight: "700" }}>
            {" "}
            PROCORE Estimators
          </span>, our goal is to offer precise material takeoffs and
      pricing estimations for flooring contractors, flooring installation firms,
      carpet mills, architects, designers, and manufacturers. Our remarkably
      exact flooring estimation solutions are customized to reduce waste while
      considering all patterns, inlays, and design components.
    </>
  );
  return (
    <div>
      <Helmet>
          <title>
          Best Furnishings Estimating Services
          </title>

          <meta
            name="description"
            content="Accurate cost estimates for furnishings by Procore Estimators. Plan your project budget with confidence. Get started today."
          />
        </Helmet>
      <PageNameContainer
        Pagename="Furnishings Estimation"
        src={pagenamecontainerpic}
      />
      <div className=" container">
        <p className=" paragraph mt-4 mb-4">
          At{" "}
          <span style={{ color: "#FF7518", fontWeight: "700" }}>
            {" "}
            PROCORE Estimators
          </span>
          , we recognize the importance of choosing the appropriate furniture
          for your building project in order to establish an efficient and
          visually attractive ambiance. Our Furnishings Estimation Service is
          crafted to aid you in precisely projecting the expense and amount of
          furniture needed for your endeavor, guaranteeing that your concept
          materializes within the allocated funds.
        </p>
        <CommonHeading text="Why Choose Us?" />
        <p className=" paragraph">{text}</p>
        <CommonHeading text="Home furnishing estimation services" />
        <HalfTextHalfImg text={text2} src={FurnishingHTHI
        }/>
      </div>

      <GetStartedwithUs />
      <div className="container">
        <LookAtTrades  />
      </div>
      <Banner />
    </div>
  );
};
