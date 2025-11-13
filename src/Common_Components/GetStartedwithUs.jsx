import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CommonHeading } from './CommonHeading'
import { UploadModal } from "./UploadsModal/UploadModal";

export const GetStartedwithUs = () => {
    const [ModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
      setModalOpen(!ModalOpen);
    };
  return (
    <>
        <div className='container'>
          <CommonHeading text="Are You Ready To Get Started With Us!" />
          <h3>1- Upload Your Plans</h3>
          <p className="paragraph">
            <a className='blinking-textClickHere' style={{ color: "#FF7518", cursor:"pointer" }} onClick={toggleModal} > Click here </a>
             to upload your plans. We accept Google Drive links, Dropbox links, and any type of file format including PDF files and your plans can be Bid
            set, Schematic, Design Development, Construction document, or
            conceptual drawings.
          </p>
          <h3>2- Get a Quote</h3>
          <p className="paragraph">
            Quotes will be based on invoice, delivery date, and turnaround time.
          </p>
          <h3>3- Receive Estimate</h3>
          <p className="paragraph">
            Estimates will be delivered to you in EXCEL sheets comprising all
            the material and labor pricing with  MasterFormat or your customized format.
          </p>
        </div>

        {ModalOpen ? (
          <UploadModal onCloseBtnClick={toggleModal} />
        ) : (
          <div></div>
        )}
    </>
  )
}
