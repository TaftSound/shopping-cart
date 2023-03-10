import React from "react";
import homepageImage from "../images/homepage.jpeg"

function Homepage () {

  return (
    <div>
      <h1>Welcome!</h1>
      <div className="background-container">
        <img className="background-image" src={homepageImage} alt="Racks of clothing" />
      </div>
    </div>
  )
}

export default Homepage