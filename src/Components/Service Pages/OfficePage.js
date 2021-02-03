import React from "react";
import Contact from "../Contact Section/Contact";
import InfoLayout from "../InfoLayout";

export default function OfficePage() {
  return (
    <div>
      <div className="ServicePages">
        <div className="serviceMark">オフィス清掃</div>
        <InfoLayout
          subheader=""
          paragraph="日頃の美観維持や衛生管理を目的とする日常的に行われる清掃です。
            明るく清潔なオフィスで来訪されたお客様にも良い印象を与えることができ、社員の皆様にも快適に気持ちよく、お仕事して頂けます。
            "
        />
        <InfoLayout
          subheader=""
          paragraph={
            <div>
              — 事務所 掃除機かけ、拭き掃除、モップがけ、ゴミ回収
              <br />
              <br />
              — 会議室、応接室 掃除機がけ、拭き掃除、モップがけ、ゴミ回収
              <br />
              <br />
              — トイレ
              便器の清掃、鏡みがき、洗面台の清掃、拭き掃除、モップがけ、ゴミ回収
              <br />
              <br />
              — 食堂、給湯室
              シンクの清掃、備品類の補充と確認、拭き掃除、掃き掃除、モップがけ、、ゴミ回収
              <br />
              <br />
              — 廊下、階段 掃除機がけ、モップがけ、拭き掃除
              <br />
              <br />— 入口、エントランス
              掃除機かけ、拭き掃除、モップがけ、ガラス拭き、ゴミ回収
            </div>
          }
        />
      </div>
      <Contact />
    </div>
  );
}
