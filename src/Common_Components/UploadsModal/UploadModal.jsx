import React from "react";
import style from "./UploadModal.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
export const UploadModal = (props) => {
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
  const closeModal = () => {
    props.onCloseBtnClick();
  };
  const handleAttachmentChange = (e) => {
    setFile(e.target.files[0]);
  };
  const onFormSubmit = async (e) => {
    if (EmailFilled && Email.includes("@")) {
      serAlert(true);
      e.preventDefault();
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
          // setTimeout(()=>{
          //   closeModal()
          // },6000)

          // alert("Email sent successfully");
        } else {
          //alert("Email sending failed");
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
  return (
    <div className={style.ModalContainer}>
      <div className={`${style.dummuclass}`}>
        <button onClick={closeModal} className={style.closebtn}>
          X{" "}
        </button>
        <div className="text-center">
          <h3 className={`${style.Drawing}  fw-bold`}>Upload Drawings here</h3>
          <p className={`${style.note}`}>
            Note: Please fill all the mandatory fields and please upload plans
            or email us the link of your plans
          </p>
        </div>

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

          <Form.Group className="mb-4" controlId="exampleForm.ControlInput2">
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

          <Form.Group className="mb-4" controlId="exampleForm.ControlInput3">
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
                value === "" ? setContactfilled(false) : setContactfilled(true);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="exampleForm.ControlInput4">
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

          <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
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
                value === "" ? setMessageFilled(false) : setMessageFilled(true);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="exampleForm.ControlInput5">
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
              className={style.SubmitBtn}
              type="submit"
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};
