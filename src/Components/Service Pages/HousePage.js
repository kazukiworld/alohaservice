import React from 'react'
import Contact from '../Contact Section/Contact'
import InfoLayout from '../InfoLayout'

export default function housePage() {
    return (
        <div>
        <div className="ServicePages">
            <div className="serviceMark">
            一軒家／コンドミニアム定期清掃
            </div>
            <InfoLayout
            subheader=""
            paragraph="ハウスクリーニングサービスです。
            ふだん手が届かないところを隅々まで清掃させて頂きます。
            ご縁ができたお客様が快適でステキな毎日を送って頂けるよう精一杯の心構えで清掃させて頂きます。
            "
            />
             <InfoLayout
            subheader=""
            paragraph={
                <div>
                — キッチン
            水や油を頻繁に使うお台所は汚れ方が頑固です。こすってもなかなか落としきれない油汚れや焦げ付き、滑りなど 見落としがちな細かい所も残さず清掃します。
            <br/><br/>
            — バスルーム
            浴室のカビや床、浴槽、鏡、蛇口などの水垢、石鹸カス、皮脂汚れ、カビなどの汚れに対応して、対処します。
            <br/><br/>
            — 洗面所
            洗面ボウルの黒ずみ、黄ばみ、蛇口の水垢やくすみ、鏡のくすみ、さらに小物収納スペースなど気になる汚れを丁寧に落とします。
            <br/><br/>
            — トイレ
            便器の内部の尿石や黄ばみ、黒ずみ、カビ、くすみなど ふだんのお掃除ではなかなか落とせきれない頑固な汚れをスッキリキレイに取り除きます。
            <br/><br/>
            — リビングルーム
            掃除機かけ、拭き掃除、モップがけ 必要に応じて家具のポリッシュ
            <br/><br/>
            — オプション
            冷蔵庫 ドアポケットや棚などを取り外し液だれや汚れを洗浄
            ドアパッキンにこびりついた汚れ、カビなどを除去
            食材が取り出しやすいよう、整理整頓
            </div>
            }
            /> 
        </div>
        <Contact/>
        </div>
    )
}
