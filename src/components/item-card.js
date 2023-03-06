import React from "react";


const ItemCard = (props) => {

  const addToCart = () => {
    props.addToCart(props.itemName)
  }
  const increaseCount = () => {
    props.increaseItemCount(props.itemName)
  }
  const decreaseCount = () => {
    props.decreaseItemCount(props.itemName)
  }
  
  return (
    <div className="item-card">
      <img src={props.imgUrl} alt={props.imgAlt} />
      <h2>{props.itemName}</h2>
      <h2>{props.cost}$</h2>
      {props.numberInCart
      ? <div>
          <h3>{props.numberInCart}</h3>
          <div className="item-count-control">
            <button onClick={increaseCount} data-testid="increase-count">More</button>
            <button onClick={decreaseCount} data-testid="decrease-count">Less</button>
          </div>
        </div>
      : <button onClick={addToCart} data-testid="add-to-cart">Add to cart</button> }
    </div>
  )
}

export default ItemCard