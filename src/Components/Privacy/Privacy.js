import React from 'react'
import './Privacy.css'
import InfoLayout from '../InfoLayout.js'

export default function Privacy() {
    return (
        <div className="Privacy">
            <InfoLayout
            subheader="個人情報の保護"
            paragraph="このウェブサイトに記載する個人情報は全て清掃サービスの提供のみに使用させていただき、お名前や住所といった個人情報は担当者とクリーニングをする清掃員のみに伝えられ、お客様の同意無しで第三者への個人情報の公開は固く禁じおられてます。また、Aloha Service Specialists 宛のEメールはIONOSのシステムによって守られており、主に連絡、スケジュール調整やチェックリストの制作のために使用されます。"
            />
            <div style={{height:"6vw"}}/>
            <InfoLayout
            subheader="損害保険とその他"
            paragraph="お客様が安心して清掃を任せれるため、Aloha Service Specialists社は損害保険から火災保険まで様々な保険に保護されています。詳細を知りたい方はinfo@alohaservicespecialists.comまでお問い合わせください。"
            />

        </div>
    )
}
