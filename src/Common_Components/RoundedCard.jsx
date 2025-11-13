import React from "react";

export const RoundedCard = (props) => {
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <div className="RoundedCardContainer text-center">
        <div className="RoundedCardImgContainer">
          
            <img className="RoundedCardImg" src={props.img} alt="img" />
          
        </div>
        <h6 className="RoundedCardTitle">{props.title}</h6>
      <div className="RoundedCardParagraphContainer">
      <p className="RoundedCardParagraph">{props.paragraph}</p>
      </div>
      </div>
    </div>
  );
};
