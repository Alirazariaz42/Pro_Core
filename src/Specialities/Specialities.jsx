import React from "react";
import { GetStartedwithUs } from "../Common_Components/GetStartedwithUs";
import { LookAtTrades } from "../Common_Components/LookAtTrades";
import { Banner } from "../Common_Components/Banner";
import pagenamecontainerpic from "../Images/SpecialitiesPNCpic.webp";
import { CommonHeading } from "../Common_Components/CommonHeading";
import { HalfTextHalfImg } from "../Common_Components/HalfTextHalfImg";
import SpecilitiesHTHI from "../Images/SpecilitiesHTHI.webp";

import { PageNameContainer } from "../Common_Components/PageNameContainer";
import { Helmet } from "react-helmet";

export const Specialities = () => {
  
  const text = (
    <>
      Our estimating company ’s expertise lies in delivering precise and
      comprehensive assessments for specialized aspects of construction
      endeavors. Our dedicated team of professionals is devoted to assisting you
      in choosing and allocating resources for the distinctive features that
      augment the practicality and individuality of your undertaking.
    </>
  );
  return (
    <div>
      <Helmet>
          <title>
          Procore Estimators: Specialized Construction Cost Estimating
          </title>

          <meta
            name="description"
            content="Explore Procore Estimators specialized construction estimating services. Accurate and efficient material takeoffs for your construction projects. Get a quote."
          />
        </Helmet>
      <PageNameContainer Pagename="Specialties" src={pagenamecontainerpic} />
      <div className=" container mt-4">
        <HalfTextHalfImg text={text} src={SpecilitiesHTHI} />
        <CommonHeading text="Our Specialties Cost Estimation Process" />
        <div>
          <p className=" paragraph">
            {" "}
            <span
              style={{
                color: "#FF7518",
                fontWeight: "700",
                marginRight: "10px",
              }}
            >
              Initial Meeting:
            </span>
            We begin by discussing your project objectives, design preferences,
            and budget limitations. This enables us to comprehend the distinct
            requirements and vision of your construction project.
          </p>
          <p className=" paragraph">
            {" "}
            <span
              style={{
                color: "#FF7518",
                fontWeight: "700",
                marginRight: "10px",
              }}
            >
              Site Assessment:
            </span>
            If needed, we conduct a comprehensive site examination to consider
            any specific factors that might impact specialty choices, such as
            structural concerns, electrical demands, or plumbing considerations.
          </p>
          <p className=" paragraph">
            {" "}
            <span
              style={{
                color: "#FF7518",
                fontWeight: "700",
                marginRight: "10px",
              }}
            >
              Specialty Recommendations:
            </span>
            Based on your project's specifications, we propose a range of
            specialties, including but not restricted to electrical systems,
            plumbing fixtures, architectural elements, and more.
          </p>
          <p className=" paragraph">
            {" "}
            <span
              style={{
                color: "#FF7518",
                fontWeight: "700",
                marginRight: "10px",
              }}
            >
              In-depth Estimation:
            </span>
            Our team offers a detailed breakdown of the anticipated expenses for
            each specialty, including quantities and any extra charges like
            installation or customization.
          </p>
          <p className=" paragraph">
            {" "}
            <span
              style={{
                color: "#FF7518",
                fontWeight: "700",
                marginRight: "10px",
              }}
            >
              Presentation for Approval:
            </span>
            We submit the estimation to you, clarifying each aspect and
            addressing any inquiries or concerns you may have. Once approved, we
            proceed with an acquisition. Procurement & Installation Supervision:
            We handle the procurement process to make sure that the specialty
            items fulfill the defined standards. Our team can also coordinate
            with contractors to supervise proper installation.
          </p>

          <CommonHeading text="What We Estimate" />
          <ul className=" paragraph">
            <li>
              {" "}
              <span
                style={{
                  color: "#FF7518",
                  fontWeight: "700",
                  marginRight: "10px",
                }}
              >
                Electrical Components:
              </span>
              Covering wires, sockets, light fittings, and dedicated systems
              like smart home technology.
            </li>
            <li>
              {" "}
              <span
                style={{
                  color: "#FF7518",
                  fontWeight: "700",
                  marginRight: "10px",
                }}
              >
                Plumbing Installations:
              </span>
              Features like basins, taps, lavatories, and other water-related
              pieces are chosen for their efficiency, water conservation, and
              visual appeal.
            </li>
            <li>
              {" "}
              <span
                style={{
                  color: "#FF7518",
                  fontWeight: "700",
                  marginRight: "10px",
                }}
              >
                Architectural Details:
              </span>
              Incorporating bespoke woodwork, ornamental elements, and exclusive
              aspects that enhance charm and uniqueness in the area.
            </li>
            <li>
              {" "}
              <span
                style={{
                  color: "#FF7518",
                  fontWeight: "700",
                  marginRight: "10px",
                }}
              >
                Customized Systems:
              </span>
              Incorporating climate control, fire prevention, or protective
              equipment, designed to address specified safety and convenience
              needs
            </li>
          </ul>
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
