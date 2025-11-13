import React from "react";
import { TextImgCard } from "./TextImgCard";
import { Cards } from "./Cards";

export const TextImgCardContainer = (props) => {
  return (
    <div>
      
      <div className="row w-100 m-0 justify-content-center">
        {props.Data.map((item) => (
          <div
            className="col-lg-3 col-md-6 col-sm-6 col-12 mt-4 mb-4"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
           
          <TextImgCard Title={item.Title} src={item.imgSrc} />
          </div>
        ))}
      </div>
    </div>
  );
};
