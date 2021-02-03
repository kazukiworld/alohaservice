
import React from "react";
import "./Information.css";

export default function InformationEn() {
  return (
    <div className="Information" id="section3" style={{fontStyle:"serif"}}>
      <div className="informationMark">Company Description</div>
      <div className="companyDescription">
        <div className="topicGroup">
        <div className="topic">
          <b>Company Name</b>
        </div>
        <div className="description">Aloha Service Specialists LLC
        </div>
        </div>
        <div className="topicGroup">
        <div className="topic">
          <b>Established</b>
        </div>
        <div className="description">October 2019
        </div>
        </div>
        <div className="topicGroup">
        <div className="topic">
          <b>Activities</b>
        </div>
        <div className="description">Office Cleaning, daily cleaning, disinfection service, carpet cleaning
        </div>
        </div>
        <div className="topicGroup">
        <div className="topic">
          <b>Contact</b>
        </div>
        <div className="description">  info@alohaservicespecialists.com
        </div>
        </div>
      </div>
    </div>
  );
}