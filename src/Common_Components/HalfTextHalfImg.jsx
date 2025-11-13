import React from "react";

export const HalfTextHalfImg = (props) => {
  return (
    <div>
      <div className="row w-100 m-0 justify-content-center">
        <div
          className="col-md-6 col-12"
          style={{
            display: "flex",
           
            alignItems:"center",
          }}
        >
          <div>
            <p className="HalfTextHalgImg_text">{props.text}</p>
          </div>
        </div>
        <div
          className="col-md-6 col-12 "
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div className="text-center ">
            <img
              src={props.src}
              style={{ width: "100%", height: "90%" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
