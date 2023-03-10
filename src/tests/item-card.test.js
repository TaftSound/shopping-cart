import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ItemCard from "../components/item-card";

  describe("Test ItemCard component", () => {
    it('passes imgUrl from props', () => {
      const imgUrl = 'http://images-n-stuff.com/my-image.jpeg'

      render(<ItemCard imgUrl={imgUrl}/>)
      const imgElement = screen.getByRole("img")

      expect(imgElement.src).toBe(imgUrl)
    })

    it("renders item name from props", () => {
      render(<ItemCard name="Some Item"/>)
      const nameElement = screen.getAllByRole("heading")

      expect(nameElement[0].textContent).toBe("Some Item")
    })

    it("renders cost from props", () => {
      render(<ItemCard cost={45} />)
      const nameElement = screen.getAllByRole("heading")
      
      expect(nameElement[1].textContent).toBe("45$")
    })

    it("if in cart, renders count and more/less buttons", () => {
      render(<ItemCard numberInCart={2} />)
      const nameElement = screen.getAllByRole("heading")
      
      expect(nameElement[2].textContent).toBe("2")
    })

    it("more button calls function passed from props", () => {
      const mockFunction = jest.fn()
      render(<ItemCard numberInCart={2} increaseCount={mockFunction} />)
      const moreButton = screen.getByTestId("increase-count")

      userEvent.click(moreButton)
      userEvent.click(moreButton)
      userEvent.click(moreButton)
      expect(mockFunction).toBeCalledTimes(3)
    })

    it("less button calls function passed from props", () => {
      const mockFunction = jest.fn()
      render(<ItemCard numberInCart={2} decreaseCount={mockFunction} />)
      const lessButton = screen.getByTestId("decrease-count")

      userEvent.click(lessButton)
      userEvent.click(lessButton)
      expect(mockFunction).toBeCalledTimes(2)
    })
  })

  it("if none in cart, renders add to cart button", () => {
    render(<ItemCard numberInCart={0} />)
    const buttonElement = screen.getByTestId("add-to-cart")
    
    expect(buttonElement).toBeInTheDocument()
  })
  it("add to cart button calls function passed from props", () => {
    const mockFunction = jest.fn()
    render(<ItemCard numberInCart={0} addToCart={mockFunction}/>)
    const buttonElement = screen.getByTestId("add-to-cart")
    
    userEvent.click(buttonElement)

    expect(mockFunction).toHaveBeenCalled()
  })