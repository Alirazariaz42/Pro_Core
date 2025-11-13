import React from "react";
import { PageNameContainer } from "../Common_Components/PageNameContainer";
import GeneralRequirementspic from "../Images/GeneralRequirements.webp";
import { ThreeBoxes } from "../Common_Components/ThreeBoxes";
import { CommonHeading } from "../Common_Components/CommonHeading";
import { LookAtTrades } from "../Common_Components/LookAtTrades";
import Service1 from "../Images/Service1.webp";
import Service2 from "../Images/Service2.webp";
import Service3 from "../Images/Service3.webp";
import Service4 from "../Images/Service4.webp";
import vantilating from "../Images/Ventilating.webp";
import cooling from "../Images/Cooling.webp";
import heating from "../Images/Heating.webp";
import Lighting from "../Images/Lighting.webp";
import { Banner } from "../Common_Components/Banner";
import { TextImgCard } from "../Common_Components/TextImgCard";
import { TextImgCardContainer } from "../Common_Components/TextImgCardContainer";
import { GetStartedwithUs } from "../Common_Components/GetStartedwithUs";
import { LookAtTradesTwo } from "../Common_Components/LookAtTradesTwo";
import { Helmet } from "react-helmet";

export const GeneralRequirements = () => {
  const TradeData = [
    { ServiceName: "Metals", imgSrc: Service1, redirectTo: "/Metals" },
    { ServiceName: "Site Works", imgSrc: Service2, redirectTo: "/SiteConstruction" },
    { ServiceName: "Concrete", imgSrc: Service3, redirectTo: "/Concrete" },
    { ServiceName: "Masonry", imgSrc: Service4, redirectTo: "/Masonry" },
  ];
  const Data = [
    { Title: "Temporary Ventilating", imgSrc: vantilating },
    { Title: "Temporary Cooling", imgSrc: cooling },
    { Title: "Temporary Heating", imgSrc: heating },
    { Title: "Temporary Lighting", imgSrc: Lighting },
  ];
  const paragraph1 = (
    <>
      {" "}
      This section is dedicated to Project Management, meticulously documenting
      Construction Advancements by utilizing Architectural Resources employing
      Distinct Methods, and implementing Submission Protocols.
    </>
  );
  const paragraph2 = (
    <>This section covers Testing, Inspection, and Laboratory Services.</>
  );
  const paragraph3 = (
    <>
      In this section, we will cover how to manage requirements, store products,
      and handle product delivery requirements.
    </>
  );
  return (
    <div>
      <Helmet>
          <title>
          Procore Estimators - General Requirements Overview
          </title>

          <meta
            name="description"
            content="Explore project insights with Procore Estimators. Our General Requirements guide ensures accurate and detailed construction estimating services."
          />
        </Helmet>
      <PageNameContainer
        Pagename="General Requirements"
        src={GeneralRequirementspic}
      />
      <div className="container">
        <p className="paragraph mt-4 mb-4">
          General Construction offer the bigger picture and a general concept of
          how the client expects the project to be run and it is the detailed
          version of the Client’s expectations and requirements regarding the
          project. General Conditions is that Contract Document’s portion in
          which the relationships, rights, and responsibilities of both the
          parties are clearly stated and specified.
        </p>
        <ThreeBoxes
          title1="Administrative Requirements"
          title2="Quality Requirements"
          title3="Product Requirements"
          paragraph1={paragraph1}
          paragraph2={paragraph2}
          paragraph3={paragraph3}
        />
        <CommonHeading text="Temporary Facilities and Controls" />
        <p className="paragraph">
          There are several types of project planning. The three major types of
          construction project planning are
        </p>
        <TextImgCardContainer Data={Data} />
        <CommonHeading text="Key Components of General Requirements" />
        <b>1. Project Objectives</b>
        <ul>
          <li>
            Clearly defined and measurable goals that the project aims to
            achieve.
          </li>
        </ul>

        <b>2. Scope of Work</b>
        <ul>
          <li>
            A detailed description of the tasks, deliverables, and boundaries of
            the project.
          </li>
        </ul>

        <b>3. Resource Allocation</b>
        <ul>
          <li>
            Identifying and assigning the necessary resources, including
            manpower, materials, and equipment.
          </li>
        </ul>

        <b>4. Quality Standards</b>
        <ul>
          <li>
            Specifications for the level of quality expected for project
            deliverables.
          </li>
        </ul>

        <b>5. Regulatory and Compliance Requirements</b>
        <ul>
          <li>
            Ensuring that the project adheres to legal and regulatory standards.
          </li>
        </ul>

        <b>6. Budget and Financial Constraints</b>
        <ul>
          <li>
            Defining the financial parameters and constraints within which the
            project must operate.
          </li>
        </ul>

        <b>7. Risk Management Plan</b>
        <ul>
          <li>
            Identifying potential risks, assessing their impact, and outlining
            mitigation strategies.
          </li>
        </ul>

        <b>8. Communication Plan</b>
        <ul>
          <li>
            Establishing channels and protocols for communication among team
            members and stakeholders.
          </li>
        </ul>

       
       
      </div>
       <GetStartedwithUs />
      
      <div className="container">
      <LookAtTradesTwo/>
      </div>
      <Banner />
    </div>
  );
};
