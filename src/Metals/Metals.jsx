import React from "react";
import { PageNameContainer } from "../Common_Components/PageNameContainer";
import pagenamecontainerpic from "../Images/MetalsPNCpic.webp";
import { CommonHeading } from "../Common_Components/CommonHeading";
import { HalfTextHalfImg } from "../Common_Components/HalfTextHalfImg";
import MetalsHTHI from "../Images/MetalsHTHI.webp";
import { GetStartedwithUs } from "../Common_Components/GetStartedwithUs";
import { LookAtTrades } from "../Common_Components/LookAtTrades";
import { Banner } from "../Common_Components/Banner";
import { Helmet } from "react-helmet";
export const Metals = () => {
 

  const text = (
    <>
      <ul>
        <li>
          Detailed and accurate steel takeoffs and estimates ranging from
          budget, the order of magnitude, design, and bid estimate.
        </li>
        <li>Precast estimation</li>
        <li>Cold-form steel estimation</li>
        <li>Steel frames takeoffs</li>
        <li>Rebar estimation</li>
        <li>Structural steel takeoffs</li>
        <li>Bar bending schedules</li>
        <li>Change order management</li>
        <li>Rebar project management</li>
        <li>Conflict Resolution</li>
        <li>Consultancy on smartly filing bids</li>
      </ul>
    </>
  );
  return (
    <div>
      <Helmet>
          <title>
          Estimate Structural Steel Costs - Metals Estimating Services
          </title>

          <meta
            name="description"
            content="We offer metals estimating services tailored for metal framing contractors, steel manufacturers, distributors, and fabricators."
          />
        </Helmet>
      <PageNameContainer
        Pagename="Metals Estimation"
        src={pagenamecontainerpic}
      />
      <div className="container mt-4 mb-4">
        <p className="paragraph">
          Elevate your project precision with our metals estimating services.
          Our experienced team excels in delivering accurate estimates for
          various metal-based projects, ensuring meticulous calculations for
          materials, labor, and costs. With our expertise, you can bid
          confidently, manage resources efficiently, and achieve superior
          results in the construction industry.
        </p>
        <CommonHeading text="Our steel estimating services include" />
        <HalfTextHalfImg text={text} src={MetalsHTHI} />
        <CommonHeading text="Why should you outsource your Metals estimate?" />
        <p className="paragraph">
          Our estimates offer a comprehensive breakdown of metals and steel,
          including materials, plates, connectors, accessories, and erection
          costs. Our estimates are an essential tool for planning, procurement,
          and cost control. They can also help to reduce storage space at the
          project site, ensuring maximum productivity and significant cost
          savings. With our estimates, you can confidently take charge of your
          projects and guarantee optimal results.
        </p>
      </div>
      <GetStartedwithUs />
      <div className="container">
        <LookAtTrades  />
      </div>
     <Banner/>
    </div>
  );
};
