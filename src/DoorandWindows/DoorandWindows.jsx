import React from "react";


import { GetStartedwithUs } from "../Common_Components/GetStartedwithUs";
import { LookAtTrades } from "../Common_Components/LookAtTrades";
import { Banner } from "../Common_Components/Banner";
import { PageNameContainer } from "../Common_Components/PageNameContainer";
import pagenamecontainerpic from "../Images/Door&windowsPNCpic.webp";
import { CommonHeading } from "../Common_Components/CommonHeading";
import DoorWindowsDataImg1 from "../Images/Door&WindowsDATAImg1.webp";
import DoorWindowsDataImg2 from "../Images/Door&WindowsDATAImg2.webp";
import DoorWindowsDataImg3 from "../Images/Door&WindowsDATAImg3.webp";
import DoorWindowsDataImg4 from "../Images/Door&WindowsDATAImg4.webp";
import { TextImgCardContainer } from "../Common_Components/TextImgCardContainer";
import { HalfTextHalfImg } from "../Common_Components/HalfTextHalfImg";
import DoorAndWindowsHTHI from "../Images/DoorAndWindowHTHI.webp";
import { Helmet } from "react-helmet";
export const DoorandWindows = () => {
 
  const Data = [
    { Title: "Estimating Farming Takeoff", imgSrc: DoorWindowsDataImg1 },
    { Title: "A Rough Plan/Sketch", imgSrc: DoorWindowsDataImg2 },
    { Title: "Calculate The Number of Studies", imgSrc: DoorWindowsDataImg3 },
    { Title: "Estimate The Header Material", imgSrc: DoorWindowsDataImg4 },
  ];
  const text2 = (
    <>
      An effective framing takeoff doesn't always lead to optimal material
      utilization. You can optimize material use by minimizing waste. For
      example, if 2x6 floor joists are required, purchasing 12-foot studs and
      cutting them in half is preferable to using 8-foot studs, which results in
      an extra two feet of waste per joist. Similarly, for seven-foot rear
      walls, it's better to obtain two seven-foot studs from a fourteen-foot
      specimen, rather than cutting off one foot from an eight-foot stud. This
      approach significantly decreases on-site waste.
    </>
  );
  return (
    <div>
     <Helmet>
          <title>
          Doors - Windows Estimating & Takeoff Services
          </title>

          <meta
            name="description"
            content="Accurate door and window estimating services for construction projects. Our detailed takeoffs ensure precise cost estimates, helping you plan with confidence."
          />
        </Helmet>
      <PageNameContainer
        Pagename="Doors and Windows Estimation"
        src={pagenamecontainerpic}
      />
      <div className="container">
        <p className="paragraph mt-4 mb-4">
          Construction projects require a framing takeoff to calculate how much
          lumber or wood will be used. Estimates for wood beams, floor joists,
          wall studs, knee wall framings, trim joists, and lumber are all
          included in the estimate.
          <br />
          <br />
          As a result, framing contractors play an important role in
          construction because they set up the building's skeletal shell.
          Framing contractors' profitability depends on a steady volume of
          repeat jobs and precise cost control
        </p>
        <CommonHeading text="How to Estimate a Framing Takeoff" />
        <TextImgCardContainer Data={Data} />
        <CommonHeading text="Improving your framing Takeoff" />
        <HalfTextHalfImg text={text2} src={DoorAndWindowsHTHI} />
      </div>
      <GetStartedwithUs />
      <div className="container">
        <LookAtTrades  />
      </div>
      <Banner />
    </div>
  );
};
