import React, { useState } from "react";
import "../Common_Components/CommonStyles.css";

export const HalfTextHalgImg = (props) => {
  
  return (
    <div className=" container">
      <div className="row w-100 justify-content-center m-0 pt-0">
        <div
          className="col-md-6 col-12"
          style={{
            display: "flex",
            alignItems:"center",
            justifyContent: "center",
          }}
        >
          <p className="HalfTextHalgImg_text p-0">{props.text}</p>
        </div>

        <div
          className="col-md-6 col-12 p-md-5 p-4"
          style={{
            display: "flex",
            alignItems:"center",
            justifyContent: "center",
           
           
          }}
        >
          <img src={props.src} alt="" style={{height:'100%', width:'100%'}} />
        </div>
      </div>

    
    </div>
  );
};
