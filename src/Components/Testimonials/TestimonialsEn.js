import React from "react";
import "./Testimonials.css";

const Testimonial = (props) => {
  return (
    <div className="testimonial" style={{fontStyle:"serif"}}>
      <div className="quote">{props.quote}</div>
      <div className="company">{props.company}</div>
    </div>
  );
};

export default function TestimonialsEn(props) {
  return (
    <div className="testimonials"  style={{fontStyle:"serif"}}>
      <Testimonial 
      quote='"Understanding the Japanese way of omotenashi, the detailed cleaning of Aloha Service Specialists extend to the smallest refined detail, providing relief for home owners who are present or away from home.  We particularly like the completeness of the after cleaning of sold homes, which we believe strengthens our company&apos;s real estate activities."'
      company="— Seven Signatures International"
      />
       <Testimonial 
      quote='"Toshie and her crew are great! They are responsive, flexible, and thorough while being courteous and accommodating to our needs. We highly recommend Aloha Service Specialists!"'
      company="— One Pacific Realty"
      />
    </div>
  );
}
