// react
import React from "react";
// component
import Hashtag from './Hashtag'
// scss
import './dev.scss'

export default function Box2x1() {

  return (
    <div className='box2'>
        <div className='box2Title'>
            <div>
                <h2>Explore the information of</h2>
                <h2>the Develop</h2>
            </div>
            <div className='sticker'>
                <Hashtag/>
            </div>
        </div>
        <div className='box2Img'>
            <img src="/image/main/dev/computer.png" alt="computer" />
        </div>
    </div>
  )
}
