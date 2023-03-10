import React, { useState } from "react";
import ShoppingCart from "./shopping-cart";
import ItemCard from "./item-card";


let itemsObject = {
  "Item One": {name: "Item One", count: 0, cost: 25, imgUrl: "www.fakeurl.com/fakeimage"},
  "Item Two": {name: "Item Two", count: 0, cost: 15, imgUrl: "www.fakeurl.com/fakeimage"},
  "Item Three": {name: "Item Three", count: 0, cost: 30, imgUrl: "www.fakeurl.com/fakeimage"},
  "Item Four": {name: "Item Four", count: 0, cost: 5, imgUrl: "www.fakeurl.com/fakeimage"}
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