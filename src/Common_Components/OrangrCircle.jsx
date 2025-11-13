import React, { useState } from "react";

export const OrangrCircle = (props) => {
  const [showdata, setShowData]= useState(false)

  const showText= ()=>{
    setShowData( (statePreviouisValue) =>(
      statePreviouisValue=!statePreviouisValue
    ))
  }
  const HideText= ()=>{
    setShowData( (statePreviouisValue) =>(
      statePreviouisValue=!statePreviouisValue
    ))
  }
  return (
    <div className={` mt-4 mb-4 ${showdata? "OrangrCircleContainer2": "OrangrCircleContainer"}`} onMouseEnter={showText} onMouseLeave={HideText}>
      <div className="OrangrCircleImgContainer">
        <img src={props.img} className="OrangrCircleImg" alt="img" />
      </div>
      <div className="OrangrCircletitleContainer">
        <h5 className="OrangrCircletitle">{props.title}</h5>
      </div>
      <div className={` ${showdata? "OrangrCircleText1" : "OrangrCircleText"}`}>
        <p style={{color:"white", fontSize:"13px"}}>
          {props.text}
        </p>
      </div>
    </div>
  );
};
