import React from 'react';

import './content.scss';

const Content = ({data, id}) => {

  return (
    <section className="content__container" id={id}>
    {/* {Dont use index...} */}
    {
      data.map((content, index) => (
        <div className="content--wrapper" key={index}>
          <div className="content">
            <img src={content.image} alt=""/>
            <h2>{content.heading}</h2>
            <span>{content.date}</span>
            <p>{content.content}</p>
          </div>
          <a href="">Don't   Read More</a>
        </div>
      ))
    }

    </section>
   );
}

export default Content;