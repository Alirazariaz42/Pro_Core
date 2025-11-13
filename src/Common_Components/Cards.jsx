import React, { useState } from 'react';
import "../Common_Components/CommonStyles.css";
import { Link } from 'react-router-dom';

export const Cards = (props) => {
    const [style, setstyle] = useState(true)

    const onMouseEnter= ()=>{
        setstyle(false);

        
    }
     const onMouselEAVE= ()=>{
        setstyle(true);
    }
  return (
    <div className="CardContainer p-4">
      <Link style={{textDecoration:'none'}} to={props.redirect}>
    <div className="CardOuterBody" onMouseLeave={onMouselEAVE} onMouseEnter={onMouseEnter}>
      <div className="cardBodyContainer">
        <div style={{ width: "250px", height: "250px", borderRadius:'10px', overflow:'hidden' }}>
          <img src={props.src} style={{ width: "100%", height: "100%" }} />
        </div>
        <div className={style? "titleContainer_before" : "titleContainer_After"}>
          <div>  <p className="fw-bold m-0 p-0 text-center">{props.Title}</p></div>
        </div>
        <div className="cardText">
        <p className="">
          {props.text}
        </p>
        </div>
      </div>
    </div>
    </Link>
  </div>
  )
}
