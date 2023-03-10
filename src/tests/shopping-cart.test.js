import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import ShoppingCart from "../components/shopping-cart";

const fakeImgUrl = "www.fakeimg.com/fake"

describe("Shopping cart", () => {
  it("renders zero items when empty", () => {
    render(<ShoppingCart items={{}} />)
    const counter = screen.getByRole('heading')

    expect(counter.textContent).toBe("0")
  })
  it("renders one item", () => {
    const itemsObjectOne = {itemOne: { count: 1, cost: 25, imgUrl: fakeImgUrl } }
    render(<ShoppingCart items={itemsObjectOne}/>)
    const counter = screen.getByRole('heading')

    expect(counter.textContent).toBe("1")
  })
  it("renders three items", () => {
    const itemsObjectThree = {itemOne: { count: 1, cost: 25, imgUrl: fakeImgUrl },
                              itemTwo: { count: 1, cost: 15, imgUrl: fakeImgUrl },
                              itemThree: { count: 1, cost: 5, imgUrl: fakeImgUrl } }
    render(<ShoppingCart items={itemsObjectThree}/>)
    const counter = screen.getByRole('heading')

    expect(counter.textContent).toBe("3")
  })
  it("renders correct count with item multiples", () => {
    const itemsObjectThree = {itemOne: { count: 1, cost: 25, imgUrl: fakeImgUrl },
                              itemTwo: { count: 1, cost: 15, imgUrl: fakeImgUrl },
                              itemThree: { count: 3, cost: 5, imgUrl: fakeImgUrl } }
    render(<ShoppingCart items={itemsObjectThree}/>)
    const counter = screen.getByRole('heading')

    expect(counter.textContent).toBe("5")
  })
  it("cart starts without 'checkout' css class", () => {
    render(<ShoppingCart items={{}} />)
    const cartDiv = screen.getByTestId('cart-container')

    expect(cartDiv.className).toBe("cart")
  })
  it("checkout button toggles 'checkout' css class", () => {
    render(<ShoppingCart items={{}} />)
    const cartDiv = screen.getByTestId('cart-container')
    const checkoutButton = screen.getByRole('button')

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.click(checkoutButton)
    })
  
    expect(cartDiv.className).toBe("cart checkout")

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.click(checkoutButton)
    })
  
    expect(cartDiv.className).toBe("cart")
  })
})