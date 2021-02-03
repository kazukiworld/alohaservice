import React, { useEffect, Fragment } from "react";
import "./App.css";
import Home from "./Components/Home Section/Home.js";
import Testimonials from "./Components/Testimonials/Testimonials";
import HeroPic from "./assets/Bedroom.png";
import Service from "./Components/Service Section/Service";
import About from "./Components/About Section/About";
import Privacy from "./Components/Privacy/Privacy";
import Information from "./Components/Information Section/Information";
import Contact from "./Components/Contact Section/Contact";
import { BrowserRouter, Switch, Route ,withRouter} from "react-router-dom";
import VillaPage from "./Components/Service Pages/VillaPage";
import HousePage from "./Components/Service Pages/HousePage";
import MoveoutPage from "./Components/Service Pages/MoveoutPage";
import OfficePage from "./Components/Service Pages/OfficePage";
import RestaurantPage from "./Components/Service Pages/RestaurantPage";
import PartyPage from "./Components/Service Pages/PartyPage";
import CarpetPage from "./Components/Service Pages/CarpetPage";
import SeniorPage from "./Components/Service Pages/SeniorPage";
import SpaPage from "./Components/Service Pages/SpaPage";
import HomeEn from "./Components/Home Section/HomeEn";
import TestimonialsEn from "./Components/Testimonials/TestimonialsEn";
import ServiceEn from "./Components/Service Section/ServiceEn";
import AboutEn from "./Components/About Section/AboutEn";
import PrivacyEn from "./Components/Privacy/PrivacyEn";
import InformationEn from "./Components/Information Section/InformationEn";
import ContactEn from "./Components/Contact Section/ContactEn";
import ScrollToTop from "./Components/ScrollToTop";
import CarpetPageEn from './Components/Service Pages En/CarpetPageEn'
import SpaPageEn from "./Components/Service Pages En/SpaPageEn";
import PartyPageEn from "./Components/Service Pages En/PartyPageEn";
import seniorPageEn from "./Components/Service Pages En/SeniorPageEn";
import RestaurantPageEn from "./Components/Service Pages En/RestaurantPageEn";
import OfficePageEn from "./Components/Service Pages En/OfficePageEn";
import MoveoutPageEn from "./Components/Service Pages En/MoveoutPageEn";
import housePageEn from "./Components/Service Pages En/HousePageEn";
import VillaPageEn from "./Components/Service Pages En/VillaPageEn";

function JapaneseWebsite() {
  return (
    <div className="App">
      <img className="HomePic" src={HeroPic} alt="picture"/>
      <Home />
      <Testimonials />
      <Service />
      <About />
      <Privacy />
      <Information />
      <Contact />
    </div>
  );
}


function EnglishWebsite() {
  return (
    <div className="App">
      <img className="HomePic" src={HeroPic} alt="picture"/>
      <HomeEn />
      <TestimonialsEn />
      <ServiceEn/>
      <AboutEn />
      <PrivacyEn />
      <InformationEn />
      <ContactEn />
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>
    
      <Route path="/" component={JapaneseWebsite}exact/>
      <ScrollToTop>
      <Route path="/villa-cleaning" component={VillaPage} exact/>
      <Route path="/house-cleaning" component={HousePage} exact/>
      <Route path="/moveout-cleaning" component={MoveoutPage} exact/>
      <Route path="/office-cleaning" component={OfficePage} exact/>
      <Route path="/restaurant-cleaning" component={RestaurantPage} exact/>
      <Route path="/spa-salon-cleaning" component={SpaPage} exact/>
      <Route path="/carpet-cleaning" component={CarpetPage} exact/>
      <Route path="/party-cleaning" component={PartyPage} exact/>
      <Route path="/cleaning-for-seniors" component={SeniorPage} exact/>
      <Route path="/en"  component={EnglishWebsite} exact/>
      <Route path="/en/villa-cleaning" component={VillaPageEn} exact/>
      <Route path="/en/house-cleaning" component={housePageEn} exact/>
      <Route path="/en/moveout-cleaning" component={MoveoutPageEn} exact/>
      <Route path="/en/office-cleaning" component={OfficePageEn} exact/>
      <Route path="/en/restaurant-cleaning" component={RestaurantPageEn} exact/>
      <Route path="/en/spa-salon-cleaning" component={SpaPageEn} exact/>
      <Route path="/en/carpet-cleaning" component={CarpetPageEn} exact/>
      <Route path="/en/party-cleaning" component={PartyPageEn} exact/>
      <Route path="/en/cleaning-for-seniors" component={seniorPageEn} exact/>
      </ScrollToTop>


    </BrowserRouter>
  );
}

export default App;
