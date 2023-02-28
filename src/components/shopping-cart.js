import React, { useState } from "react";

const ShoppingCart = (props) => {

  const [items, setItems] = useState(props.items ? props.items : [])
  const [checkout, setCheckout] = useState(false)

  const toggleCheckout = () => {
    checkout ? setCheckout(false) : setCheckout(true)
  }

  return (
    <div className={checkout ? "cart checkout" : "cart"} data-testid="cart-container">
      <button onClick={toggleCheckout}>Checkout</button>
      <h3>{items.length}</h3>
    </div>
  )
}

export default ShoppingCart