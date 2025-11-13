import React from "react";
import { PageNameContainer } from "../Common_Components/PageNameContainer";
import SiteConstructionEstimation from "../Images/SiteConstructionEstimation.webp";
import { CommonHeading } from "../Common_Components/CommonHeading";
import { HalfTextHalfImg } from "../Common_Components/HalfTextHalfImg";
import SiteConstructionGTGi from "../Images/SiteConstructionHTHi.webp";
import { TextImgCardContainer } from "../Common_Components/TextImgCardContainer";
import SiteConstructionCard1 from "../Images/SiteConstructionCard1.webp";
import SiteConstructionCard2 from "../Images/SiteConstructionCard2.webp";
import SiteConstructionCard3 from "../Images/SiteConstructionCard3.webp";
import SiteConstructionCard4 from "../Images/SiteConstructionCard4.webp";
import SiteConstructionCard5 from "../Images/SiteConstructionCard5.webp";
import SiteConstructionCard6 from "../Images/SiteConstructionCard6.webp";
import SiteConstructionCard7 from "../Images/SiteConstructionCard7.webp";
import Service1 from "../Images/Service1.webp";
import Service2 from "../Images/Service2.webp";
import Service3 from "../Images/Service3.webp";
import Service4 from "../Images/Service4.webp";
import { LookAtTrades } from "../Common_Components/LookAtTrades";
import { GetStartedwithUs } from "../Common_Components/GetStartedwithUs";
import { Banner } from "../Common_Components/Banner";
import { LookAtTradesTwo } from "../Common_Components/LookAtTradesTwo";
import { Helmet } from "react-helmet";

export const SiteConstruction = () => {
  const text = (
    <>
      Excavation & Embankment Quantity list including summary of Earthwork
      Volumes, measurements, and sections Terrain Grading Excavate and examined
      proposal paper work Landscape assessment with soil volumes (Pavement,
      Greenery & Watering)
    </>
  );
  const Data = [
    {
      Title: "Quantity takeoffs & Cost Estimates",
      imgSrc: SiteConstructionCard1,
    },
    { Title: "Sitework Feasibility Analysis", imgSrc: SiteConstructionCard2 },
    { Title: "Land Development Consultation", imgSrc: SiteConstructionCard3 },
    { Title: "Bidding Assistance", imgSrc: SiteConstructionCard4 },
    {
      Title: "Design phase Estimating Assistance",
      imgSrc: SiteConstructionCard5,
    },
    { Title: "Change Order Management", imgSrc: SiteConstructionCard6 },
    { Title: "Value Engineering", imgSrc: SiteConstructionCard7 },
  ];

  const TradeData = [
    { ServiceName: "General Requirement", imgSrc: Service1, redirectTo: "/" },
    { ServiceName: "Site Works", imgSrc: Service2, redirectTo: "/" },
    { ServiceName: "Concrete", imgSrc: Service3, redirectTo: "/" },
    { ServiceName: "Masonry", imgSrc: Service4, redirectTo: "/" },
  ];
  return (
    <div>
      <Helmet>
        <title>Sitework Construction Estimating - Procore Estimators</title>

        <meta name="description" content="Accurate sitework construction cost estimates by Procore Estimators. Plan your project efficiently with detailed material and labor cost predictions." />
      </Helmet>
      <PageNameContainer
        Pagename="Site Construction Estimation "
        src={SiteConstructionEstimation}
      />
      <div className="container">
        <p className="paragraph mt-4 mb-4 ">
          <span style={{ color: "#FF7518" }}>Procore Estimators</span> stands as
          the top selection for accurate and thorough site work estimating
          solutions, supporting landscaping contractors, land developers, and
          general contractors. Our rapid 24 to 48-hour response period provides
          essential cut and fill takeoffs, enabling clients to successfully
          obtain projects and effectively reduce overhead costs. We specialize
          in assisting busy excavation contractors who entrust their excavation
          estimating needs to our experienced team, freeing them from
          time-consuming tasks.
        </p>
        <CommonHeading text="Site work Estimating services include" />
        <HalfTextHalfImg text={text} src={SiteConstructionGTGi} />
        <CommonHeading text="Our Variety Of Site Work Estimating Services." />
        <TextImgCardContainer Data={Data} />
      </div>
      <GetStartedwithUs />

      <div className="container">
        <LookAtTradesTwo />
      </div>
      <Banner />
    </div>
  );
};
