import React from "react";
import ShoppingCart from "./shopping-cart";

// the shop page itself should:
  // contain all of the items that can be purchased
  // have a button to add each item to cart
  // store all of the items in cart
  // have add/remove functionality
  // have buttons to increase/decrease number of one item

function Shop () {

  return (
    <div>
      <ShoppingCart />
    </div>
  )
}

export default Shop