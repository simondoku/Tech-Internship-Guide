import React from "react";
import { render, screen } from "@testing-library/react";
import { Navbar } from "../components/Navbar";

describe("Test Navbar component", () => {
  it("renders Navbar component correctly", () => {
    render(<Navbar />);

    // Assert that the "Tech Internship Guide" text is present in the rendered component
    expect(screen.getByText("Tech Internship Guide")).toBeInTheDocument();

    // Assert that the "Add a Site" button is present
    expect(screen.getByText("Add a Site")).toBeInTheDocument();

    // Assert that the "This site updates every 30th" button is present
    expect(
      screen.getByText("This site updates every 30th")
    ).toBeInTheDocument();
  });
});
