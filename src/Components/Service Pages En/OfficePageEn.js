import React from "react";
import Contact from "../Contact Section/Contact";
import InfoLayout from "../InfoLayout";

export default function OfficePageEn() {
  return (
    <div>
      <div className="ServicePages">
        <div className="serviceMark">オフィス清掃</div>
        <InfoLayout
          subheader=""
          paragraph="An office cleaning for maintaining aesthetics and hygiene to create an environment  employees can work comfortably and leave a positive impression on visitors.  "
        />
        <InfoLayout
          subheader="Cleaning Description"
          paragraph={
            <div>
              - Office: Vacuuming, wiping, mopping, garbage collection
              <br />
              - Meeting room, reception room: Vacuuming, wiping, mopping,
              garbage collection
              <br />
              - Restroom: Toilet bowl cleaning, mirror polishing, wash basin
              cleaning, wiping cleaning, mopping, garbage collection
              <br />
              - Dining room, hot water supply room: Cleaning the sink,
              replenishing and checking equipment, wiping, sweeping, mopping,
              garbage collection
              <br />
              - Corridors, stairs: Vacuum, mop, wipe
              <br />- Entrance: Vacuuming, wiping, mopping, glass wiping,
              garbage collection
            </div>
          }
        />
      </div>
      <Contact />
    </div>
  );
}
