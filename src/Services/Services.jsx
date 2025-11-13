import React, { useState } from "react";
import "./Services.css";
import { ServicesesCard } from "../Common_Components/ServicesesCard";
import pic from "../Images/Testimonial5.jpg";
import { Link } from "react-router-dom";
import { CommonHeading } from "../Common_Components/CommonHeading";
import ServicePic1 from "../Images/Service1.webp";
import ServicePic2 from "../Images/Service2.webp";
import ServicePic3 from "../Images/Service3.webp";
import ServicePic4 from "../Images/Service4.webp";
import ServicePic5 from "../Images/Service5.webp";
import ServicePic6 from "../Images/Service6.webp";
import ServicePic7 from "../Images/Service7.webp";
import ServicePic8 from "../Images/Service8.webp";
import ServicePic9 from "../Images/Service9.webp";
import ServicePic10 from "../Images/Service10.webp";
import ServicePic11 from "../Images/Service11.webp";
import ServicePic12 from "../Images/Service12.webp";
import ServicePic13 from "../Images/Service13.webp";
import ServicePic14 from "../Images/Service14.webp";
import ServicePic15 from "../Images/Service15.webp";
import ServicePic16 from "../Images/Service16.webp";
import ServicePic17 from "../Images/ServicePic17.webp";
import ServicePic18 from "../Images/ServicePic18.webp";
import ServicePic19 from "../Images/ServicePic19.webp";
import ServicePic20 from "../Images/ServicePic20.webp";
import ArrowDown from "../Images/ArrowDown.png";
import Planning from "../Images/Planning.webp";
import CostEstimations from "../Images/CostEstimation(1).webp";
import QuantitiesTakeoff from "../Images/QuantitiesTakeOff.webp";
import Scheduling from "../Images/Scheduling (3).webp";
import { PageNameContainer } from "../Common_Components/PageNameContainer";
import ServiceHeading from "../Images/ServiceHeading.webp";
import { Banner } from "../Common_Components/Banner";
import { Cards } from "../Common_Components/Cards";
import planning from "../Images/Planning.png";
import QuantitesTakeoff from "../Images/QuantitiesTakeOff.webp";
import CostEstimation from "../Images/CostEstimation(1).webp";
import { Helmet } from "react-helmet";
export const Services = () => {
  const Servicesdata = [
    {
      ServiceName: "General Requirement",
      imgSrc: ServicePic1,
      redirectTo: "/general-requirements/",
    },
    {
      ServiceName: "Site Works",
      imgSrc: ServicePic2,
      redirectTo: "/sitework-estimating-services",
    },
    {
      ServiceName: "Concrete",
      imgSrc: ServicePic3,
      redirectTo: "/concrete-estimating-services/",
    },
    {
      ServiceName: "Masonry",
      imgSrc: ServicePic4,
      redirectTo: "/masonry-estimating-services",
    },
    {
      ServiceName: "Metals",
      imgSrc: ServicePic5,
      redirectTo: "/metals-estimating-services",
    },
    {
      ServiceName: "Wood and Plastics",
      imgSrc: ServicePic6,
      redirectTo: "/wood-plastic-estimating-services",
    },
    {
      ServiceName: "Thermal and Moisture Protection",
      imgSrc: ServicePic7,
      redirectTo: "/thermal-moisture-protection-estimating-services",
    },
    {
      ServiceName: "Doors and Windows",
      imgSrc: ServicePic8,
      redirectTo: "/door-window-estimating-services",
    },
    {
      ServiceName: "Finishes",
      imgSrc: ServicePic9,
      redirectTo: "/interior-exterior-finishes",
    },
    {
      ServiceName: "Specialties",
      imgSrc: ServicePic10,
      redirectTo: "/specialities",
    },
    {
      ServiceName: "Equipment",
      imgSrc: ServicePic11,
      redirectTo: "/equipment-estimating-services",
    },
    {
      ServiceName: "Furnishings",
      imgSrc: ServicePic12,
      redirectTo: "/furnishing-estimating-services",
    },
    {
      ServiceName: "Special Construction",
      imgSrc: ServicePic13,
      redirectTo: "/special-construction-estimating-services",
    },
    {
      ServiceName: "Conveying Systems",
      imgSrc: ServicePic14,
      redirectTo: "/conveying-system/",
    },
    {
      ServiceName: "Mechanical/Plumbing",
      imgSrc: ServicePic15,
      redirectTo: "/mechanical-estimating-services",
    },
    {
      ServiceName: "Electrical",
      imgSrc: ServicePic16,
      redirectTo: "/electrical-estimating-services",
    },
    {
      ServiceName: "HVAC",
      imgSrc: ServicePic17,
      redirectTo: "/hvac-estimating-services/",
    },
    {
      ServiceName: "Commercial Estimating",
      imgSrc: ServicePic18,
      redirectTo: "/commercial-estimating-services/",
    },
    {
      ServiceName: "Industrial Estimating ",
      imgSrc: ServicePic19,
      redirectTo: "/industrial-estimating-services/",
    },
    {
      ServiceName: "Residential Estimating",
      imgSrc: ServicePic20,
      redirectTo: "/residential-estimating-services/",
    },
  ];

  const cardsArray = [
    {
      Title: "Cost Estimation",
      text: "Cost estimation is most important and useful technique to get to know what is the budget and time duration to complete entire project but it’s very hectic and time consuming task",
      src: CostEstimation,
      redirect: "/cost-estimating-services",
    },
    {
      Title: "Quantities & Material Takeoff",
      text: "Our experts are always here to help you to fill the gaps which exits in the initial phases of the proposed solution especially when we talk about Quantities and Material Takeoff. ",
      src: QuantitesTakeoff,
      redirect: "/construction-takeoff-services/",
    },
    {
      Title: " Scheduling ",
      text: "Scheduling transforms a project's high-level plan into a time-focused schedule, considering task durations, priorities, dependencies, resource availability, and deadlines, while acknowledging real-world constraints that can impact execution.",
      src: Scheduling,
      redirect: "/cost-scheduling/",
    },
    {
      Title: "Planning",
      text: "In project management, planning establishes the project's roadmap, while scheduling aligns that roadmap with a timeline for timely execution.",
      src: planning,
      redirect: "/planning/",
    },
  ];

  const [testimpnial1State, setTestimonial1] = useState({
    img: Planning,
    redirectTo: "/planning/",

    Title: "Planning",
    text: "In the realm of project management, the initial and essential step is strategizing. This entails devising a comprehensive plan for the project's progression. Note, strategizing doesn't equate to scheduling. Strategizing is akin to crafting a grand map with the input of project managers and construction professionals, whereas scheduling involves transforming that map into a timeline, assisted by scheduling specialists. Thus, strategizing determines the course, while scheduling ensures everything occurs at the appropriate moment.",
  });
  const [testimpnial2State, setTestimonial2] = useState({
    img: CostEstimations,
    Title: "Cost Estimation",
    redirectTo: "/cost-estimating-services/",
    text: "Cost Estimation is a crucial and beneficial method to understand a project's requirements and duration, though it might be quite tedious and time-intensive.",
  });
  const [testimpnial3State, setTestimonial3] = useState({
    img: QuantitiesTakeoff,
    Title: "Quantities & Material Takeoff ",
    redirectTo: "/construction-takeoff-services/",
    text: "Our professionals consistently assist you in addressing the gaps that exist during the early stages of the suggested solution, particularly concerning Quantity and Material Takeoff discussions.",
  });
  const [testimpnial4State, setTestimonial4] = useState({
    img: Scheduling,
    Title: "Scheduling ",
    redirectTo: "/cost-scheduling",
    text: "Organizing a project's overarching strategy into a time-sensitive timeline involves evaluating task lengths, significance, interdependencies, accessible resources, and end dates, while recognizing real-life limitations affecting implementation.",
  });

  const leftArrorClick = () => {
    // setTestimonial5(testimpnial1State);
    setTestimonial1(testimpnial2State);
    setTestimonial2(testimpnial3State);
    setTestimonial3(testimpnial4State);
    setTestimonial4(testimpnial1State);
  };
  const RightArrorClick = () => {
    setTestimonial1(testimpnial4State);
    setTestimonial2(testimpnial1State);
    setTestimonial3(testimpnial2State);
    setTestimonial4(testimpnial3State);
    // setTestimonial5(testimpnial4State);
  };

  return (
    <div>
      <div>
        <Helmet>
          <title>
            Services - Procore Estimators - Construction Cost Estimating
          </title>
          <meta
            name="description"
            content="Discover comprehensive construction cost estimating services. From materials to labor, we provide accurate and reliable estimates for your projects."
          />
        </Helmet>
      </div>
      <PageNameContainer Pagename="Services" src={ServiceHeading} />
      <div className="ServiceImgRotaterContainer">
        <div className={`ReferancePagesContainer `}>
          <h3>{testimpnial2State.Title}</h3>
          <p>
            {" "}
            {testimpnial2State.text}{" "}
            <Link
              className="redirecttoPageLink"
              to={testimpnial2State.redirectTo}
            >
              Read More
            </Link>{" "}
          </p>
        </div>

        <div>
          <div className="ServiceImgRotatorimg1">
            <Link to={testimpnial1State.redirectTo}>
              <img
                src={testimpnial1State.img}
                className="ServiceImgRotatorimg"
                alt=""
              />
            </Link>
          </div>
          <div className="ServiceImgRotatorimg2">
            <Link to={testimpnial2State.redirectTo}>
              <img
                src={testimpnial2State.img}
                className="ServiceImgRotatorimg"
                alt=""
              />
            </Link>
          </div>
          <div className="ServiceImgRotatorimg3">
            <Link to={testimpnial2State.redirectTo}>
              <img
                src={testimpnial2State.img}
                className="ServiceImgRotatorimg"
                alt=""
              />
            </Link>
          </div>
          <div className="ServiceImgRotatorimg4">
            <Link to={testimpnial3State.redirectTo}>
              <img
                src={testimpnial3State.img}
                className="ServiceImgRotatorimg"
                alt=""
              />
            </Link>
          </div>
          <div className="ServiceImgRotatorimg5">
            <Link to={testimpnial4State.redirectTo}>
              <img
                src={testimpnial4State.img}
                className="ServiceImgRotatorimg"
                alt=""
              />
            </Link>
          </div>
        </div>
        <button onClick={leftArrorClick} className="DownArrow1">
          {" "}
          <img src={ArrowDown} alt="ArrowDown" />
        </button>

        <button onClick={RightArrorClick} className="DownArrow2">
          {" "}
          <img src={ArrowDown} alt="ArrowDown" />
        </button>
      </div>
      <div className="container showonSmallDevices">
        <div className="row w-100 m-0 justify-content-center">
          {cardsArray.map((CardData) => (
            <div
              className="col-lg-3 col-md-6 col-12"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div>
                <Cards
                  src={CardData.src}
                  Title={CardData.Title}
                  text={CardData.text}
                  redirect={CardData.redirect}
                />{" "}
              </div>
            </div>
          ))}
        </div>{" "}
      </div>
      <div className="container">
        <CommonHeading text="Our Trade" />
        <div className="row w-100 m-0 justify-content-center">
          {Servicesdata.map((data) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link to={data.redirectTo} style={{ textDecoration: "none" }}>
                <ServicesesCard
                  serviceName={data.ServiceName}
                  src={data.imgSrc}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Banner />
    </div>
  );
};
