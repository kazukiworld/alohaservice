import React from 'react'
import Contact from '../Contact Section/Contact'
import InfoLayout from '../InfoLayout'

export default function MoveoutPage() {
    return (
        <div>
        <div className="ServicePages">
            <div className="serviceMark">
            退去後のハウスクリーニング
            </div>
            <InfoLayout
            subheader=""
            paragraph="退去時の清掃です。（ディープクリーニング)
            お部屋の汚れ具合によっては敷金から大きなマイナス対象となってしまうこともあります。可能な限り引越ししてきた時の状態、原状回復につとめます。
            "
            />
             <InfoLayout
            subheader=""
            paragraph={
                <div></div>
            }
            /> 
        </div>
        <Contact/>
        </div>
    )
}
