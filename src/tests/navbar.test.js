import NavBar from "../components/navbar";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

describe("NavBar Rendering", () => {

  it("renders home and shop link", () => {
    render(<BrowserRouter>
             <NavBar />
           </BrowserRouter>)
    const linkArray = screen.getAllByRole("link")
    expect(linkArray[0].textContent).toBe("Home")
    expect(linkArray[1].textContent).toBe("Shop")
  })

  it("has correct route attributes", () => {
    render(<BrowserRouter>
             <NavBar />
           </BrowserRouter>)
    const linkArray = screen.getAllByRole("link")

    expect(linkArray[0]).toHaveAttribute("href", "/")
    expect(linkArray[1]).toHaveAttribute("href", "/shop")
  })

})