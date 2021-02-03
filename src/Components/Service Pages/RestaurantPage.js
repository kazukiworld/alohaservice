import React from "react";
import Contact from "../Contact Section/Contact";
import InfoLayout from "../InfoLayout";

export default function RestaurantPage() {
  return (
    <div>
      <div className="ServicePages">
        <div className="serviceMark">飲食店／レストラン清掃</div>
        <InfoLayout
          subheader=""
          paragraph="日頃の美観維持や衛生管理を目的として開店前、閉店後などの日常的に行われる清掃です。
            飲食業は日々の油汚れが溜まりやすく気づいた時には強力洗剤を使っても落とせないような頑固な汚れになっています。
            不特定多数の方が来られる場所なのでキレイはもちろんのこと常に清潔に保つ事が重要です。
            "
        />
        <InfoLayout
          subheader=""
          paragraph={
            <div>
              ー(エントランス) 入口のマットレスの清掃 窓ガラスの清掃 看板の清掃
              パーキングスペースや喫煙スペースのゴミ拾いとゴミ捨て
              <br/><br/>
              ー(待ち合いスペース) レジ周りの清掃 椅子テーブル、飾り物の清掃
              掃き掃除、拭き掃除、モップがけ 
              <br/><br/>
              ー(フロア) テーブル、椅子
              、備品の拭き掃除と補充 掃き掃除、モップがけ 
              <br/><br/>
              ー(トイレ)
              便器のカビとり、汚れとり 洗面部分の清掃 鏡の清掃
              備品の補充とゴミ捨て 掃き掃除、モップがけ 
              <br/><br/>
              ー(厨房)
              デッキブラシでの床みがき 調理台 清掃
              キッチンシンクの汚れや、ぬめりとり 拭き掃除 ゴミ捨て
            </div>
          }
        />
      </div>
      <Contact />
    </div>
  );
}
