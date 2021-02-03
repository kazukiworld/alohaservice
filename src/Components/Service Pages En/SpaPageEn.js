import React from "react";
import Contact from "../Contact Section/Contact";
import InfoLayout from "../InfoLayout";

export default function SpaPageEn() {
  return (
    <div>
      <div className="ServicePages">
        <div className="serviceMark">ヘアーサロン／エステ／スパの清掃</div>
        <InfoLayout
          subheader=""
          paragraph="Cleaning for the purpose of maintaining aesthetics and hygiene."
        />
        <InfoLayout
          subheader="Cleaning Description"
          paragraph={
            <div>
              - Entrance: Cleaning the mattress at the entrance, window glass,
              signboards, wiping, picking up trash in the parking area
              <br />
              - Waiting space: Cleaning around the cash register, removing dust
              from display shelves, cleaning chairs and tables, vacuuming,
              mopping, collecting garbage
              <br />
              - Floor: Vacuum and mop
              <br />
              - Bathroom: Toilet bowl cleaning, wash basin cleaning, mirror
              polishing, equipment replenishment, garbage collection, vacuuming,
              mopping
              <br />
              - Dresser room: Vacuuming, wiping, mopping, mirroring,
              replenishing equipment, collecting trash
              <br />
              - Shower room: Removes dullness and polish from showers and
              faucets, removes soap scum and dirt from floors and walls, and
              removes mold.
              <br />- Locker room: Vacuuming, wiping, mopping, garbage
              collection
            </div>
          }
        />
      </div>
      <Contact />
    </div>
  );
}
