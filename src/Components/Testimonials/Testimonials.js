import React from "react";
import "./Testimonials.css";

const Testimonial = (props) => {
  return (
    <div className="testimonial">
      <div className="quote">{props.quote}</div>
      <div className="company">{props.company}</div>
    </div>
  );
};

export default function Testimonials(props) {
  return (
    <div className="testimonials">
      <Testimonial 
      quote=" 「日本のおもてなしを理解された、Aloha Service Specialists社のクリーニングは、細部に行き届いた丁寧さがあり、不在期間の長い別荘オーナー様に安心を与える一助となり、また物件購入後のアフターサービスが充実していることは弊社販売活動の強みにもなっています。」" 
      company="— Seven Signatures International"
      />
       <Testimonial 
      quote="「Aloha Service Specialistsの清掃チームはすばらしいです。素早い対応や柔軟性があり、私たちのニーズに丁寧に答えてくれるAloha Service Specialists を高く評価させていただきます。」" 
      company="— One Pacific Realty"
      />
    </div>
  );
}
