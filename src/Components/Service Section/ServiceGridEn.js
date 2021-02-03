import React from "react";
import "./Service.css";
import LuxuryPic from "../../assets/luxury.jpg";
import HomePic from "../../assets/vacationrental3.jpg";
import EmptyPic from "../../assets/empty.jpg";
import OfficePic from "../../assets/office.jpg";
import RestaurantPic from "../../assets/restaurant.jpg";
import SpaPic from "../../assets/spa.jpg";
import CarpetPic from "../../assets/carpet.jpg";
import PartyPic from "../../assets/party.jpg";
import OldPic from "../../assets/old.jpg";
import {useHistory} from 'react-router-dom'

export default function ServiceGridEn() {
const history = useHistory();

  return (
    <div className="ServiceGrid" >
      <div className="grid" onClick={() => history.push("/en/villa-cleaning")}>
        <img src={LuxuryPic} alt="" className="gridImage"/>
        <p className="serviceTitle">Villa Cleaning</p>
      </div>
      <div className="grid" onClick={() => history.push("/en/house-cleaning")}>
        <img src={HomePic} alt="" className="gridImage" />
        <p className="serviceTitle">House Cleaning</p>
      </div>
      <div className="grid" onClick={() => history.push("/en/moveout-cleaning")}>
        <img src={EmptyPic} alt="" className="gridImage" />
        <p className="serviceTitle">Move Out Cleaning</p>
      </div>
      <div className="grid" onClick={() => history.push("/en/office-cleaning")}>
        <img src={OfficePic} alt="" className="gridImage" />
        <p className="serviceTitle">Office Cleaning</p>
      </div>
      <div className="grid" onClick={() => history.push("/en/restaurant-cleaning")}>
        <img src={RestaurantPic} alt="" className="gridImage" />
        <p className="serviceTitle">Restaurant Cleaning</p>
      </div>
      <div className="grid" onClick={() => history.push("/en/spa-salon-cleaning")}>
        <img src={SpaPic} alt="" className="gridImage" />
        <p className="serviceTitle">Salon and Spa Cleaning</p>
      </div>
      <div className="grid" onClick={() => history.push("/en/carpet-cleaning")}>
        <img src={CarpetPic} alt="" className="gridImage" />
        <p className="serviceTitle">Carpet Cleaning</p>
      </div>
      <div className="grid" onClick={() => history.push("/en/party-cleaning")}>
        <img src={PartyPic} alt="" className="gridImage" />
        <p className="serviceTitle">Party Cleaning</p>
      </div>
      <div className="grid" onClick={() => history.push("/en/cleaning-for-seniors")}>
        <img src={OldPic} alt="" className="gridImage" />
        <p className="serviceTitle">Cleaning for Seniors</p>
      </div>
    </div>
  );
}
