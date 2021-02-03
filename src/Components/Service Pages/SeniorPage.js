import React from 'react'
import Contact from '../Contact Section/Contact'
import InfoLayout from '../InfoLayout'

export default function seniorPage() {
    return (
        <div>
        <div className="ServicePages">
            <div className="serviceMark">
            高齢者向けの清掃サービス
            </div>
            <InfoLayout
            subheader=""
            paragraph="通常のハウスクリーニングはもちろんのこと必要に応じてスーパーなどのお買い物(日用品、食料品など) を致します。
            お洗濯、おたたみ、クローゼットへの収納
            介護経験のあるスタッフがおりますので、お困りの事が、ございましたらお気軽にご相談下さい。
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
