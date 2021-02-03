import React from "react";
import Contact from "../Contact Section/Contact";
import InfoLayout from "../InfoLayout";

export default function PartyPage() {
  return (
    <div>
      <div className="ServicePages">
        <div className="serviceMark">パーティ後の清掃</div>
        <InfoLayout
          subheader=""
          paragraph="お誕生日、クリスマス、サンクスギビング、お正月、卒業パーティー、ご家族のお集まりなどで、皆さまが楽しく過ごされた後のお片づけ清掃になります。パーティーが終わられた後もゆっくりおくつろぎ頂けます。
            "
        />
        <InfoLayout
          subheader=""
          paragraph={
            <div>
              — お食事された後の食器類の洗い物とお片づけ
              <br />
              <br />
              — 椅子、テーブルの拭き掃除
              <br />
              <br />
              — 飾り物の撤去と仕分けと、収納
              <br />
              <br />
              — 掃除機かけ、拭き掃除、モップがけ、ゴミ回収
              <br />
              <br />— キッチンのシンク、カウンター、オーブン、レンジの清掃
            </div>
          }
        />
      </div>
      <Contact />
    </div>
  );
}
