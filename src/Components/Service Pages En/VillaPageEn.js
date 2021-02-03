import React from "react";
import Contact from "../Contact Section/Contact.js";
import InfoLayout from "../InfoLayout";

export default function VillaPageEn() {
  return (
    <div>
      <div className="ServicePages">
        <div className="serviceMark">Villa Cleaning</div>
        <InfoLayout
          subheader=""
          paragraph="We provide check-in and check-out cleaning, as well as regular cleaning, ventilation, water flow, etc. of important rooms while the owner is absent so that the owner can stay comfortably in a clean room. Owners can enjoy a more secure and comfortable stay by preserving the value of the villa through maintenance."
        />
        <InfoLayout
          subheader="Cleaning Description"
          paragraph={
            <div>
              Ventilation: Open the windows of all rooms to take in fresh air
              and prevent mold from growing due to humidity.
              <br />
              <br />
              Water flow: If you do not pass water around the water for a long
              period of time, the drain trap will run out of water and will give
              off a foul odor. To prevent this, a small amount of water is
              passed.
              <br />
              <br />
              - Bathroom, kitchen, dishwasher, toilet, washing machine, running
              water to prevent sewage and sewage odors from being trapped.
              removal of mold, and sterilization
              <br />
              - Check the bulbs for all lights, checking the batteries of the TV
              remote control and AC remote control
              <br />
              - Confirmation of the presence or absence of pests such as
              termites
              <br />
              - Wiping, dust removal, vacuuming, mopping
              <br />
              - Watering plants and foliage plants
              <br />- Take a photo or video and report if something seems wrong
            </div>
          }
        />
        <InfoLayout
          subheader="
          Check-in and check-out cleaning
          "
          paragraph="
          Cleaning the kitchen, toilet and bathroom, living room, closet, Lanai, cleaning the entrance, washing sheets, towels and linens, bed making, and garbage disposal
          "
        />
      </div>
      <Contact />
    </div>
  );
}
