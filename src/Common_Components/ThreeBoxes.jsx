import React from "react";

export const ThreeBoxes = (props) => {
  return (
    <div>
      <div className="mt-5">
        {" "}
        <div className="row w-100 justify-content-center m-0 mb-5 p-0">

          <div
            className="col-lg-4 col-12 p-2"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px",
            }}
          >
            <div className="OrangeBox">
              <h3 className="BoxesTitle">{props.title1}</h3>
              <p className="BoxesParagraph">{props.paragraph1}</p>
            </div>
          </div>

          <div
            className="col-lg-4 col-12 p-2"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px",
            }}
          >
            <div className="BlackBox">
              <h3 className="BoxesTitle">{props.title2}</h3>
              <p className="BoxesParagraph">{props.paragraph2}</p>
            </div>
          </div>

          <div
            className="col-lg-4 col-12 p-2"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px",
            }}
          >
            <div className="OrangeBox">
              <h3 className="BoxesTitle">{props.title3}</h3>
              <p className="BoxesParagraph">{props.paragraph3}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
