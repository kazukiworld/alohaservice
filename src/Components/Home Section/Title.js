import React from "react";
import "./Home.css";
import ArrowSVG from "../../assets/arrow-down.svg";
import {useSpring, animated} from 'react-spring';

export default function Title(props) {

  const animation = useSpring({
    opacity: 1, 
    from: {opacity: 0},   
    config: {
      duration: 800
  },})

  return (
    <div className="Titles">
      <animated.div className="title" style={animation}>
        {props.title}
        <div className="contactBtn">
          <a className="contactLine" href="mailto:info@alohaservicespecialists.com">{props.contact}</a>
        </div>
      </animated.div>
      <img className="arrowIcon" src={ArrowSVG} alt="Scroll" />
    </div>
  );
}
