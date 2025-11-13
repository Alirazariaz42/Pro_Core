import React from "react";

import { GetStartedwithUs } from "../Common_Components/GetStartedwithUs";
import { LookAtTrades } from "../Common_Components/LookAtTrades";
import { Banner } from "../Common_Components/Banner";
import equipmentDataPic1 from "../Images/equipmentDataPic1.webp";
import equipmentDataPic2 from "../Images/equipmentDataPic2.webp";
import equipmentDataPic3 from "../Images/equipmentDataPic3.webp";
import equipmentDataPic4 from "../Images/equipmentDataPic4.webp";
import equipmentDataPic5 from "../Images/equipmentDataPic5.webp";
import equipmentDataPic6 from "../Images/equipmentDataPic6.webp";
import equipmentDataPic7 from "../Images/equipmentDataPic7.webp";

import pagenamecontainerpic from "../Images/EquipmentPNCpic.webp";
import { CommonHeading } from "../Common_Components/CommonHeading";
import { PageNameContainer } from "../Common_Components/PageNameContainer";
import { TextImgCardContainer } from "../Common_Components/TextImgCardContainer";
import { TextImgCardContainerHovertext } from "../Common_Components/TextImgCardContainerHovertext";
import { Helmet } from "react-helmet";

export const Equipment = () => {
 
  const Arrar1 = [
    {
      Title: "Earthmoving Machinery",
      imgSrc: equipmentDataPic1,
      text: (
        <>
          <ul>
            <li>List of bulldozers, excavators, loaders, and graders.</li>
            <li>Estimation of equipment rental or purchase costs.</li>
            <li>
              Operational considerations, including fuel consumption and
              maintenance.
            </li>
          </ul>
        </>
      ),
    },
    {
      Title: "Concrete and Paving Equipment",
      imgSrc: equipmentDataPic2,
      text: (
        <>
          <ul>
            <li>Breakdown of concrete mixers, pavers, and concrete pumps.</li>
            <li>Cost estimates for equipment usage and associated tools.</li>
            <li>Labor hours for equipment operation and maintenance.</li>
          </ul>
        </>
      ),
    },
    {
      Title: "Cranes and Lifting Equipment",
      imgSrc: equipmentDataPic3,
      text: (
        <>
          <ul>
            <li>
              Data on different types of cranes (tower, mobile, overhead).
            </li>
            <li>
              Estimation of rental or purchase costs based on lifting capacity.
            </li>
            <li>
              Labor estimates for crane setup, operation, and safety measures.
            </li>
          </ul>
        </>
      ),
    },
  ];
  const Arrar2 = [
    {
      Title: "Machinery and Production Equipment",
      imgSrc: equipmentDataPic4,
      text: (
        <>
          <ul>
            <li>
              List of industrial machines such as CNC mills, lathes, and
              presses.
            </li>
            <li>Cost estimates for equipment procurement or lease.</li>
            <li>Data on maintenance schedules and associated costs.</li>
          </ul>
        </>
      ),
    },
    {
      Title: "Cranes and Lifting Equipment",
      imgSrc: equipmentDataPic5,
      text: (
        <>
          <ul>
            <li>
              Breakdown of forklifts, conveyor systems, and automated handlers.
            </li>
            <li>Estimation of costs based on load capacity and technology.</li>
            <li>Labor estimates for equipment operation and maintenance.</li>
          </ul>
        </>
      ),
    },
  ];
  const Arrar3 = [
    {
      Title: "Computers and Networking Gear",
      imgSrc: equipmentDataPic6,
      text: (
        <>
          <ul>
            <li>Breakdown of computers, servers, routers, and switches.</li>
            <li>Cost estimates for purchasing or leasing IT equipment.</li>
            <li>Data on software licenses and technology upgrades</li>
          </ul>
        </>
      ),
    },
    {
      Title: "Office Furniture and Appliances",
      imgSrc: equipmentDataPic7,
      text: (
        <>
          <ul>
            <li>List of desks, chairs, printers, and appliances</li>
            <li>Estimation of costs for outfitting office spaces.</li>
            <li>Consideration of ergonomic and functional requirements.</li>
          </ul>
        </>
      ),
    },
  ];
  return (
    <div>
      <Helmet>
          <title>
          Construction Equipment Estimating Services
          </title>

          <meta
            name="description"
            content="Discover accurate construction equipment estimating services with Procore Estimators. Streamline your project budgeting and planning efficiently."/>
        </Helmet>
      <PageNameContainer Pagename="Equipment" src={pagenamecontainerpic} />
      <div className=" container">
        <p className=" paragraph mt-4 ">
          <span style={{ color: "#FF7518", fontWeight: "700" }}>
            Procore Estimators
          </span>
          , are your ultimate resource for comprehensive equipment estimating
          Service. We understand the critical role that equipment plays in a
          wide range of projects, and our data is designed to empower you with
          accurate insights for effective planning and budgeting. Our equipment
          estimation data is organized into the following categories
        </p>
        <CommonHeading text="Construction Equipment" />
        
        <TextImgCardContainerHovertext Data={Arrar1} />
        <CommonHeading text="Manufacturing and Industrial Equipment" />
        <TextImgCardContainerHovertext Data={Arrar2} />

        <CommonHeading text="Manufacturing and Industrial Equipment" />
        <TextImgCardContainerHovertext Data={Arrar3} />
      </div>
      <GetStartedwithUs />
      <div className="container">
        <LookAtTrades  />
      </div>
      <Banner />
    </div>
  );
};
