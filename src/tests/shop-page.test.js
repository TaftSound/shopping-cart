/* eslint-disable testing-library/no-unnecessary-act */
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import ShopPage from "../components/shop-page";
import { act } from "react-dom/test-utils";

// To test:
  // shop page displays shoppingCart bar --done
  // cart amount updates when an item is added to cart
  // cart amount updates when count of item is increased
  // cart amount updates when count of item is decreased
  
  // shop page display all provided items for sale --done
  // item card in cart amount changes when increase count button is clicked
  // item card in cart amount changes when decrease count button is clicked

  describe("Shop page user interface", () => {
    it("Shop page displays shopping cart bar", () => {
      render(<ShopPage />)
      const shoppingCart = screen.getByTestId('cart-container')

      expect(shoppingCart).toBeInTheDocument()
    })

    it("shop page displays one item for sale", () => {
      const itemsObject = {"Item One": {name: "Item One", cost: 25, imgUrl: "www.fakeurl.com/fakeimage"}}

      render(<ShopPage itemsObject={itemsObject} />)
      const itemElements = screen.getAllByTestId("item-card")

      expect(itemElements.length).toBe(1)
    })

    it("shop page displays all items for sale", () => {
      const itemsObject = {"Item One": {name: "Item One", cost: 25, imgUrl: "www.fakeurl.com/fakeimage"},
                         "Item Two": {name: "Item Two", cost: 5, imgUrl: "www.fakeurl.com/fakeimage2"},
                         "Item Three": {name: "Item Three", cost: 15, imgUrl: "www.fakeurl.com/fakeimage3"}
                        }

      render(<ShopPage itemsObject={itemsObject} />)
      const itemElements = screen.getAllByTestId("item-card")

      expect(itemElements.length).toBe(3)
    })

    it("cart amount updates when an item is added to cart", () => {
      const itemsObject = {"Item One": {name: "Item One", cost: 25, imgUrl: "www.fakeurl.com/fakeimage"}}

      render(<ShopPage itemsObject={itemsObject} />)
      const addToCartButton = screen.getByTestId("add-to-cart")
      
      act(() => {
        userEvent.click(addToCartButton)
      })

      const cartCountElement = screen.getByTestId("cart-count")

      expect(cartCountElement.textContent).toBe("1")      
    })

    it("cart amount updates when count of item is increased", () => {
      const itemsObject = {"Item One": {name: "Item One", count: 1, cost: 25, imgUrl: "www.fakeurl.com/fakeimage"}}

      render(<ShopPage itemsObject={itemsObject} />)
      const moreButton = screen.getByTestId("increase-count")
      
      act(() => {
        userEvent.click(moreButton)
      })

      const cartCountElement = screen.getByTestId("cart-count")

      expect(cartCountElement.textContent).toBe("2")      
    })

    it("cart amount updates when count of item is decreased", () => {
      const itemsObject = {"Item One": {name: "Item One", count: 4, cost: 25, imgUrl: "www.fakeurl.com/fakeimage"}}

      render(<ShopPage itemsObject={itemsObject} />)
      const moreButton = screen.getByTestId("decrease-count")
      
      act(() => {
        userEvent.click(moreButton)
      })

      const cartCountElement = screen.getByTestId("cart-count")

      expect(cartCountElement.textContent).toBe("3")      
    })
  })