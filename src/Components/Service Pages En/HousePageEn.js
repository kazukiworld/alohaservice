import Contact from "../Contact Section/Contact";
import InfoLayout from "../InfoLayout";

export default function housePageEn() {
  return (
    <div>
      <div className="ServicePages">
        <div className="serviceMark">House Cleaning</div>
        <InfoLayout
          subheader=""
          paragraph="A house cleaning service that can be done weekly, bi-weekly, and monthly. "
        />
        <InfoLayout
          subheader="Cleaning Description"
          paragraph={
            <div>
              - Kitchen: Kitchens that frequently use water and oil are
              stubbornly dirty. Cleans all the small parts that are often
              overlooked, such as oil stains, scorching, and slippage that
              cannot be easily removed by rubbing.
              <br />
              - Bathroom: We deal with mold in the bathroom, water stains on
              floors, bathtubs, mirrors, faucets, soap scum, sebum stains, and
              mold stains.
              <br />
              - Toilet: Remove stubborn stains such as urinary stones,
              yellowing, darkening, mold, and dullness inside the toilet bowl
              that cannot be easily removed by normal cleaning.
              <br />
              - living room: Vacuum, wipe, mop and polish furniture as needed
              <br />- Refrigerator (additonal service): Remove door pockets and
              shelves to clean drips and dirt. Remove dirt, mold, etc. stuck to
              the door packing. Organize so that ingredients can be easily taken
              out.
            </div>
          }
        />
      </div>
      <Contact />
    </div>
  );
}
