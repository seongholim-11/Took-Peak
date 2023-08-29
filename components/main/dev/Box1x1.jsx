import React from "react";

import './dev.scss'

export default function Box1x1({ item, idx }) {
    return (
        <div className={`box1 nth${idx}`}>
            <div className="box1Img">
                <img src={item.img} alt={item.img} />
            </div>
            <div className="box1Text">
                <div className="box1Title">{item.title}</div>
                <div className="box1Content">{item.content}</div>
            </div>
            <div className="boxTriangle"></div>
        </div>
    );
}
