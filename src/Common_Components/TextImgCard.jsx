import React from "react";

export const TextImgCard = (Props) => {
  return (
    <div>
      <div className="TextImgCardContainer">
        <div className="TextImgCardHeadingContainer">
          <h5 className="text-center p-3">{Props.Title}</h5>
        </div>
        <div className="TextImgCardImgContainer">
          <img src={Props.src} alt="" />
        </div>
      </div>
    </div>
  );
};
