import React from "react";
import "./About.css";
import InfoLayout from "../InfoLayout.js";
import CleaningPic from "../../assets/cleaning.png";
import FlowerPic from "../../assets/flower.png";

export default function About() {
  return (
    <div className="About" id="section2">
      <div className="aboutMark">追加内容</div>
      <div className="info1Grid">
        <InfoLayout
          subheader="素材に見合った道具や洗剤の使用"
          paragraph="きめ細かい清掃をお届けするため、30種類以上の洗剤や、25種類以上の道具を様々な場面でに使い分けています。例えば固い表面を除菌、清掃する際に次亜塩素酸水という毒性の無い液体を使用したり、ほかにもカーペットをクリーニングする際には強力なスチームクリーナーを使用する事により、傷をつけずに細部の汚れを取ることが可能です。"
        />
        <img className="cleaningPic" src={CleaningPic} alt="picture" />
      </div>
      <div className="info2">
        <InfoLayout
          subheader="健康面への配慮"
          paragraph="私たちはプロの清掃員として、身の回りの安全性を強く考慮しているため、病人、小さなお子様やペットが暮らしている環境では清掃方法を変えるよう心がけています。例えば頑固な汚れを取る際に使う強力な洗剤を使用後、水で表面を二度拭いたり、床（一部木製の床は除く）を掃除する際にはスチームクリーナーのみを使用したり、あらゆる注意を払いお客様のを健康を考慮しています。お客様が安心して清掃を任せられるよう、一度ご相談のうえ、清掃をさせていただきます。お気軽にご要望をお伝えください。"
        />
      </div>
      <div className="introduction">
          <img src={FlowerPic} alt="picture" className="flowerPic"/>
          <div className="info3">
          <InfoLayout
          subheader="私たちについて"
          paragraph="信頼関係、誠実さ、そしてアロハ、この三つの価値観を大切に心掛けながら清掃サービスを提供しています。信頼関係を築く事により、お客様のニーズを理解したうえで素早く対応し、それを最善の注意で安全かつ丁寧に清掃をしています。私たちにとってアロハとは、皆様のニーズと安全を最優先し、感謝の気持ちをもって仕事に励むことです。"
          />
          </div>
      </div>
    </div>
  );
}
