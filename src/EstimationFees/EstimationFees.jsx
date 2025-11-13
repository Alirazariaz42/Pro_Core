import React, { useState } from "react";
import { PageNameContainer } from "../Common_Components/PageNameContainer";
import "./EstimationFees.css";
import EstimatingFees from "../Images/estimatingfees.webp";
import callIcon from '../Images/callIcon.png'
import { UploadModal } from "../Common_Components/UploadsModal/UploadModal";
import { TwoBoxes } from "../Common_Components/TwoBoxes";
import { Banner } from "../Common_Components/Banner";
import Vector from "../Images/Vector.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const paragraph1 = (
  <>
    You can forward us the plans and mention us whether you would be bidding
    whole project or selected trades. After a detailed review of drawings – we
    will send you our fee proposal for your approval.
    <br></br>
    <br></br>
    Only after your approval – we will start the work and complete the job
    by/before your due date.
  </>
);
const paragraph2 = (
  <>
    Our work would be in editable excel sheet – if required, we can use your
    template or can put your company details on the estimate/proposal. For to do
    quantities takeoff – we use software Planswift, BlueBeam, On Screen Takeoff
    (OST).
    <br></br>
    Mostly we use Planswift. We will be very happy to provide Software files as
    well as Markups/color drawings (if required).
  </>
);
export const EstimationFees = () => {
  const [ModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!ModalOpen);
  };

  return (
    <div>
      <Helmet>
          <title>
          Procore Estimators Fees - Transparent Pricing
          </title>

          <meta
            name="description"
            content="Explore Procore Estimators fees for accurate construction cost estimate. Transparent pricing to help you plan your projects with confidence."
          />
        </Helmet>
      <PageNameContainer Pagename="Estimating Fees" src={EstimatingFees} />
      <div className="container">
        <p className="p-lg-4 p-2 paragraph">
          The <span style={{fontWeight:"bold", color:"#FF954D"}}>Procore Estimators</span> always like to hear from clients about the
          budget of the project so we have no fix rates about our services. But
          of course, we charge per project, and remain very low so that our
          clients can bid more projects with minimum fees. Estimating fee can be
          like $150, $250, $350, $550 and so on. We do jobs even in $75, $100 –
          it all depend on size/scope of the project.
        </p>
        <TwoBoxes
          title1="Our Process"
          paragraph1={paragraph1}
          paragraph2={paragraph2}
          title2="Format & Software"
        />
      </div>

      <div>
        <div className=" row w-100 m-0 justify-content-center">
          <div
            className="col-lg-4 col-md-4 col-sm-6 col-12"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="EstimationfeeCardContainer">
              <h6 className="fw-bold text-center m-0">Single trade pricing</h6>
              <p className="StartingAt">Starting at</p>
              <h5 className="fw-bold text-center mt-1">$150/trade</h5>
              <p className="paymentParagraph">
                We charge ($150 to $500) for a single trade project and the cost
                will vary on project Complexity.
              </p>
              <Link to="/ContactUs" className="EstimationfeeCardButton">
                Get started
              </Link>
              <button onClick={toggleModal} className="EstimationfeeCardButton">
                Upload plans
              </button>
              <h5 className=" text-center mt-2 mb-2">FEATURES</h5>
              <div className="EstimationfeePointsContainer">
                <img
                  className="pionttick "
                  src={Vector}
                  width={15}
                  height={15}
                  alt=""
                />
                <p className="EstimationfeePoints">
                  Turnaround Time 2 to 3 days
                </p>
              </div>

              <div className="EstimationfeePointsContainer">
                <img
                  className="pionttick "
                  src={Vector}
                  width={15}
                  height={15}
                  alt=""
                />
                <p className="EstimationfeePoints">
                  Any Trade or Any Kind of Project
                </p>
              </div>

              <div className="EstimationfeePointsContainer">
                <img
                  className="pionttick "
                  src={Vector}
                  width={15}
                  height={15}
                  alt=""
                />
                <p className="EstimationfeePoints">
                  Free Quote Within 5 to 10 Minutes
                </p>
              </div>

              <div className="EstimationfeePointsContainer">
                <img
                  className="pionttick "
                  src={Vector}
                  width={15}
                  height={15}
                  alt=""
                />
                <p className="EstimationfeePoints">Free Consultation</p>
              </div>

              <div className="EstimationfeePointsContainer">
                <img
                  className="pionttick "
                  src={Vector}
                  width={15}
                  height={15}
                  alt=""
                />
                <p className="EstimationfeePoints">24/7 Email Support</p>
              </div>

              <div className="EstimationfeePointsContainer">
                <img
                  className="pionttick "
                  src={Vector}
                  width={15}
                  height={15}
                  alt=""
                />
                <p className="EstimationfeePoints">Call Support</p>
              </div>

              <div className="EstimationfeePointsContainer">
                <img
                  className="pionttick "
                  src={Vector}
                  width={15}
                  height={15}
                  alt=""
                />
                <p className="EstimationfeePoints">
                  Immediate and Unlimited Revisions
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-4 col-sm-6 col-12"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="EstimationfeeCardContainer">
              <h6 className="fw-bold text-center m-0">Monthly</h6>
              <p className="StartingAt">Starting at</p>
              <h5 className="fw-bold text-center mt-1">$1500/mo</h5>
              <p className="paymentParagraph">
                We charge ($1500 to $2500) for a projects and the cost will vary
                on project Complexity.
              </p>
              <div style={{marginTop:"32px"}}>
              <Link to="/ContactUs" className="EstimationfeeCardButton">
                Get started
              </Link>
              <button onClick={toggleModal} className="EstimationfeeCardButton">
                Upload plans
              </button>
              </div>
             
              <h5 className=" text-center mt-2 mb-2">FEATURES</h5>
              <div className="EstimationfeePointsContainer ">
                <img
                  className="pionttick "
                  src={Vector}
                  width={15}
                  height={15}
                  alt=""
                />
                <p className="EstimationfeePoints">
                Bid Filing and Consultation
                </p>
              </div>

              <div className="EstimationfeePointsContainer">
                <img
                  className="pionttick "
                  src={Vector}
                  width={15}
                  height={15}
                  alt=""
                />
                <p className="EstimationfeePoints">
                Material Takeoffs and Cost Management
                </p>
              </div>

              <div className="EstimationfeePointsContainer">
                <img
                  className="pionttick "
                  src={Vector}
                  width={15}
                  height={15}
                  alt=""
                />
                <p className="EstimationfeePoints">
                Free Quote Within 5 to 10 Minutes
                </p>
              </div>

              <div className="EstimationfeePointsContainer">
                <img
                  className="pionttick "
                  src={Vector}
                  width={15}
                  height={15}
                  alt=""
                />
                <p className="EstimationfeePoints"> Free Consultation </p>
              </div>

              <div className="EstimationfeePointsContainer">
                <img
                  className="pionttick "
                  src={Vector}
                  width={15}
                  height={15}
                  alt=""
                />
                <p className="EstimationfeePoints">24/7 Email Support</p>
              </div>

              <div className="EstimationfeePointsContainer">
                <img
                  className="pionttick "
                  src={Vector}
                  width={15}
                  height={15}
                  alt=""
                />
                <p className="EstimationfeePoints">Call Support</p>
              </div>

             
            </div>
          </div>

          <div
            className="col-lg-4 col-md-4 col-sm-6 col-12"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="EstimationfeeCardContainer">
              <h6 className="fw-bold text-center m-0">Dedicated Estimators</h6>
              <p className="text-center mt-4 ">
              <a style={{textDecoration:"none",  }}  href="tel:+ 1 917 720 3892">
                
                <img src={callIcon} alt="" />
                <br></br>
                 <span style={{color:"black",  }}>+1 917 720 3892</span></a>
                 </p>

              <h6 className="fw-bold text-center mt-1">Call for Price</h6>

              
              <Link to="/ContactUs" className="EstimationfeeCardButton">
                Get started
              </Link>
              <button onClick={toggleModal} className="EstimationfeeCardButton">
                Upload plans
              </button>
              <h5 className=" text-center mt-2 mb-2">FEATURES</h5>
              <div className="EstimationfeePointsContainer">
                <img
                  className="pionttick "
                  src={Vector}
                  width={15}
                  height={15}
                  alt=""
                />
                <p className="EstimationfeePoints">
                Dedicated Resources
                </p>
              </div>

              <div className="EstimationfeePointsContainer">
                <img
                  className="pionttick "
                  src={Vector}
                  width={15}
                  height={15}
                  alt=""
                />
                <p className="EstimationfeePoints">
                Feasibility Studies
                </p>
              </div>

              <div className="EstimationfeePointsContainer">
                <img
                  className="pionttick "
                  src={Vector}
                  width={15}
                  height={15}
                  alt=""
                />
                <p className="EstimationfeePoints">
                Consultation on smartly filing bids
                </p>
              </div>

              <div className="EstimationfeePointsContainer">
                <img
                  className="pionttick "
                  src={Vector}
                  width={15}
                  height={15}
                  alt=""
                />
                <p className="EstimationfeePoints">Manage the bidding network profiles</p>
              </div>

              <div className="EstimationfeePointsContainer">
                <img
                  className="pionttick "
                  src={Vector}
                  width={15}
                  height={15}
                  alt=""
                />
                <p className="EstimationfeePoints">Project Scheduling</p>
              </div>

              <div className="EstimationfeePointsContainer">
                <img
                  className="pionttick "
                  src={Vector}
                  width={15}
                  height={15}
                  alt=""
                />
                <p className="EstimationfeePoints">Call Support</p>
              </div>

              <div className="EstimationfeePointsContainer">
                <img
                  className="pionttick "
                  src={Vector}
                  width={15}
                  height={15}
                  alt=""
                />
                <p className="EstimationfeePoints">
                Material Takeoffs
                </p>
              </div>
              <div className="EstimationfeePointsContainer">
                <img
                  className="pionttick "
                  src={Vector}
                  width={15}
                  height={15}
                  alt=""
                />
                <p className="EstimationfeePoints">
                Cost Management
                </p>
              </div>
              <div className="EstimationfeePointsContainer">
                <img
                  className="pionttick "
                  src={Vector}
                  width={15}
                  height={15}
                  alt=""
                />
                <p className="EstimationfeePoints">
                Turnaround Time 2 to 3 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Banner />

      {ModalOpen ? <UploadModal onCloseBtnClick={toggleModal} /> : <div></div>}
    </div>
  );
};
