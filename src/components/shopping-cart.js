import React, { useState } from "react";

const ShoppingCart = (props) => {

  const [checkout, setCheckout] = useState(false)

  const getItemCount = () => {
    const itemsObject = props.items
    const itemNames = Object.keys(itemsObject)
    let itemCount = 0

    for (let i = 0; i < itemNames.length; i++) {
      const currentItem = itemsObject[itemNames[i]]
      itemCount += currentItem.count
    }

    return itemCount
  }

  const toggleCheckout = () => {
    checkout ? setCheckout(false) : setCheckout(true)
  }

  return (
    <div className={checkout ? "cart checkout" : "cart"} data-testid="cart-container">
      <button onClick={toggleCheckout}>Checkout</button>
      <h3 data-testid="cart-count">{getItemCount()}</h3>
    </div>
  )
}

export default ShoppingCart