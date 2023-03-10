import React from "react";
import Icon from "@mdi/react";
import { mdiCartCheck, mdiMenuUp, mdiMenuDown } from "@mdi/js";

const ItemCard = (props) => {

  const addToCart = () => {
    props.addToCart(props.name)
  }
  const increaseCount = () => {
    props.increaseCount(props.name)
  }
  const decreaseCount = () => {
    props.decreaseCount(props.name)
  }
  
  return (
    <div className="item-card" data-testid="item-card">
      {props.numberInCart ? <Icon className="icon" path={mdiCartCheck}/> : null }
      <img src={props.imgUrl} alt={props.name} />
      <h2>{props.name}</h2>
      <h2>{props.cost}$</h2>
      {props.numberInCart
      ? <div className="cart-control in-cart">
          <h2>{props.numberInCart}</h2>
          <div className="item-count-control">
            <button onClick={increaseCount} data-testid="increase-count"><Icon path={mdiMenuUp} size={1} /></button>
            <button onClick={decreaseCount} data-testid="decrease-count"><Icon path={mdiMenuDown} size={1} /></button>
          </div>
        </div>
      : <div className="cart-control">
          <button onClick={addToCart} data-testid="add-to-cart">Add to cart</button>
        </div> }
    </div>
  )
}

export default ItemCard