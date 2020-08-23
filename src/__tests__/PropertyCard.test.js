import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";
import { faItalic } from "@fortawesome/free-solid-svg-icons";

describe("PropertyCard", () => {
  const component = render(
    <PropertyCard
      title="2 Bed"
      type="Detached"
      bathrooms="1"
      bedrooms="2"
      price="1400000"
      city="Manchester"
      email="email@email.com"
    />
  );

  it("renders the correct data", () => {
    const { getByText, getAllByTestId } = render(
      <PropertyCard props={component} />
    );

    expect(getByText("2 Bed")).toBeInTheDocument();
    expect(getByText("Detached")).toBeInTheDocument();
    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
    expect(getByText("1400000")).toBeInTheDocument();
    expect(getByText("Manchester")).toBeInTheDocument();
    expect(getAllByTestId("email")).toBeTruthy();
  });
});
