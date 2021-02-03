import React from "react";
import "./Home.css";
import { Link} from "react-scroll";
import { useHistory } from "react-router-dom";

export default function NavBarEn(props) {
  const history = useHistory();
  return (
    <div className="AllNavBar">
      <div className="navBar">
        <div className="logo">
          <div className="logoTop">ALOHA</div>
          <div className="logoBottom">Service Specialists</div>
        </div>
        <div className="navClickables">
          <div className="navItems">
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <p className="NavItem">{props.nav1}</p>
            </Link>
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              duration={1000}
            >
            <p className="NavItem">{props.nav2}</p>
            </Link>
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              duration={1000}
            >
            <p className="NavItem">{props.nav3}</p>
            </Link>
            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              duration={1000}
            >
            <p className="NavItem">{props.nav4}</p>
            </Link>
          
          </div>
          <div className="translation" onClick={() => history.push("/")}>{props.transbtn}</div>
        </div>
      </div>
      <div className="navBarBg"></div>
    </div>
  );
}
