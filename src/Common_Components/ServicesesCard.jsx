import React from "react";
import "./CommonStyles.css";
import { Link } from "react-router-dom";
export const ServicesesCard = (props) => {
  return (
   
      
      <div >
          <div className="ServicesCardContainer ">
            <div className="ServicesCardImgContainer ">
              <img src={props.src} alt="" />
            </div>

            <div className="ServicesCardNameContainer">
              <h5>{props.serviceName}</h5>
            </div>
          </div>
       
      </div>
   
  );
};
