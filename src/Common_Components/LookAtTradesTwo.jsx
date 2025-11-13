import React from 'react'
import { CommonHeading } from "./CommonHeading";
import ServicePic17 from "../Images/ServicePic17.webp";
import ServicePic18 from "../Images/ServicePic18.webp";
import ServicePic19 from "../Images/ServicePic19.webp";
import ServicePic20 from "../Images/ServicePic20.webp";
import { Link } from "react-router-dom";
import { ServicesesCard } from "./ServicesesCard";

export const LookAtTradesTwo = () => {

    const TradeData = [
        {
            ServiceName: "HVAC",
            imgSrc: ServicePic17,
            redirectTo: "/hvac-estimating-services",
          },
          {
            ServiceName: "Commercial Estimating",
            imgSrc: ServicePic18,
            redirectTo: "/commercial-estimating-services/",
          },
          {
            ServiceName: "Industrial Estimating ",
            imgSrc: ServicePic19,
            redirectTo: "/industrial-estimating-services",
          },
          {
            ServiceName: "Residential Estimating",
            imgSrc: ServicePic20,
            redirectTo: "/residential-estimating-services/",
          },
      ];

  return (
    <div>
           <div className="container text-center">
      {" "}
      <CommonHeading text="Take a look at our Trades" />
      <div className="row w-100 m-0 justify-content-center">
        {TradeData.map((data) => (
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
    </div>
  )
}
