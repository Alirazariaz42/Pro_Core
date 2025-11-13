import { useState } from "react";
import { Contactform } from "./Common_Components/Contactform";
import { Footer } from "./Common_Components/Footer/Footer";
import { Header } from "./Common_Components/header/Header";
import { RootComponent } from "./RootComponent.js/RootComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { EstimationFees } from "./EstimationFees/EstimationFees";
import { UploadModal } from "./Common_Components/UploadsModal/UploadModal";
import { ContactUs } from "./ContactUs/ContactUs";
import { Testimonial } from "./Testimonial/Testimonial";
import { AboutUs } from "./AboutUs/AboutUs";
import { Payment } from "./Payment/Payment";
import { Services } from "./Services/Services";
import { CostEstimation } from "./CostEstimation/CostEstimation";
import { Material_TakeOff } from "./Material-TakeOff/Material_TakeOff";
import { Planning } from "./Planning/Planning";
import { Scheduling } from "./Scheduling/Scheduling";
import { ScrollToTop } from "./Common_Components/ScrollToTop";
import { GeneralRequirements } from "./GeneralRequireMents/GeneralRequirements";
import { SiteConstruction } from "./SiteConstruction/SiteConstruction";
import { Concrete } from "./Concrete/Concrete";
import { Masonry } from "./Masonry/Masonry";
import { Metals } from "./Metals/Metals";
import {ThermalandMoister} from "./ThermalandMoister/ThermalandMoister.jsx";
import {WoodandPlastics} from "./Wood&Plastics/WoodandPlastics";
import {SpecialConstruction} from "./SpecialConstruction/SpecialConstruction"
import {Specialities} from "./Specialities/Specialities"
import {MechanicalPlumbing} from "./MechanicalPlumbing/MechanicalPlumbing"
import {ConveyinySystem} from "./ConveyingSystem/ConveyinySystem"
import {Furnishing} from "./Furnishing/Furnishing"
import {Finishes} from "./Finishes/Finishes"
import {Electrical} from "./Electrical/Electrical"
import {DoorandWindows} from "./DoorandWindows/DoorandWindows"
import { HVAC } from "./HVAC/HVAC";
import { ResaidentialEstimation } from "./ResaidentialEstimation/ResaidentialEstimation";
import { Commercial_Estimation } from "./Commercial Estimation/Commercial_Estimation";
import { IndustrialEstimation } from "./IndustrialEstimation/IndustrialEstimation";
import { Equipment } from "./Equipment/Equipment";
import {LogoFile} from './LogoFile/LogoFile.jsx'
import { Samples } from "./Samples.jsx";
import { PageNotFound } from "./PageNotFound/PageNotFound.jsx";


function App() {
  const [ModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    // setModalOpen(!ModalOpen);

    setModalOpen((PreviousState) => {
      return !PreviousState;
    });
  };
  return (
    <div>
      <Header onEstimationsButton={toggleModal} />
      {/* https://www.procoreestimators.com/Home
      https://www.procoreestimators.com/ */}
      {ModalOpen ? <UploadModal onCloseBtnClick={toggleModal} /> : <div></div>}
      <ScrollToTop />
      <Routes>
        {/* <Route index element={<Home />} /> */}
        {/* <Route path="/Home" element={<Home />}></Route> */}
        <Route exact index  path="/" element={<Home />}></Route>
        <Route path="/estimation-fee/" element={<EstimationFees />} />
        <Route path="/contact-us/" element={<ContactUs />} />
        <Route path="/testimonials/" element={<Testimonial />} />
        <Route path="/about-us/" element={<AboutUs />} />
        <Route path="/payment/" element={<Payment />} />
        <Route path="/services/" element={<Services />} />
        <Route path="/cost-estimating-services/" element={<CostEstimation />} />
        <Route path="/planning/" element={<Planning />} />
        <Route path="/construction-takeoff-services/" element={<Material_TakeOff />} />
        <Route path="/cost-scheduling/" element={<Scheduling />} />
        <Route path="/general-requirements/" element={<GeneralRequirements />} />
        <Route path="/sitework-estimating-services/" element={<SiteConstruction />} />
        <Route path="/concrete-estimating-services/" element={<Concrete />} />
        <Route path="/masonry-estimating-services/" element={<Masonry />} />
        <Route path="/metals-estimating-services/" element={<Metals />} />
        <Route path="/wood-plastic-estimating-services/" element={< WoodandPlastics/>} />
        <Route path="/special-construction-estimating-services/" element={< SpecialConstruction/>} />
        <Route path="/specialities/" element={< Specialities/>} />
        <Route path="/mechanical-estimating-services/" element={< MechanicalPlumbing/>} />
        <Route path="/conveying-system/" element={< ConveyinySystem/>} />
        <Route path="/furnishing-estimating-services/" element={< Furnishing/>} />
        <Route path="/electrical-estimating-services/" element={< Electrical/>} />
        <Route path="/door-window-estimating-services/" element={< DoorandWindows/>} />
        <Route path="/interior-exterior-finishes/" element={< Finishes/>} />
        <Route path="/thermal-moisture-protection-estimating-services/" element={< ThermalandMoister/>} />
        <Route path="/hvac-estimating-services/" element={< HVAC/>} />
        <Route path="/residential-estimating-services/" element={< ResaidentialEstimation/>} />
        <Route path="/commercial-estimating-services/" element={< Commercial_Estimation/>} />
        <Route path="/industrial-estimating-services/" element={< IndustrialEstimation/>} />
        <Route path="/equipment-estimating-services/" element={< Equipment/>} />
        <Route path="/LogoFile" element={< LogoFile/>} />
        <Route path="/samples/" element={< Samples/>} />
        <Route extact path="/*" element={<PageNotFound />} /> 
        

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
