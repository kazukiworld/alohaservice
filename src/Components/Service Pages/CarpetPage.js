import React from 'react'
import Contact from '../Contact Section/Contact'
import InfoLayout from '../InfoLayout'

export default function CarpetPage() {
    return (
        <div>
        <div className="ServicePages">
            <div className="serviceMark">
            カーペットクリーニング
            </div>
            <InfoLayout
            subheader=""
            paragraph="表面に汚れが見えなくてもカーペットの繊維の中に汚れ、汗、皮脂、髪の毛、食べこぽし、飲みこぼし、ダニ、カビ、ホコリ、ペットの毛などが入り込みます。
            ダニの温床にもなりやすい頑固なシミや汚れをキレイに取り除きます。
            カーペットの素材にあった方法と専用の薬剤で丁寧にクリーニングします。シミや汚れは部分的に前処理し素材を痛めないよう十分に配慮した上でシャンプークリーニングを行います。
            "
            />
             <InfoLayout
            subheader=""
            paragraph={
                <div>(オプション)
                ソファ、カウチ、クッションなども可能です。
                </div>
            }
            /> 
        </div>
        <Contact/>
        </div>
    )
}
