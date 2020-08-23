import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert", () => {
  it("displays error message", () => {
    const { getByText } = render(<Alert message="Error!" />);

    expect(getByText(/Error/).textContent).toBe("Error!");
  });

  it("displays success message", () => {
    const { getByText } = render(<Alert message="Success!!!" success />);

    expect(getByText(/Success/).textContent).toBe("Success!!!");
  });

  it("does not render is message is not truthy", () => {
    const { asFragment } = render(<Alert message="" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
