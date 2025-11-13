import React, { useState } from "react";
import { PageNameContainer } from "../Common_Components/PageNameContainer";
import aboutus from "../Images/AboutUs (2).webp";
import "./ContactUs.css";
import style from "../Common_Components/UploadsModal/UploadModal.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Call2 from "../Images/Call2.png";

import Mail2 from "../Images/Mail2.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { OrangrCircle } from "../Common_Components/OrangrCircle";
import { Helmet } from "react-helmet";
export const ContactUs = () => {
  const [validated, setValidated] = useState(false);
  const [Name, setName] = useState("");
  const [Contact, setContact] = useState("");
  const [Email, setEmail] = useState("");
  const [File, setFile] = useState(null);
  const [Message, setMessage] = useState("");
  const [FileLink, setFileLink] = useState("");

  const [Namefilled, setNamefilled] = useState(false);
  const [Contactfilled, setContactfilled] = useState(false);
  const [EmailFilled, setEmailFilled] = useState(false);
  const [FileFilled, setFileFilled] = useState(false);
  const [MessageFilled, setMessageFilled] = useState(false);
  const [FileLinkFilled, setFileLinkFilled] = useState(false);
  const [BtnDisable, SetBtnDisable] = useState(true);

  const handleAttachmentChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onFormSubmit = async (e) => {
    if (EmailFilled && Email.includes("@")) {
      e.preventDefault();
      serAlert(true);

      const formData = new FormData();
      formData.append("name", Name);
      formData.append("email", Email);
      formData.append("Contact", Contact);
      formData.append("attachment", File);
      formData.append("link", FileLink);
      formData.append("Requirements", Message);

      formData.append("Subject", "Message From Procore Estimators");

      formData.append("recipient_name1", "MahRukh Tariq");
      formData.append("recipient_email1", "Director.mfbzone@gmail.com");

      formData.append("recipient_name2", "Muhammad Fiaz");
      formData.append("recipient_email2", "Dave@procoreestimators.com");
      try {
        const response = await fetch("https://api.bluebookestimators.com/", {
          method: "POST",
          body: formData,
        });

        if (response.status === 200) {
          serAlert(false);
          sendOk();
        } else {
          serAlert(false);
          sendErr();
        }
      } catch (error) {
        console.error("Error sending email:", error);
        //alert("Email sending failed");
        serAlert(false);
        sendErr();
      }
    }
  };

  const [Alert, serAlert] = useState(false);
  const alertMessage = (
    <span className={style.alertMessage}> Message Sending - - -</span>
  );
  const sendOk = () => toast.success("Message Send Successfully");
  const sendErr = () => toast.error("Message sending failed");
  const text = (
    <>
      <a
        style={{ textDecoration: "none", color: "white" }}
        className="Atag"
        href="tel:+ 1 917 720 3892"
      >
        {" "}
        +1 917 720 3892
      </a>
    </>
  );
  const text2 = (
    <>
      <a
        style={{ textDecoration: "none", color: "white", fontSize: "10px" }}
        className="Atag"
        href="mailto:Dave@procoreestimators.com"
      >
        Dave@procoreestimators.com
      </a>
    </>
  );
  return (
    <div>
      <Helmet>
        <title>
          Contact Us - Cost Estimating and Material Takeoffs Services
        </title>

        <meta
          name="description"
          content="Estimating experts for precise construction cost estimating and material takeoffs services. Contact us 24/7 for accurate solutions."
        />
      </Helmet>
      <PageNameContainer Pagename="Get Estimates" src={aboutus} />
      <div className="container-fluid mt-4">
        <div className="ContactUSFormContainer ">
          <div className="ContactDetainsContainer">
            <div className="contectCirculeContainer text-center">
              <div className={` mt-4 mb-4 OrangrCircleContainercontactus `}>
                <div className="OrangrCircleImgContainer">
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="tel:+ 1 917 720 3892"
                  >
                    <img
                      src={Call2}
                      className="OrangrCircleImgcontactus"
                      alt="img"
                    />
                  </a>
                </div>
                <div className="OrangrCircletitleContainer">
                  <p className="OrangrCircletitle">{text}</p>
                </div>
              </div>

              <div>
                <div className={` mt-4 mb-4 OrangrCircleContainercontactus `}>
                  <div className="OrangrCircleImgContainer">
                    <a
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "10px",
                      }}
                      className=""
                      href="mailto:Dave@procoreestimators.com"
                    >
                      <img
                        src={Mail2}
                        className="OrangrCircleImgcontactus"
                        alt="img"
                      />
                    </a>
                  </div>
                  <div className="OrangrCircletitleContainer">
                    <p className="OrangrCircletitle">{text2}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center detailsContainer">
            <p className="details">
              {" "}
              <a
                style={{ textDecoration: "none", color: "white" }}
                className="Atag"
                href="tel:+ 1 917 720 3892"
              >
                {" "}
                <img src={Call2} height={30} width={30} />
                +1 917 720 3892
              </a>
            </p>
            <p className="details">
              <a
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "12px",
                }}
                className="Atag"
                href="mailto:Dave@procoreestimators.com"
              >
                <img src={Mail2} height={30} width={30} />
                Dave@procoreestimators.com
              </a>
            </p>
          </div>
          <h2 className="fw-bold text-center">Get Your Estimations now</h2>

          {Alert ? alertMessage : ""}
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <div className="container">
            <Form
              validated={validated}
              onFormSubmit={onFormSubmit}
              autoComplete="off"
            >
              <Form.Group
                className="mb-4 mt-5"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  className={
                    Namefilled
                      ? `${style.form_controlstyle2}`
                      : `${style.form_controlstyle}`
                  }
                  type="text"
                  value={Name}
                  placeholder="Name Here---"
                  onChange={(e) => {
                    const value = e.target.value;
                    setName(value);
                    value === "" ? setNamefilled(false) : setNamefilled(true);
                  }}
                />
              </Form.Group>

              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Control
                  className={
                    EmailFilled
                      ? `${style.form_controlstyle2}`
                      : `${style.form_controlstyle}`
                  }
                  type="email"
                  placeholder="Email Here---"
                  required
                  value={Email}
                  onChange={(e) => {
                    const value = e.target.value;
                    setEmail(value);
                    value === "" ? setEmailFilled(false) : setEmailFilled(true);
                  }}
                />
              </Form.Group>

              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlInput3"
              >
                <Form.Control
                  className={
                    Contactfilled
                      ? `${style.form_controlstyle2}`
                      : `${style.form_controlstyle}`
                  }
                  type="text"
                  value={Contact}
                  placeholder="Contact Here---"
                  onChange={(e) => {
                    const value = e.target.value;
                    setContact(value);
                    value === ""
                      ? setContactfilled(false)
                      : setContactfilled(true);
                  }}
                />
              </Form.Group>

              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlInput4"
              >
                <Form.Control
                  type="text"
                  value={FileLink}
                  className={
                    FileLinkFilled
                      ? `${style.form_controlstyle2}`
                      : `${style.form_controlstyle}`
                  }
                  placeholder="File Link Here (Optional)---"
                  onChange={(e) => {
                    const value = e.target.value;
                    setFileLink(value);
                    value === ""
                      ? setFileLinkFilled(false)
                      : setFileLinkFilled(true);
                  }}
                />
              </Form.Group>

              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  className={
                    MessageFilled
                      ? `${style.form_controlstyle2}`
                      : `${style.form_controlstyle}`
                  }
                  as="textarea"
                  value={Message}
                  rows={2}
                  placeholder="Message Here---"
                  onChange={(e) => {
                    const value = e.target.value;
                    setMessage(value);
                    value === ""
                      ? setMessageFilled(false)
                      : setMessageFilled(true);
                  }}
                />
              </Form.Group>

              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlInput5"
              >
                <Form.Control
                  className={
                    FileFilled
                      ? `${style.form_controlstyle2}`
                      : `${style.form_controlstyle}`
                  }
                  type="file"
                  placeholder="Select File"
                  onChange={handleAttachmentChange}
                  onClick={(e) => {
                    const value = e.target.value;
                    // setFile(value);
                    setFileFilled(true);
                  }}
                />
              </Form.Group>

              <Form.Group className=" mt-3 text-center">
                <Button
                  variant=""
                  onClick={onFormSubmit}
                  // disabled={BtnDisable}
                  className={style.SubmitBtn}
                  type="submit"
                  size="lg"
                >
                  Send Message
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
