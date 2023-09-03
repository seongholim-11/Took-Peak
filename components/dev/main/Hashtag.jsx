// react
import React from "react";
// scss
import './dev.scss'

function Hashtag() {
  const hashtags = ['#Interview', '#Skill', '#Develop'];

  return (
    <div>
      {hashtags.map((item, index) => (
        <div className='hashtag' key={index}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default Hashtag;
