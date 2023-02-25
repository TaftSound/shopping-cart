import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
      <nav>
        <ul>
          <li>
            <Link to="/" role="link">Home</Link>
          </li>
          <li>
            <Link to="/shop" role="link">Shop</Link>
          </li>
        </ul>
      </nav>
  )
}

export default NavBar