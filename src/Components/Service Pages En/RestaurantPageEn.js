import React from "react";
import Contact from "../Contact Section/Contact";
import InfoLayout from "../InfoLayout";

export default function RestaurantPageEn() {
  return (
    <div>
      <div className="ServicePages">
        <div className="serviceMark">飲食店／レストラン清掃</div>
        <InfoLayout
          subheader=""
          paragraph="Cleaning is performed on a frequent basis before opening and after closing for the purpose of maintaining the restaurant’s aesthetics and hygiene.  In restaurants, oil stains tend to accumulate and leave stubborn stains that cannot be removed even with a strong detergent. "
        />
        <InfoLayout
          subheader="Cleaning Description"
          paragraph={
            <div>
              - Entrance: Cleaning entrance mattress, windows, signs, as well as
              picking and dumping garbage in parking spaces and smoking spaces 
              <br/>
              - Waiting Space: Cleaning around the cash register, cleaning chair
              table and decorations, sweeping, wiping, mopping 
              <br/>
              - Floor: Wipe and replenish tables, chairs and fixtures, sweeping, mopping 
              <br/>
              - Restroom: Remove mold and dirt from the toilet bowl, cleaning the
              washbasin and mirror, replenishment of equipment and disposal of
              garbage, sweeping, mopping 
              <br/>
              - Kitchen: floor brushing with a deck brush, countertop cleaning, dirty and slimy kitchen sink, wiping and cleaning, garbage disposal
            </div>
          }
        />
      </div>
      <Contact />
    </div>
  );
}
