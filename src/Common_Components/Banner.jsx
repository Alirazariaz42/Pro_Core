import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { UploadModal } from "./UploadsModal/UploadModal";
import DropBox from "../Images/Ellipse 5.webp";
import DropBox2 from "../Images/Ellipse 6.webp";

export const Banner = () => {
  const [ModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!ModalOpen);
  };
  return (
    <>
      <div className="bannerContainer">
        <div className="row w-100 m-0  justiyfcontent-center">
          <div
            className="col-md-3 BannerButton  text-center mt-4"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <Button variant="light " onClick={toggleModal}>
                {" "}
                Upload Plans
              </Button>
              <p className="text-center mt-2">
                <img
                  src={DropBox}
                  style={{ cursor: "pointer" }}
                  onClick={toggleModal}
                  height={45}
                  width={45}
                  alt=""
                />
                <img
                  src={DropBox2}
                  style={{ cursor: "pointer" }}
                  onClick={toggleModal}
                  height={45}
                  width={45}
                  alt=""
                />
              </p>
            </div>
          </div>

          <div
            className="col-md-9  text-center"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <p>
                For a quick quote based on your project scope, call us at{" "}
                <a
                  style={{ color: "white", marginRight: "5px" }}
                  href="tel:+ 1 917 720 3892"
                >
                  {" "}
                  +1 917 720 3892
                </a>
                or email us at{" "}
                <a
                  style={{ color: "white" }}
                  href="mailto:Dave@procoreestimators.com"
                >
                  Dave@procoreestimators.com
                </a>
              </p>
            </div>{" "}
          </div>
        </div>

        {ModalOpen ? (
          <UploadModal onCloseBtnClick={toggleModal} />
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};
