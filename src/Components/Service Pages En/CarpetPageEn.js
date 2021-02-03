import React from 'react'
import Contact from '../Contact Section/Contact'
import InfoLayout from '../InfoLayout'

export default function CarpetPageEn() {
    return (
        <div>
        <div className="ServicePages">
            <div className="serviceMark">
            Carpet Cleaning
            </div>
            <InfoLayout
            subheader=""
            paragraph="Things like, dirt, sweat, sebum, hair, spilled food, spills, mites, mold, dust, pet hair, etc. can get inside the carpet fibers without leaving noticeable spots.  We carefully clean the carpets with chemicals and methods suitable for the carpet material and prepare the surface by thoroughly shampooing to prevent any damage to the carpet’s material while cleaning.  
            "
            />
             <InfoLayout
            subheader=""
            paragraph={
                <div>Additonal Options: Sofas, cues, and cushions are also possible.
                </div>
            }
            /> 
        </div>
        <Contact/>
        </div>
    )
}
