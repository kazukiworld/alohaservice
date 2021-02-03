import React from "react";
import "./Information.css";

export default function Information() {
  return (
    <div className="Information" id="section3">
      <div className="informationMark">会社概要</div>
      <div className="companyDescription">
        <div className="topicGroup">
        <div className="topic">
          <b>会社名</b>
        </div>
        <div className="description">Aloha Service Specialists LLC
        </div>
        </div>
        <div className="topicGroup">
        <div className="topic">
          <b>設立</b>
        </div>
        <div className="description">2019年10月
        </div>
        </div>
        <div className="topicGroup">
        <div className="topic">
          <b>事業内容</b>
        </div>
        <div className="description">  ビル清掃、定期清掃、日常清掃、消毒サービス、カーペットクリーニング
        </div>
        </div>
        <div className="topicGroup">
        <div className="topic">
          <b>連絡先</b>
        </div>
        <div className="description">  info@alohaservicespecialists.com
        </div>
        </div>
        
        {/* <div className="description">
                    Aloha Service Specialists LLC 
                    <br/>2019年10月
                    <br/>ビル清掃、定期清掃、日常清掃、消毒サービス、カーペットクリーニング
                    <br/>info@alohaservicespecialists.com
                </div> */}
      </div>
    </div>
  );
}
