import React from "react";
import "./About.css";
import InfoLayout from "../InfoLayout.js";
import CleaningPic from "../../assets/cleaning.png";
import FlowerPic from "../../assets/flower.png";

export default function AboutEn() {
  return (
    <div className="About" id="section2" style={{fontStyle:"serif"}}>
      <div className="aboutMark">About Us</div>
      <div className="info1Grid">
        <InfoLayout
          subheader="Specialized treatments for different materials"
          paragraph="We use over 30 different cleaning solutions and 25 cleaning tools for various surfaces and materials, incorporating methods to leave no damage when cleaning.  For example, we use specialized equipment like hypochlorous acid generators that are safe and non-toxic for disinfecting hard surfaces and powerful steam machines for cleaning carpets and upholstery."
        />
        <img className="cleaningPic" src={CleaningPic} alt="picture" />
      </div>
      <div className="info2">
        <InfoLayout
          subheader="Cleaning policies for health safety "
          paragraph="As professional cleaners, we consider the lives of people in the surrounding environment when we clean, which is why we adapt our cleaning methods for extra caution if there are people in the environment, with compromised health, children, or pets.  Our first priority is the safety of people and we hold our safety protocols to a high standard.  For example, in those special cases, we use a steam mop to clean the floors, refraining from using any chemical solutions while still effectively removing spots.  In cases where chemical solutions are required, we clean the area two times: once with the solution and another time with water to ensure there is no residue left on the surface.  Our cleaning methods can be adapted to ensure we are providing a cleaning service within the client’s comfort level, because nothing is more important to us than the health and satisfaction of our customers. "
        />
      </div>
      <div className="introduction">
          <img src={FlowerPic} alt="picture" className="flowerPic"/>
          <div className="info3">
          <InfoLayout
          subheader="Who We Are"
          paragraph="We believe that great service comes from not only providing the highest quality cleaning with precise attention to detail but also developing a trusting relationship to truly understand the needs of clients.  Our core values are focused on integrity,  providing services that are safe, and adhering to high standards that ensure the satisfaction of clients for a relationship that lasts for a lifetime."
          />
          </div>
      </div>
    </div>
  );
}
