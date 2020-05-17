import React from 'react';

import './hero.scss';



const Hero = (props) => {
  const style = {
  bg: {
    backgroundImage: `url(${props.background})`
  },
  fg: {
    backgroundImage: `url(${props.foreground})`
  }
}
  return (
    <section className="hero__container" style={style.bg}>
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