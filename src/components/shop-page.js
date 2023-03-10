import React, { useState } from "react";
import ShoppingCart from "./shopping-cart";
import ItemCard from "./item-card";
import blackShortsImg from "../images/black-shorts.jpeg"
import greyShortsImg from "../images/grey-shorts.jpeg"
import greyBeanieImg from "../images/grey-beanie.jpeg"
import beigeBeanieImg from "../images/beige-beanie.jpeg"
import blackShirtImg from "../images/black-t-shirt.jpeg"
import adobeShirtImg from "../images/adobe-t-shirt.jpeg"


let itemsObject = {
  "Black T-Shirt": {name: "Black T-Shirt", count: 0, cost: 20, imgUrl: blackShirtImg},
  "Adobe T-Shirt": {name: "Adobe T-Shirt", count: 0, cost: 20, imgUrl: adobeShirtImg},
  "Black Gym Shorts": {name: "Black Gym Shorts", count: 0, cost: 25, imgUrl: blackShortsImg},
  "Grey Gym Shorts": {name: "Grey Gym Shorts", count: 0, cost: 25, imgUrl: greyShortsImg},
  "Grey Beanie": {name: "Grey Beanie", count: 0, cost: 15, imgUrl: greyBeanieImg},
  "Beige Beanie": {name: "Beige Beanie", count: 0, cost: 15, imgUrl: beigeBeanieImg}
}

function ShopPage (props) {
  if (props.itemsObject) { itemsObject = props.itemsObject }
  
  const [itemData, setItemData] = useState(itemsObject)

  const addToCart = (name) => {
    if (!itemData[name].count){
      const newItemData = { ...itemData }
      newItemData[name].count = 1
      setItemData(newItemData)
    }
  }

  const increaseCount = (name) => {
    const newItemData = { ...itemData }
    newItemData[name].count += 1 
    setItemData(newItemData)
  }

  const decreaseCount = (name) => {
    const newItemData = { ...itemData }
    newItemData[name].count -= 1 
    setItemData(newItemData)
  }

  return (
    <div>
      <ShoppingCart items={itemData} />
      <div className="items-container">
        {Object.values(itemData).map((item) => {
          return <ItemCard 
                   key={item.name}
                   name={item.name}
                   cost={item.cost}
                   imgUrl={item.imgUrl}
                   addToCart={addToCart}
                   increaseCount={increaseCount}
                   decreaseCount={decreaseCount}
                   numberInCart={item.count}
                 />
        })}
      </div>
    </div>
  )
}

export default ShopPage