import React from "react";
import "./ServicePages.css";
import Contact from "../Contact Section/Contact.js";
import InfoLayout from "../InfoLayout";

export default function VillaPage() {
  return (
    <div>
      <div className="ServicePages">
          <div className="serviceMark">別荘クリーニング</div>
        <InfoLayout
          subheader=""
          paragraph="清潔でキレイなお部屋で快適に気持ちよくご滞在して頂けるようチェックイン前清潔、チェックアウト清掃はもちろんのこと、オーナー様がご不在の間大切なお部屋の清掃、換気、通水等の定期的なメンテナンスをと通して別荘価値の保全はもてより安心で快適なご滞在をお楽しみ頂けます。"
        />
        <InfoLayout
          subheader=" ご不在の間の定期清掃"
          paragraph={
            <div>
              (通風)
              全部屋の窓を開けて新鮮な空気を取り込み湿気によるカビの発生を抑えます。
              <br />
              (通水)
              長期間水回りの通水をしないと排水トラップに水がなくなり悪臭がしてきます。
              これを防ぐために少量の通水を行います。
              <br />—
              バスルーム、キッチン、ディッシュウォッシャー、トイレ、洗濯機
              水を流し下水や汚水の匂いがこもらないようにする。
              カビの発生が有無の確認と除去、除菌
              <br />
              — 全ての照明の電球の確認
              テレビのリモコンやACのリモコンの電池の確認
              <br />
              —ターマイト等の害虫発生の有無の確認
              <br />
              —拭き掃除、ホコリとり、掃除機がけ、モップがけ
              <br />
              — 植木や観葉植物の水やり
              <br />— 異変があった場合 写真やビデオを撮りご報告
            </div>
          }
        />
        <InfoLayout
          subheader="チェックイン、チェックアウト清掃"
          paragraph=" キッチンの清掃 トイレ、バスルームの清掃 リビングルームの清掃
         クローゼットの清掃 ラナイ、エントランスの清掃
         シーツ、タオル、リネン類の洗濯 ベッドメイク ゴミすて"
        />
      </div>
      <Contact />
    </div>
  );
}
