import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import ShoppingCart from "../components/shopping-cart";

describe("Shopping cart", () => {
  it("renders zero items when empty", () => {
    render(<ShoppingCart items={[]} />)
    const counter = screen.getByRole('heading')

    expect(counter.textContent).toBe("0")
  })
  it("renders one item", () => {
    const itemsArrayOne = ['a']
    render(<ShoppingCart items={itemsArrayOne}/>)
    const counter = screen.getByRole('heading')

    expect(counter.textContent).toBe("1")
  })
  it("renders three items", () => {
    const itemsArrayThree = ['a', 'b', 'c']
    render(<ShoppingCart items={itemsArrayThree}/>)
    const counter = screen.getByRole('heading')

    expect(counter.textContent).toBe("3")
  })
  it("renders five items", () => {
    const itemsArrayFive = ['a', 'b', 'c', 'd', 'e']
    render(<ShoppingCart items={itemsArrayFive}/>)
    const counter = screen.getByRole('heading')

    expect(counter.textContent).toBe("5")
  })
  it("cart starts without 'checkout' css class", () => {
    render(<ShoppingCart />)
    const cartDiv = screen.getByTestId('cart-container')

    expect(cartDiv.className).toBe("cart")
  })
  it("checkout button toggles 'checkout' css class", () => {
    render(<ShoppingCart />)
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