import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../Images/logo.png";
import whatsApp from "../../Images/whatsApp.png";
import email from "../../Images/Email.png";
import LinkedIn from "../../Images/LinkedIn.png";
import Facebook from "../../Images/Facebook.png";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import logo5 from "../../Images/Group 547.png";

export const Header = (props) => {
  const changeModal = () => {
    props.onEstimationsButton();
  };
  return (
    <div style={{position:'relative', zIndex:'2', width:"100%", height:"135px"}}>
      <div style={{position:"fixed", width:"100%" }} >
        <div className="header">
          <div className="headerText">
            <div className="dis_None_onSmallDisipay">
              <p className="TURNAROUND_Time">TURNAROUND TIME 2-3 Days!</p>
              <span className="Affordable_text blinking-text fw-bold">
                Affordable Estimate (30% off)
              </span>
            </div>
          </div>
          <div className="headerNumber">
            <div>
              <p className="m-1">
                {" "}
                <img src={whatsApp} height={20} alt="whatsApp" />  
                 <a style={{ color:"white"}}  href="tel:+ 1 917 720 3892"> +1 917 720 3892</a>
              </p>
              <p className="m-1">
                {" "}
                <img src={email} height={20} alt="email" />{" "}
                <a style={{ color:"white"}} href="mailto:Dave@procoreestimators.com">Dave@procoreestimators.com</a>
        
              </p>
            </div>
          </div>
          <div className="headerSocialIcons">
            <div>
              <p className="m-1">
                {" "}
                <a
                  href="https://www.facebook.com/profile.php?id=100093809483357"
                  target="blank"
                  style={{textDecoration:  "none"}}
                  className="FacebookIcon"
                >
                  <img src={Facebook} />
                </a>
                <a
                  href="https://www.linkedin.com/company/81833472/admin/feed/posts/"
                  target="blank"
                  style={{textDecoration:  "none"}}
                  className="LinkedIcon"
                >
                  {" "}
                  <img src={LinkedIn} />
                </a>
              </p>
            </div>
          </div>
        </div>
        <Navbar   expand="lg" className=" navbarContainerstyle pt-0 pb-0">
          <Container fluid>
            <Navbar.Brand href="#" className="pt-0 pb-0">
            
              <img src={logo5} height={56} width={185} alt="logo" />
              {/* <div style={{height:'50px', width:'100px'}} className="LOGO_BG"></div> */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav style={{ marginLeft: "auto" }} className="" navbarScroll>
                <Nav.Link className="fw-bold">
                  <NavLink acti to="/">
                    {" "}
                    Home
                  </NavLink>
                </Nav.Link>

                <Nav.Link href="#action2" className="fw-bold">
                  <NavLink to="/Services"> Service</NavLink>
                </Nav.Link>

                <Nav.Link href="#action3" className="fw-bold">
                  <NavLink to="/about-us/"> About Us</NavLink>
                </Nav.Link>

                <Nav.Link href="#action4" className="fw-bold">
                  <NavLink to="/Payment"> Payment</NavLink>
                </Nav.Link>

                <Nav.Link href="#action5" className="fw-bold">
                  <NavLink to="/Testimonials"> Testimonials </NavLink>
                </Nav.Link>

                <Nav.Link href="#action6" className="fw-bold">
                  <NavLink to="/Samples"> Samples</NavLink>
                </Nav.Link>

                <Nav.Link className="fw-bold">
                  <NavLink to="/estimation-fee/"> Estimation Fee</NavLink>
                </Nav.Link>

                <Nav.Link className="fw-bold">
                  <NavLink to="contact-us/"> Contact Us </NavLink>
                </Nav.Link>
              </Nav>
              <div>
                {" "}
                <button
                  onClick={changeModal}
                  style={{ color: "white", fontWeight: "500" }}
                  className="orangeBGUploadPlans"
                >
                  Get Estimate
                </button>
                {/* <Button onClick={changeModal} style={{textShadow:'0px 0px 0px  black'}} variant="outline-warning fw-bold">Get Estimate</Button> */}
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>{" "}
    </div>
  );
};
