import React from 'react'
import sample1 from "./Images/Sample4.webp";
import sample2 from "./Images/Sample2.webp";
import sample3 from "./Images/Sample3.webp";
import sample4 from "./Images/Sample1.webp";
import sample5 from "./Images/Sample5.webp";
import sample6 from "./Images/Sample6.webp";
import { Helmet } from 'react-helmet';
export const Samples = () => {
  return (
    <div>
       <Helmet>
          <title>
           Procore Estimators: Explore Samples Quantities Takeoff
          </title>

          <meta
            name="description"
            content="Explore our comprehensive work samples, featuring detailed quantity takeoffs and estimates accompanied by markup plans for your review."
          />
        </Helmet>
    <div className='container'>
         <div className="row w-100 m-0 mt-4">
            <div className="col-md-7">
              <div className="row ">
                <div className="col-md-5 p-1">
                  <div
                    className="SampleImgContainer"
                    style={{ height: "170px" }}
                  >
                    <img src={sample1} />
                  </div>
                </div>
                <div className="col-md-7 p-1">
                  <div
                    className="SampleImgContainer"
                    style={{ height: "170px" }}
                  >
                    <img src={sample2} />
                  </div>
                </div>
                <div className="col-md-7 p-1">
                  <div
                    className="SampleImgContainer"
                    style={{ height: "170px" }}
                  >
                    <img src={sample4} />
                  </div>
                </div>
                <div className="col-md-5 p-1">
                  <div
                    className="SampleImgContainer"
                    style={{ height: "170px" }}
                  >
                    <img src={sample3} />
                  </div>
                </div>{" "}
              </div>
            </div>
            <div className="col-md-5 p-2">
              <div
                className="SampleImgContainer"
                style={{
                  height: "348px",
                }}
              >
                <img src={sample5} />
              </div>
            </div>
            <div className="col-md-12 p-2">
              <div
                className="SampleImgContainer"
                style={{
                  height: "170px",
                }}
              >
                <img src={sample6} />
              </div>
            </div>{" "}
          </div>
    </div>
    </div>
    

  )
}
