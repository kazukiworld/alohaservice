import "./Privacy.css";
import InfoLayout from "../InfoLayout.js";

export default function PrivacyEn() {
  return (
    <div className="Privacy">
      <InfoLayout
        subheader="Information Protection"
        paragraph={
          <div>
            All personal information collected on this website will only be used
            for the purpose of providing cleaning services and will not be
            disclosed to third-party vendors. The data obtained from the website
            will only be
            disclosed to appointed cleaners that require the address of the
            property. All email transactions to Aloha Service Specialists are
            protected by the Ionos encryption system and will, unless otherwise
            specified, only be used for the following purposes: 
            <br/><br/>
            1. General
            coordination and communication with clients 
            <br/>
            2. Checklist of requests
            made by clients 
            <br/>
            3. Scheduling dates of cleaning 
            <br/>
            4. Disclosing
            property location to appointed cleaners 
            <br/>
            5. Logging Invoices
          </div>
        }
      />
      <div style={{ height: "6vw" }} />
      <InfoLayout
        subheader="Insurance Coverage for Accidental Damage and More"
        paragraph="Aloha Service Specialists is covered by professional commercial insurance protecting against various damages and liability.  For more information on our insurance coverage, please contact us at info@alohaservicespecialists.com"
      />
    </div>
  );
}
