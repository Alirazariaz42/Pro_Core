import React from 'react'

export const PageNameContainer = (props) => {
  return (
    <div>
        <div className='pageNameContaioner' >
            <img src={props.src} style={{width:'100%', height:"100%", }}/>
            <h2 className='fw-bold'>{props.Pagename}</h2>
        </div>
    </div>
  )
}
