import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

  const [currentRoute, setCurrentRoute] = useState('/')

  return (
      <div className="navbar">
        <h2>Clothing Store</h2>
        <nav>
          <Link to="/" role="link" onClick={() => setCurrentRoute("/")} 
          className={currentRoute === "/" ? "active" : "" } >Home</Link>
          <Link to="/shop" role="link" onClick={() => setCurrentRoute("/shop")} 
          className={currentRoute === "/shop" ? "active" : "" }>Shop</Link>
        </nav>
      </div>
  )
}

export default NavBar