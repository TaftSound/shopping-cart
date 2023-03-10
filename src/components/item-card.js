import React from "react";


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
      <img src={props.imgUrl} alt={props.name} />
      <h2>{props.name}</h2>
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