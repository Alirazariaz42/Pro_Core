import React, { useState } from "react";
// import Slider from "react-slick";
import "./Testimonial.css";
import testimpnial1 from "../Images/Testimonial1.jpg";
import testimpnial2 from "../Images/Testimonial2.jpg";
import testimpnial3 from "../Images/Testimonial3.jpg";
import testimpnial4 from "../Images/Testimonial4.jpg";
import testimpnial5 from "../Images/Testimonial5.jpg";
import leftArrow from "../Images/left-arrow.png";
import rightArrow from "../Images/right-arrow.png";
import { Button } from "react-bootstrap";
import { PageNameContainer } from "../Common_Components/PageNameContainer";
import testimonials from "../Images/Testimonials.webp";
import { Banner } from "../Common_Components/Banner";
import { Helmet } from "react-helmet";
export const Testimonial = () => {
  const [testimpnial1State, setTestimonial1] = useState({
    img: testimpnial1,
    Quots: "Jonah Roach",
    text: `Thank you for getting back to remind me. I think your take-off was well done. I do intend to use you again; however I do not have anything at the moment as my guy has done the last couple for me, but we are starting a hotel in a few weeks, and he will be tied up in the field most of the time and will not have time for the take offs. I will certainly let you know when the next opportunity arises for me to use your service's. I will be in touch.`,
  });
  const [testimpnial2State, setTestimonial2] = useState({
    img: testimpnial2,
    Quots: "Sonia Bean",
    text: "Employing the building estimation platform has revolutionized my enterprise. The precise and comprehensive expense projections have not just increased my proposal success rate, but also guaranteed that my undertakings remain fiscally responsible. The intuitive navigation and swift computations establish it as an essential instrument in my construction repertoire.",
  });
  const [testimpnial3State, setTestimonial3] = useState({
    img: testimpnial3,
    Quots: "Kaleb Figueroa",
    text: "Kaleb Figuero Appreciate the valuation. We adjusted the figures with our parameters and arrived approximately 75k lower. Nonetheless, we secured the project. Anticipate forwarding the subsequent blueprints to you shortly.",
  });
  const [testimpnial4State, setTestimonial4] = useState({
    img: testimpnial4,
    Quots: "Stacy Cameron",
    text: "Without a doubt, the Procore estimators provides the swiftest and most expert estimating solutions I've experienced in the construction industry. Their work was top-notch, and the estimates I required were delivered promptly. Communication was a breeze and consistently timely, and they made any necessary adjustments with remarkable speed. I'm eager to entrust them with my future business.",
  });
  const [testimpnial5State, setTestimonial5] = useState({
    img: testimpnial5,
    Quots: "Jerry Kim  ",
    text: "Without a doubt, the Procore estimators provides the swiftest and most expert estimating solutions I've experienced in the construction industry. Their work was top-notch, and the estimates I required were delivered promptly. Communication was a breeze and consistently timely, and they made any necessary adjustments with remarkable speed. I'm eager to entrust them with my future business.",
  });

  const leftArrorClick = () => {
    setTestimonial5(testimpnial1State);
    setTestimonial1(testimpnial2State);
    setTestimonial2(testimpnial3State);
    setTestimonial3(testimpnial4State);
    setTestimonial4(testimpnial5State);
  };
  const RightArrorClick = () => {
    setTestimonial1(testimpnial5State);
    setTestimonial2(testimpnial1State);
    setTestimonial3(testimpnial2State);
    setTestimonial4(testimpnial3State);
    setTestimonial5(testimpnial4State);
  };
  return (
    <>
      <Helmet>
        <title>Testimonials - Procore Estimators</title>

        <meta
          name="description"
          content="What do our clients say about Procore Estimators? Real testimonials showcasing our commitment to accurate construction cost estimate."
        />
      </Helmet>
      <PageNameContainer Pagename="Testimonials" src={testimonials} />
      <div className="testimonialContainer mt-5 mb-5">
        <div className="imgContainer4_5">
          <img
            src={testimpnial1State.img}
            alt=""
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div className="imgContainer2_3">
          {" "}
          <img
            src={testimpnial2State.img}
            alt=""
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div className="imgContainerCentral">
          {" "}
          <img
            src={testimpnial3State.img}
            alt=""
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div className="imgContainer2_3">
          {" "}
          <img
            src={testimpnial4State.img}
            alt=""
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div className="imgContainer4_5">
          {" "}
          <img
            src={testimpnial5State.img}
            alt=""
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div className="QuotesContainer">
          <h3>{testimpnial3State.Quots} </h3>
          <p>{testimpnial3State.text}</p>
        </div>
        <div className="arrowsContainer">
          <Button onClick={leftArrorClick}>
            <img
              src={leftArrow}
              height={20}
              width={20}
              style={{ verticalAlign: "sub" }}
            />
          </Button>
          <Button onClick={RightArrorClick}>
            <img
              src={rightArrow}
              height={20}
              width={20}
              style={{ verticalAlign: "sub" }}
            />
          </Button>
        </div>
      </div>

      <Banner />
    </>
  );
};
