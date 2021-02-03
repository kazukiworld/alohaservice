import React from "react";
import "./Service.css";
import LuxuryPic from "../../assets/luxury.jpg";
import HomePic from "../../assets/vacationrental3.jpg";
import EmptyPic from "../../assets/empty.jpg";
import OfficePic from "../../assets/office.jpg";
import RestaurantPic from "../../assets/restaurant.jpg";
import SpaPic from "../../assets/spa.jpg";
import CarpetPic from "../../assets/carpet.jpg";
import PartyPic from "../../assets/party.jpg";
import OldPic from "../../assets/old.jpg";
import {useHistory} from 'react-router-dom'

export default function ServiceGrid() {
const history = useHistory();

  return (
    <div className="ServiceGrid" >
      <div className="grid" onClick={() => history.push("/villa-cleaning")}>
        <img src={LuxuryPic} alt="" className="gridImage"/>
        <p className="serviceTitle">別荘クリーニング</p>
      </div>
      <div className="grid" onClick={() => history.push("/house-cleaning")}>
        <img src={HomePic} alt="" className="gridImage" />
        <p className="serviceTitle">一軒家／コンドミニアム定期清掃</p>
      </div>
      <div className="grid" onClick={() => history.push("/moveout-cleaning")}>
        <img src={EmptyPic} alt="" className="gridImage" />
        <p className="serviceTitle">退去後のハウスクリーニング</p>
      </div>
      <div className="grid" onClick={() => history.push("/office-cleaning")}>
        <img src={OfficePic} alt="" className="gridImage" />
        <p className="serviceTitle">オフィス清掃</p>
      </div>
      <div className="grid" onClick={() => history.push("/restaurant-cleaning")}>
        <img src={RestaurantPic} alt="" className="gridImage" />
        <p className="serviceTitle">飲食店／レストラン清掃</p>
      </div>
      <div className="grid" onClick={() => history.push("/spa-salon-cleaning")}>
        <img src={SpaPic} alt="" className="gridImage" />
        <p className="serviceTitle">ヘアーサロン／エステ／スパの清掃</p>
      </div>
      <div className="grid" onClick={() => history.push("/carpet-cleaning")}>
        <img src={CarpetPic} alt="" className="gridImage" />
        <p className="serviceTitle">カーペットクリーニング</p>
      </div>
      <div className="grid" onClick={() => history.push("/party-cleaning")}>
        <img src={PartyPic} alt="" className="gridImage" />
        <p className="serviceTitle">パーティ後の清掃</p>
      </div>
      <div className="grid" onClick={() => history.push("/cleaning-for-seniors")}>
        <img src={OldPic} alt="" className="gridImage" />
        <p className="serviceTitle">高齢者向けの清掃サービス</p>
      </div>
    </div>
  );
}
