import React from "react";
import Contact from "../Contact Section/Contact";
import InfoLayout from "../InfoLayout";

export default function SpaPage() {
  return (
    <div>
      <div className="ServicePages">
        <div className="serviceMark">ヘアーサロン／エステ／スパの清掃</div>
        <InfoLayout
          subheader=""
          paragraph="日頃の美観維持や衛生管理を目的とした日常的に行われる清掃です。
            "
        />
        <InfoLayout
          subheader=""
          paragraph={
            <div>
              — エントランス
              入口のマットレスの清掃、窓ガラス、看板、拭き掃除、パーキングエリアのゴミ拾い
              <br />
              <br />
              — 待ち合いスペース
              レジ周りの清掃、商品など陳列棚のホコリとり、椅子、テーブル
              拭き掃除、掃除機かけ、モップがけ、ゴミ回収
              <br />
              <br />
              — フロア 掃除機かけ、モップをかけ
              <br />
              <br />
              — トイレ
              便器の清掃、洗面台の清掃、鏡みがき、備品の補充、ゴミ回収、掃除機かけ、モップがけ
              <br />
              <br />
              — ドレッサールーム
              掃除機がけ、拭き掃除、モップがけ、鏡みがき、備品の補充、ゴミ回収
              <br />
              <br />
              — シャワールーム
              シャワー、蛇口の、くすみとりとみがき、床、壁などについた石鹸カスや汚れ落としとカビ取り
              <br />
              <br />— ロッカールーム 掃除機かけ、拭き掃除、モップがけ、ゴミ回収
            </div>
          }
        />
      </div>
      <Contact />
    </div>
  );
}
