import React from "react";
import { CommonHeading } from "./CommonHeading";
import Service1 from "../Images/Service1.webp";
import Service2 from "../Images/Service2.webp";
import Service3 from "../Images/Service3.webp";
import Service4 from "../Images/Service4.webp";
import { Link } from "react-router-dom";
import { ServicesesCard } from "./ServicesesCard";

export const LookAtTrades = (props) => {
  const TradeData = [
    {
      ServiceName: "General Requirement",
      imgSrc: Service1,
      redirectTo: "/general-requirements/",
    },
    {
      ServiceName: "Site Works",
      imgSrc: Service2,
      redirectTo: "/sitework-estimating-services/",
    },
    { ServiceName: "Concrete", imgSrc: Service3, redirectTo: "/concrete-estimating-services/" },
    { ServiceName: "Masonry", imgSrc: Service4, redirectTo: "/masonry-estimating-services/" },
  ];
  return (
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
  );
};
