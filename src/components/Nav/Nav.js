import React from 'react';
import { Link } from "gatsby"

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about/">About</Link>
    </nav>
   );
}

export default Nav;