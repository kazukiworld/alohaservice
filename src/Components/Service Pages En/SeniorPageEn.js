import React from 'react'
import Contact from '../Contact Section/Contact'
import InfoLayout from '../InfoLayout'

export default function seniorPageEn() {
    return (
        <div>
        <div className="ServicePages">
            <div className="serviceMark">
            Cleaning Service For Seniors
            </div>
            <InfoLayout
            subheader=""
            paragraph="In addition to our regular house cleaning, we also do shopping at supermarkets (daily necessities, groceries, etc.), laundry, and organization of closets.  We have a staff with experience in nursing care, so please feel free to contact us."
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
