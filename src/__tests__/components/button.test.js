import { render, screen } from "@testing-library/react";
import { Button } from "semantic-ui-react";

describe("Button test", () => {

  it("should be render the button", () => {

    render(<Button>Buscar pelo CEP</Button>)

    expect(screen.getByText("Buscar pelo CEP")).toBeTruthy()

  })
})