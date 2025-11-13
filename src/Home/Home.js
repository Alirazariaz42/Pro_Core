import React, { useState } from "react";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import CarousalImg1 from "../../src/Images/CarousalImg1.webp";
import CarousalImg2 from "../../src/Images/CarousalImg2.webp";
import { Button } from "react-bootstrap";
import { HalfTextHalgImg } from "../Common_Components/HalfTextHalgImg";
import { HalfTextHalfImg } from "../Common_Components/HalfTextHalfImg";
import HalfTextHalgImgpic from "../../src/Images/HalfTextHalfImg1.png";
import { Cards } from "../Common_Components/Cards";
import { RoundedCard } from "../Common_Components/RoundedCard";
import { OrangrCircle } from "../Common_Components/OrangrCircle";
import { Banner } from "../Common_Components/Banner";
import YchooseUsPic from "../Images/YChooseUsPic.webp";
import OrangeCirclerPic1 from "../Images/OrangeCircleImg1.png";
import OrangeCirclerPic2 from "../Images/OrangeCircleImg2.png";
import OrangeCirclerPic3 from "../Images/OrangeCircleImg3.png";
import OrangeCirclerPic4 from "../Images/OrangeCircleImg4.png";
import OrangeCirclerPic5 from "../Images/OrangeCircleImg5.png";

import roundesCornerPic1 from "../Images/roundedCornerCardPic1.webp";
import roundesCornerPic2 from "../Images/roundedCornerCardPic2.webp";
import roundesCornerPic3 from "../Images/roundedCornerCardPic3.png";
import roundesCornerPic4 from "../Images/roundedCornerCardPic4.png";
import roundesCornerPic5 from "../Images/roundedCornerCardPic5.webp";
import roundesCornerPic6 from "../Images/roundedCornerCardPic6.webp";
import roundesCornerPic7 from "../Images/roundedCornerCardPic7.webp";
import roundesCornerPic8 from "../Images/roundedCornerCardPic8.webp";
import roundesCornerPic9 from "../Images/roundedCornerCardPic9.webp";
import roundesCornerPic10 from "../Images/roundedCornerCardPic10.webp";

import sample1 from "../Images/Sample4.webp";
import sample2 from "../Images/Sample2.webp";
import sample3 from "../Images/Sample3.webp";
import sample4 from "../Images/Sample1.webp";
import sample5 from "../Images/Sample5.webp";
import sample6 from "../Images/Sample6.webp";

import footerLogo from "../Images/LogoWhite.png";
import logo3rd from "../Images/BannerBGPic.png";
import logo2nd from "../Images/LogoChanged.jpeg";

import { Boxes } from "../Common_Components/Boxes";
import planning from "../Images/Planning.webp";
import Scheduling from "../Images/Scheduling (3).webp";
import QuantitesTakeoff from "../Images/QuantitiesTakeOff.webp";
import CostEstimation from "../Images/CostEstimation(1).webp";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import { Header } from "../Common_Components/header/Header";
import { Footer } from "../Common_Components/Footer/Footer";
import { UploadModal } from "../Common_Components/UploadsModal/UploadModal";
import { CommonHeading } from "../Common_Components/CommonHeading";

import CountUp, { useCountUp } from "react-countup";

// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Helmet } from "react-helmet";

export const Home = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1300, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 4, // Number of items to show at this breakpoint
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 3, // Number of items to show at this breakpoint
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 2, // Number of items to show at this breakpoint
          slidesToScroll: 1,
          dots: false,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 540, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 1, // Number of items to show at this breakpoint
          slidesToScroll: 1,
          dots: false,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true,
        },
      },
    ],
  };

  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  const text1 = (
    <>
      At{" "}
      <span style={{ color: "#FF7518", fontWeight: "700", marginRight: "7px" }}>
        {" "}
        Procore Estimators
      </span>
      we offer our{" "}
      <b>
        {" "}
        Cost Estimating, Quantities & Material Takeoff & Scheduling services.
      </b>{" "}
      We have been around in the construction industry for 10 long years through
      that we have developed a vast team of construction estimators. This way,
      we have a proven track record of delivering accurate material estimates to
      our valuable clients. Thus, our portfolio includes services for every
      construction trade. Further, we do all this in the fastest turnaround
      time.
    </>
  );
  const text2 = (
    <>
      <span style={{ color: "white" }}>
        {" "}
        Selecting the appropriate construction estimation firm is vital for
        project triumph. Precise estimations lay the groundwork for budget
        management, resource distribution, and punctual implementation. The
        optimal selection guarantees economic feasibility, educated choices, and
        aggressive competition. It reduces potential threats, improves customer
        contentment, and demonstrates proficiency. Allocate funds prudently for
        spot-on assessments, establishing the route for outstanding project
        outcomes and sustained expansion.
      </span>
    </>
  );
  const cardsArray = [
    {
      Title: "Cost Estimation",
      text: "Cost estimation is most important and useful technique to get to know what is the budget and time duration to complete entire project but it’s very hectic and time consuming task",
      src: CostEstimation,
      redirect: "/cost-estimating-services/",
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
  const CircleCardArray = [
    {
      title: "Project",
      img: OrangeCirclerPic1,
      text: `Avail yourself of the option to either upload your plans directly or forward them via email to Dave@-procoreestimators.com. `,
    },
    {
      title: "Reviewing",
      img: OrangeCirclerPic2,
      text: "Upon submission of the proposal, our team thoroughly examines the drawings provided by you.",
    },
    {
      title: "Approval",
      img: OrangeCirclerPic3,
      text: "Following our thorough review, we will furnish you with a comprehensive fee proposal for your careful consideration and approval.",
    },
    {
      title: "RFI/Clarification",
      img: OrangeCirclerPic4,
      text: "The RFI email will always be sent to you if anything is unclear in the plans/drawings/notes, or if required with your approval we can complete the job with appropriate assumptions.",
    },
    {
      title: "Submission",
      img: OrangeCirclerPic5,
      text: "Our skilled team of estimators deliver estimates that includes the quantities and pricing for all materials and labor. Our estimate and takeoff sheet will be delivered in EXCEL format, using either our template or the client’s template, as requested.",
    },
  ];
  const RoundedCardArray = [
    {
      img: roundesCornerPic1,
      title: "General Contractors",
      paragraph:
        "Create winning proposals, find new projects, and receive quality bids faster..",
    },
    {
      img: roundesCornerPic2,
      title: "Home Builders",
      paragraph:
        "Receive quality bids faster by creating winning proposals, finding new projects, and finding new opportunities..",
    },
    {
      img: roundesCornerPic3,
      title: "Subcontractors",
      paragraph:
        " Expand your network, find new quality projects Cost Accuracy, Competitive Bidding Project Planning with us",
    },
    {
      img: roundesCornerPic4,
      title: "Developers",
      paragraph:
        "Financial planning, mitigate risks, assess project feasibility, secure funding, maintain a competitive edge, & optimize project scheduling.",
    },

    {
      img: roundesCornerPic5,
      title: "Architects",
      paragraph:
        "Offering volumetric calculations and cost evaluations based on expertly devised architectural plans, regardless of the design and planning phase.",
    },
    {
      img: roundesCornerPic6,
      title: "Suppliers",
      paragraph:
        "Start to boost sales with less effort with direct access to funded projects.",
    },
    {
      img: roundesCornerPic7,
      title: "Remodeling Constructors",
      paragraph:
        " Precise budget management, putting forth strong proposals, utilizing resources optimally and organizing and implementing refurbishing assignments efficiently.",
    },
    {
      img: roundesCornerPic8,
      title: "Vendors",
      paragraph:
        "With us get pricing strategies, prepare competitive bids, plan and allocate resources efficiently, negotiate contracts confidently,",
    },
    {
      img: roundesCornerPic9,
      title: "Engineers",
      paragraph:
        "With us get project planning, budgeting,  client communication, and informed decision-making throughout the project lifecycle.",
    },
    {
      img: roundesCornerPic10,
      title: "Home Owners",
      paragraph: "Get end-to-end preconstruction coverage and collaborations.",
    },
  ];
  const [ModalOpen, setModalOpen] = useState(false);

  const changeModal = () => {
    setModalOpen(!ModalOpen);
  };

  return (
    <div>
       <Helmet>
          <title>
          Best Construction Estimating Services (Top Ranked Estimating Company): Procore Estimators
          </title>

          <meta
            name="description"
           content="Procore Estimators is the Hub of precise and detailed Construction Estimating Services for General Contractors, Subcontractors, Builders with fast turnaround."
          />
        </Helmet>

      {ModalOpen ? <UploadModal onCloseBtnClick={changeModal} /> : <div></div>}

      <div className="">
        <Carousel className="" data-bs-theme="dark">
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100 crausalImgHeight"
              src={CarousalImg1}
              alt="First slide"
            />
            <Carousel.Caption className="Carousal_ItemInner_TextContainer">
              <h5 className="carousalHeading">
                We help you bid faster on more projects.
              </h5>
              <h5 className="carousalSubHeading">
                Material Takeoff & Construction Estimating Services
              </h5>
              <div className="mt-3">
                {" "}
                <button onClick={changeModal} className="orangeBGUploadPlans">
                  Send your plans to PROCORE Estimators
                </button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100 crausalImgHeight"
              src={CarousalImg2}
              alt="Second slide"
            />
            <Carousel.Caption className="Carousal_ItemInner_TextContainer2">
              <div className="align_left">
                <h5 className="carousal2ndHeading">
                  Faster Takeoffs, more Precise Estimates, and more Competitive
                  bids at your fingertips!
                </h5>
                <p className="carousal2ndSubHeading">
                  Set your projects up for success with ease and accuracy by
                  quickly performing Cost Estimating, Quantities & Material
                  Takeoff & Scheduling
                </p>
                <div style={{ textAlign: "start" }} className="mt-3">
                  <button onClick={changeModal} className="orangeBGUploadPlans">
                    Upload Plans
                  </button>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container mt-5">
        {" "}
        <CommonHeading text="CONSTRUCTION ESTIMATING SERVICES" />
      </div>
      <HalfTextHalgImg src={HalfTextHalgImgpic} text={text1} />

      <div className=" container-xl">
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
        </div>
      </div>
      <div className="container ">
        <div className="row w-100 m-0 justify-content-center">
          {CircleCardArray.map((data) => (
            <div
              className="col "
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="mailto:Dave@procoreestimators.com"
              >
                <OrangrCircle
                  title={data.title}
                  img={data.img}
                  text={data.text}
                />
              </a>
            </div>
          ))}
        </div>
        <CommonHeading text="Our Clients" />
      </div>
      {/* <div className="RoundedCardsouterContainer">
        <div className=" container-fluid RoundedCardsContainer">
          {RoundedCardArray.map((data) => (
            <RoundedCard
              img={data.img}
              title={data.title}
              paragraph={data.paragraph}
            />
          ))}
        </div>
      </div> */}
      <div className=" RoundedCardsouterContainer mt-5 mb-5">
        <div className="   p-5 ">
          <Slider {...settings}>
            <div>
              <RoundedCard
                img={RoundedCardArray[0].img}
                title={RoundedCardArray[0].title}
                paragraph={RoundedCardArray[0].paragraph}
              />
            </div>
            <div>
              <RoundedCard
                img={RoundedCardArray[1].img}
                title={RoundedCardArray[1].title}
                paragraph={RoundedCardArray[1].paragraph}
              />
            </div>
            <div>
              <RoundedCard
                img={RoundedCardArray[2].img}
                title={RoundedCardArray[2].title}
                paragraph={RoundedCardArray[2].paragraph}
              />
            </div>
            <div>
              <RoundedCard
                img={RoundedCardArray[3].img}
                title={RoundedCardArray[3].title}
                paragraph={RoundedCardArray[3].paragraph}
              />
            </div>
            <div>
              <RoundedCard
                img={RoundedCardArray[4].img}
                title={RoundedCardArray[4].title}
                paragraph={RoundedCardArray[4].paragraph}
              />
            </div>
            <div>
              <RoundedCard
                img={RoundedCardArray[5].img}
                title={RoundedCardArray[5].title}
                paragraph={RoundedCardArray[5].paragraph}
              />
            </div>

            <div>
              <RoundedCard
                img={RoundedCardArray[6].img}
                title={RoundedCardArray[6].title}
                paragraph={RoundedCardArray[6].paragraph}
              />
            </div>

            <div>
              <RoundedCard
                img={RoundedCardArray[7].img}
                title={RoundedCardArray[7].title}
                paragraph={RoundedCardArray[7].paragraph}
              />
            </div>

            <div>
              <RoundedCard
                img={RoundedCardArray[8].img}
                title={RoundedCardArray[8].title}
                paragraph={RoundedCardArray[8].paragraph}
              />
            </div>

            <div>
              <RoundedCard
                img={RoundedCardArray[9].img}
                title={RoundedCardArray[9].title}
                paragraph={RoundedCardArray[9].paragraph}
              />
            </div>
          </Slider>
        </div>
      </div>
      <div className="container mt-5">
        <CommonHeading text="Why you should choose our service" />
        <Boxes />
      </div>
      <Banner />
      <div>
        <div className="BlackBg mt-5 mb-5">
          <div className="container">
            <h3 className="text-center YchooseUsText">
              Why is it important to choose the right company?
            </h3>
            <HalfTextHalfImg src={YchooseUsPic} text={text2} />
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="SamplesContainer ">
          <CommonHeading text="Samples" />
          <div className="row w-100 m-0 mt-4">
            <div className="col-md-7">
              <div className="row ">
                <div className="col-md-5 p-1">
                  <div
                    className="SampleImgContainer"
                    style={{ height: "170px" }}
                  >
                    <img src={sample1} />
                  </div>
                </div>
                <div className="col-md-7 p-1">
                  <div
                    className="SampleImgContainer"
                    style={{ height: "170px" }}
                  >
                    <img src={sample2} />
                  </div>
                </div>
                <div className="col-md-7 p-1">
                  <div
                    className="SampleImgContainer"
                    style={{ height: "170px" }}
                  >
                    <img src={sample4} />
                  </div>
                </div>
                <div className="col-md-5 p-1">
                  <div
                    className="SampleImgContainer"
                    style={{ height: "170px" }}
                  >
                    <img src={sample3} />
                  </div>
                </div>{" "}
              </div>
            </div>
            <div className="col-md-5 p-2">
              <div
                className="SampleImgContainer"
                style={{
                  height: "348px",
                }}
              >
                <img src={sample5} />
              </div>
            </div>
            <div className="col-md-12 p-2">
              <div
                className="SampleImgContainer"
                style={{
                  height: "170px",
                }}
              >
                <img src={sample6} />
              </div>
            </div>{" "}
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5 mb-5">
        <div className="BlackBg p-5  ">
          <div className="row w-100 m-0 justify-content-center  ">
            <div
              className="col-md-3 col-sm-6 col-12"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="text-center">
                <h1 className="fw-bold">
                  {" "}
                  <CountUp end={3500} enableScrollSpy />+
                </h1>
                <p>Projects</p>
              </div>
            </div>

            <div
              className="col-md-3 col-sm-6 col-12 pt-3"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="text-center">
                <h1 className="fw-bold">
                  {" "}
                  <CountUp end={700} enableScrollSpy />+
                </h1>
                <p>Clients</p>
              </div>
            </div>

            <div
              className="col-md-3 col-sm-6 col-12 pt-3"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="text-center">
                <h1 className="fw-bold">
                  {" "}
                  <CountUp end={32} enableScrollSpy />+
                </h1>
                <p>Estimators Staff</p>
              </div>
            </div>

            <div
              className="col-md-3 col-sm-6 col-12 pt-3"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="text-center">
                <h1 className="fw-bold">
                  {" "}
                  <CountUp end={32} enableScrollSpy />+
                </h1>
                <p> Management Staff</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
