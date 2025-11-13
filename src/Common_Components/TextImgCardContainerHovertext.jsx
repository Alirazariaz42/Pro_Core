import React from 'react'
import {Cards} from '../Common_Components/Cards'
export const TextImgCardContainerHovertext = (props) => {
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
          <Cards Title={item.Title} src={item.imgSrc} text={item.text}/>
        </div>
      ))}
    </div>
  </div>
  )
}
