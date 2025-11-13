import React from "react";
import { GetStartedwithUs } from "../Common_Components/GetStartedwithUs";
import { LookAtTrades } from "../Common_Components/LookAtTrades";
import { Banner } from "../Common_Components/Banner";

import { PageNameContainer } from "../Common_Components/PageNameContainer";
import pagenamecontainerpic from "../Images/ThermalPNCpic.png";
import { CommonHeading } from "../Common_Components/CommonHeading";
import thermalImg1 from "../Images/ThermalImg1.webp";
import thermalImg2 from "../Images/ThermalImg2.webp";
import thermalImg3 from "../Images/ThermalImg3.webp";
import thermalImg4 from "../Images/ThermalImg4.webp";
import thermalImg5 from "../Images/ThermalImg5.webp";
import thermalImg6 from "../Images/ThermalImg6.webp";
import thermalImg7 from "../Images/ThermalImg7.webp";
import { TextImgCardContainer } from "../Common_Components/TextImgCardContainer";
import { HalfTextHalfImg } from "../Common_Components/HalfTextHalfImg";
import thermalHTHI from "../Images/ThermalHTHI.webp";
import { Helmet } from "react-helmet";
export const ThermalandMoister = () => {
  const text3 = (
    <>
      To begin with your cost estimation service, you'll need to send your plans
      to the company by means of PDF, Dropbox link, Google Drive, or alternative
      file-sharing solutions. The company will subsequently examine your plans
      and present you with a proposal detailing the precise cost and completion
      time. Don't forget to specify if you plan to bid on the entire project as
      a general contractor or selected trades, so the company can assess your
      plans suitably and offer you a tailored proposal including the fee and
      estimated time of completion.
    </>
  );
  
  const Data = [
    { Title: "Type of insulation", imgSrc: thermalImg1 },
    { Title: "Roofing material", imgSrc: thermalImg2 },
    { Title: "Waterproofing", imgSrc: thermalImg3 },
    { Title: "Building size and complexity", imgSrc: thermalImg4 },
    { Title: "Accessibility", imgSrc: thermalImg5 },
    { Title: "Climate and location", imgSrc: thermalImg6 },
    { Title: "Contractor experience and reputation", imgSrc: thermalImg7 },
  ];
  return (
    <div>
      <Helmet>
          <title>
          Thermal Insulation - Thermal & Moisture Protection Estimating
          </title>

          <meta
            name="description"
            content="Our building cost estimators are experts in hands-on management of thermal and moisture protection for residential and commercial projects."
          />
        </Helmet>
      <PageNameContainer
        Pagename="Thermal and Moisture Protection Estimation"
        src={pagenamecontainerpic}
      />
      <div className=" container">
        <p className=" paragraph mt-4 mb-4">
          Thermal and Moisture Protection estimation involves calculating the
          costs of materials, labor, and equipment required to provide effective
          insulation and moisture protection to a building. This includes
          estimating the costs of materials such as insulation, vapor barriers,
          flashing, waterproofing, and roof coatings, as well as the cost of
          installation labor and equipment. The cost estimation should also take
          into account any waste or excess material, transportation costs, and
          any additional costs such as permits or insurance.
        </p>
        <CommonHeading text="Waterproofing & Damp Proofing Estimating – Material Takeoff" />
        <p className=" paragraph">
          Our clientele includes Waterproofing Contractors who rely on our
          meticulous material takeoffs, which not only facilitate their bidding
          process to General Contractors, but also aid in the procurement of
          necessary materials. Our estimates further enlighten them about the
          application and locations of the required materials on foundations,
          footings, or below-grade slabs. Air Vapor Barrier & Sealant
          contractors, who are among our valued clients, utilize our services
          for bid preparation and determining the material requisites.
        </p>
        <CommonHeading text="Fire Proofing & Fire Stopping Estimating – Material Takeoff" />
        <p className=" paragraph">
          All Fireproofing and firestopping contractors need an estimation
          company or an estimator who will do a detailed description takeoff of
          the plans where rating of fireproofing is mentioned along with the
          structural assemblies like beams, columns, walls and structures or
          framing assemblies. The detailed description that include the
          thickness of insulation, material of insulation and structural details
          of the assembly must be mentioned for which our expert estimators will
          provide all the necessary details that would make up the work for
          contractors in bidding and procuring as well.
        </p>
        <CommonHeading text="Factors that can affect the cost estimation for thermal and moisture protection include:" />
        <TextImgCardContainer Data={Data} />
        <CommonHeading text="The way to start" />
        <HalfTextHalfImg text={text3} src={thermalHTHI} />
      </div>
      <GetStartedwithUs />
      <div className="container">
        <LookAtTrades  />
      </div>
      <Banner />
    </div>
  );
};
