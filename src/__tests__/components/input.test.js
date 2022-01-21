import { render, screen } from "@testing-library/react";
import { Input } from "semantic-ui-react";

describe("Input test", () => {

  it("should be render input", () => {

    render(<Input placeholder="Insira o CEP" />)

    expect(screen.getByPlaceholderText("Insira o CEP")).toBeTruthy()

  })
})