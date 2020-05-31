import React from 'react';

import { Link } from "gatsby"
import './content.scss';

var postType = [];
const Content = ({data, id}) => {
  data.map((content) => {
      postType.push(content.posttype);
      return ''
    }
  );


  return (
    <section className="content__container" id={id}>
    {/* {Dont use index...} */}
    {
      data.map((content, index) => (
        <div className="content--wrapper active" key={index} data-type={content.posttype}>
          <div className="content">
            <img src={content.image} alt=""/>
            <h2>{content.heading}</h2>
            <span>{content.date}</span>
            <p>{content.content}</p>
          </div>
          <a href="#">Don't   Read More</a>
        </div>
      ))
    }

    </section>
   );
}

export default Content;