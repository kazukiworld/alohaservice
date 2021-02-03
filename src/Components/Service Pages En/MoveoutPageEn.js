import React from 'react'
import Contact from '../Contact Section/Contact'
import InfoLayout from '../InfoLayout'

export default function MoveoutPageEn() {
    return (
        <div>
        <div className="ServicePages">
            <div className="serviceMark">
             Move Out Cleaning 
            </div>
            <InfoLayout
            subheader=""
            paragraph="We will try our best to restore the original condition of the room with deep cleaning. "
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
