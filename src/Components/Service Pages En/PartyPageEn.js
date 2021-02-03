import React from "react";
import Contact from "../Contact Section/Contact";
import InfoLayout from "../InfoLayout";

export default function PartyPageEn() {
  return (
    <div>
      <div className="ServicePages">
        <div className="serviceMark">パーティ後の清掃</div>
        <InfoLayout
          subheader=""
          paragraph="After cleaning for celebrations like birthdays, Christmas, Thanksgiving, New Year, graduation parties, family gatherings, etc. so everyone can after the party is over."
        />
        <InfoLayout
          subheader=""
          paragraph={
            <div>
              - Washing and cleaning up dishes after meals
              <br />
              - Cleaning chairs and tables
              <br />
              - Removal, sorting and storage of decorations
              <br />
              - Vacuuming, wiping, mopping, garbage collection
              <br />- Cleaning kitchen sinks, counters, ovens and stoves
            </div>
          }
        />
      </div>
      <Contact />
    </div>
  );
}
