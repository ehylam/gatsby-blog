import React from 'react';

import './content.scss';

const Content = ({data, id}) => {

  return (
    <section className="content__container" >
    {
      data.map((content) => (
        <div className="content--wrapper" key={id}>
        <img src={content.image} alt=""/>
          <h2>{content.heading}</h2>
          <p>{content.content}</p>

        </div>
      ))
    }

    </section>
   );
}

export default Content;