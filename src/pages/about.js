import React from 'react'
import { Link } from "gatsby"


import Hero from '../components/Hero/hero'
import TwoColumn from '../components/TwoColumn/TwoColumn'

const AboutPage = () => {
  return (
    <section className="about">
      <Hero heading="About Something" subheading="I don't know" />
      <TwoColumn left="Hello, World" right="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
    </section>
   );
}

export default AboutPage;