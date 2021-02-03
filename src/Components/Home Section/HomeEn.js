import React from "react";
import HeroPic from "../../assets/Bedroom.png";
import Title from "./Title";
import "./Home.css";
import NavBarEn from "./NavBarEn";


export default function HomeEn() {
  return (
      <div className="Home" style={{fontStyle:"serif"}}>
        <div className="homeContent">
          <NavBarEn
            nav1="Service"
            nav2="About"
            nav3="Company"
            nav4="Contact Us"
            transbtn="日本語"
          />``
          <Title
            title={
              <p className="statement">
                We are cleaning specialists, 
                <br /> here to serve you with 
                <br />the heart of ALOHA.
              </p>
            }
            contact="Contact Us"
          />
        </div>
      </div>
  );
}
