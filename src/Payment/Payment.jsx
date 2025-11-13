import React from "react";
import "./Payment.css";
import payment from "../Images/Payment.webp";
import PaymentsSoftwareContainerImg from "../Images/PaymentsSoftwareContainerImg.webp";
import { PageNameContainer } from "../Common_Components/PageNameContainer";
import { CommonHeading } from "../Common_Components/CommonHeading";
import payment1 from "../Images/Payment1.webp";
import payment6 from "../Images/Payment6.webp";
import payment2 from "../Images/Payment2.webp";
import payment3 from "../Images/Payment3.webp";
import payment4 from "../Images/Payment4.webp";
import payment7 from "../Images/Payment7.webp";
import payment5 from "../Images/Payment5.webp";
import { Banner } from "../Common_Components/Banner";
import { Helmet } from "react-helmet";

export const Payment = () => {
  return (
    <div>
      <Helmet>
          <title>
          Secure Payments - Procore Estimators
          </title>

          <meta
            name="description"
            content="Make secure payments for construction cost estimate with Procore Estimators. Easy and reliable transactions for your convenience."
          />
        </Helmet>
      <PageNameContainer Pagename="Payment" src={payment} />
      <div className="container">
        <CommonHeading text="Refund Policy" />
        <p className="paragraph">
           Our commitment is to
          consistently deliver maximum satisfaction and value-for-money services
          to our clients. However, it's worth noting that our policy revolves
          around exchanges rather than refunds.
        </p>
        <CommonHeading text="Payment Method" />
        <div className="PaymentsContiner">
          <div className="row m-0 w-100 justify-content-center">
            <div
              className="col-lg-3 col-md-3 col-sm-6 col-12 mt-md-5 mt-4"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="paymentImgContainer">
                <img src={payment1} alt="" height={80} width={100} />
              </div>
            </div>
            <div
              className="col-lg-3 col-md-3 col-sm-6 col-12 mt-md-5 mt-4"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="paymentImgContainer">
                <img src={payment2} alt="" height={80} width={100} />
              </div>
            </div>

            <div
              className="col-lg-3 col-md-3 col-sm-6 col-12 mt-md-5 mt-4"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="paymentImgContainer">
                <img src={payment3} alt="" height={80} width={100} />
              </div>
            </div>
            <div
              className="col-lg-3 col-md-3 col-sm-6 col-12 mt-md-5 mt-4"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="paymentImgContainer">
                <img src={payment4} alt="" height={80} width={100} />
              </div>
            </div>
            <div
              className="col-lg-3 col-md-3 col-sm-6 col-12 mt-md-5 mt-4"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="paymentImgContainer">
                <img src={payment5} alt="" height={80} width={100} />
              </div>
            </div>
            <div
              className="col-lg-3 col-md-3 col-sm-6 col-12 mt-md-5 mt-4"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="paymentImgContainer">
                <img src={payment6} alt="" height={80} width={100} />
              </div>
            </div>
            <div
              className="col-lg-3 col-md-3 col-sm-6 col-12 mt-md-5 mt-4"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="paymentImgContainer">
                <img src={payment7} alt="" height={80} width={100} />
              </div>
            </div>
          </div>
        </div>
        <CommonHeading text="Our Major Softwares" />
      </div>
      <div className="PaymentsSoftwareContainer">
        <div className="PaymentsSoftware">
          <div className=" row w-100 m-0 justify-content-center">
            <div
              className="col-md-4 col-sm-6 col-12 "
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div>
                <h3 className="h3">PLANSWIFT</h3>
                <p className="p">
                  The PlanSwift software was specifically designed for the
                  construction industry, but it is not limited to it.
                </p>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-6 col-12 "
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div>
                <h3 className="h3">ON SCREEN TAKEOFF</h3>
                <p className="p">
                  OST includes powerful takeoff tools such as Typical Areas,
                  Typical Groups
                </p>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-6 col-12"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div>
                <h3 className="h3">BLUEBEAM</h3>
                <p className="p">
                  A lot of our clients depend on Bluebeam for desktop, mobile,
                  and server solutions
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={PaymentsSoftwareContainerImg}  className=" PaymentsSoftwareContainerImg w-100" alt="" />
      </div>
      <Banner />
    </div>
  );
};
