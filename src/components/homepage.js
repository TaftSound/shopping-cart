import React from "react";
import homepageImage from "../images/homepage.jpeg"

function Homepage () {

  return (
    <div>
      <h1>Welcome!</h1>
      <div className="background-container">
        <img className="background-image" src={homepageImage} alt="Racks of clothing" />
      </div>
      {/* <div className="text-card">
        <p>Welcome to our online clothing store, where fashion meets
        comfort!</p>
      </div> */}
    </div>
  )
}

export default Homepage