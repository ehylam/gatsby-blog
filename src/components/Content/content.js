import React from 'react';

import './content.scss';

const Content = ({data, id}) => {

  return (
    <section className="content__container" >
    {/* Todo: markdown spaces */}
    {
      data.map((content) => (
        <div className="content--wrapper" key={id}>
        <img src={content.image} alt=""/>
          <h2>{content.heading}</h2>
          <span>{content.date}</span>
          <p>{content.content}</p>

        </div>
      ))
    }

    </section>
   );
}

export default Content;