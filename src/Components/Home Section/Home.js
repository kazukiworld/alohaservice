import React from "react";
import HeroPic from "../../assets/Bedroom.png";
import NavBar from "./NavBar.js";
import Title from "./Title";
import "./Home.css";


export default function Home() {
  return (
      <div className="Home">
        <div className="homeContent">
          <NavBar
            nav1="清掃サービス"
            nav2="追加内容"
            nav3="会社概要"
            nav4="お問い合わせ"
            transbtn="English"
          />
          <Title
            title={
              <p className="statement">
                アロハの心で
                <br /> 清掃サービスを提供する
                <br /> スペシャリストです。
              </p>
            }
            contact="お問い合わせ"
          />
        </div>
      </div>
  );
}
