import React from 'react';
import './components.css';

export default function InfoLayout(props) {
    return (
        <div>
             <div className="information">
                <div className="subheader">{props.subheader}</div>
                <div className="paragraph">{props.paragraph}</div>
            </div>
        </div>
    )
}
