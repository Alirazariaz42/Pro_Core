import React from "react";
import { PageNameContainer } from "../Common_Components/PageNameContainer";
import pagenamecontainerpic from "../Images/FinishesPNCpic.webp";

import { GetStartedwithUs } from "../Common_Components/GetStartedwithUs";
import { LookAtTrades } from "../Common_Components/LookAtTrades";
import { Banner } from "../Common_Components/Banner";
import { CommonHeading } from "../Common_Components/CommonHeading";
import { TextImgCardContainer } from "../Common_Components/TextImgCardContainer";
import MechanicalPlubbingTextImgCard1 from "../Images/MechanicalPlubbingTextImgCard1.webp";
import MechanicalPlubbingTextImgCard2 from "../Images/MechanicalPlubbingTextImgCard2.webp";
import MechanicalPlubbingTextImgCard3 from "../Images/MechanicalPlubbingTextImgCard3.webp";
import MechanicalPlubbingTextImgCard4 from "../Images/MechanicalPlubbingTextImgCard4.webp";
import MechanicalPlubbingTextImgCard5 from "../Images/MechanicalPlubbingTextImgCard5.webp";
import MechanicalPlubbingTextImgCard6 from "../Images/MechanicalPlubbingTextImgCard6.webp";
import MechanicalPlumbinfHTHi from "../Images/MechanicalPlumbingHTHI.webp";
import { HalfTextHalfImg } from "../Common_Components/HalfTextHalfImg";
import { Helmet } from "react-helmet";

export const MechanicalPlumbing = () => {
 
  const Data = [
    { Title: "HVAC", imgSrc: MechanicalPlubbingTextImgCard1 },
    {
      Title: "Mechanical Equipment Installation",
      imgSrc: MechanicalPlubbingTextImgCard2,
    },
    {
      Title: "Energy Efficiency Upgrades",
      imgSrc: MechanicalPlubbingTextImgCard3,
    },
  ];
  const Data2 = [
    { Title: "Piping Systems", imgSrc: MechanicalPlubbingTextImgCard4 },
    {
      Title: "Fixtures and Sanitaryware",
      imgSrc: MechanicalPlubbingTextImgCard5,
    },
    {
      Title: "Drainage and Water Supply",
      imgSrc: MechanicalPlubbingTextImgCard6,
    },
  ];
  const Text = (
    <>
    <Helmet>
          <title>
          Mechanical Estimating Services
          </title>

          <meta
            name="description"
            content="We provide end-to-end mechanical estimating services, helping clients win bids and maximize profits. Get detailed estimates today."
          />
        </Helmet>
      <CommonHeading text="Benefits of Mechanical Estimating" />
      <ul>
        <li>Getting access to the industry standards insights.</li>
        <li>Understanding the internal project cost.</li>
        <li>Getting the most reliable mechanical estimates.</li>
        <li>Increasing the probability of high profit.</li>
        <li>Boosting their win-bid ratio.</li>
        <li>Streamlining their project activities with more confidence.</li>
        <li>Identifying the errors and flaws in their mechanical project.</li>
        <li>
          Mitigating the potential risk while saving their time and money.
        </li>
      </ul>
      <CommonHeading text="Our Plumbing Estimating Services" />
      <div className="row m-0 p-0 w-100">
        <div className="col-6">
          <ul>
            <li>Cold Water Pipes</li>
            <li>Hot Water Pipes</li>
            <li>Vent Pipes</li>
            <li>Gas Pipes</li>
            <li>Sanitary Pipes</li>
            <li>Underground Pipes</li>
            <li>Pipe Fittings</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Pipe Concealment</li>
            <li>Insulations</li>
            <li>Valves</li>
            <li>Hangers</li>
            <li>Struts</li>
            <li>Supports</li>
          </ul>
        </div>
      </div>
    </>
  );
  return (
    <div>
      <PageNameContainer
        Pagename="Mechanical/Plumbing"
        src={pagenamecontainerpic}
      />
      <div className=" container">
        <p className=" paragraph mt-4 mb-4">
          At{" "}
          <span style={{ color: "#FF7518", fontWeight: "700" }}>
            {" "}
            PROCORE Estimators
          </span>
          , our area of expertise lies in delivering precise and dependable
          mechanical and plumbing estimates. Our seasoned team of estimators
          grasps the complexities of mechanical and plumbing systems, offering
          all-encompassing and thorough estimates for your projects. Catering to
          both residential and commercial constructions, we factor in equipment,
          materials, labor, and project-specific requirements. Our unwavering
          commitment to providing vital information enables our clients to make
          well-informed decisions to ensure the success of their projects. Our
          mechanical and plumbing estimates form the bedrock of a triumphant
          construction project.
        </p>
        <CommonHeading text="Mechanical Estimation Data" />
        <TextImgCardContainer Data={Data} />
        <CommonHeading text="Plumbing Estimation Data" />
        <TextImgCardContainer Data={Data2} />
        <br /> <br />
        <HalfTextHalfImg text={Text} src={MechanicalPlumbinfHTHi} />
      </div>
      <GetStartedwithUs />
      <div className="container">
        <LookAtTrades   />
      </div>
      
      <Banner />
    </div>
  );
};
