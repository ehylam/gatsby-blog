import React from 'react';

import './hero.scss';



const Hero = (props) => {
  const style = {
    // ooo, possible dynamic background image.
  bg: {
    backgroundImage: `url(${props.background})`
  },
  fg: {
    backgroundImage: `url(${props.foreground})`
  }
}
  return (
    <section className="hero__container" style={style.bg}>
    <div className="todo">
      <ul>
        <li><h1>TODO!</h1></li>
        <li>Single Post Page with custom permalink</li>
        <li>remove 'content' data from the post previews and into the single post page</li>
        <li>Convert markdown to HTML</li>
        <li><h1>DESIGN THE WEBSITE.</h1></li>
      </ul>
    </div>
      <div className="foreground" style={style.fg}></div>
      <div className="hero-content__wrapper">
        <div className="hero-content">
          <h1>{props.heading}</h1>
          <h4>{props.subheading}</h4>
        </div>
      </div>
    </section>
   );
}

export default Hero;