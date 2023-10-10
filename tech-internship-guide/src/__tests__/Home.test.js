import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "../pages/Home"; // Importing the Home component to be tested
import { TAB_NAMES } from "../core/tab-names"; // Importing the tab names from an external source

describe("TESTING HOME PAGE", () => {
  // Test to check the Home Page Component
  test("Testing the Home Page Component", () => {
    render(<Home />); // Render the Home component

    // Check if the text starting with "Unlock" is present on the screen
    expect(
      screen.getByText((content, element) => content.startsWith("Unlock"))
    ).toBeInTheDocument();

    // Check if a specific text is present on the screen
    expect(
      screen.getByText(
        "A colletions of all resources you need to land your first Computer Science Internship"
      )
    ).toBeInTheDocument();
  });

  // Test to check if the TABGROUP is being rendered
  test("Check If TABGROUP is being rendered", () => {
    render(<Home />); // Render the Home component

    // Loop through each tab name in the TAB_NAMES array
    TAB_NAMES.forEach((tabElement) => {
      // Find all elements on the screen with the text equal to the current tab name
      const element = screen.getAllByText(tabElement.tabName.toString());

      // Check if the first element with the tab name is present on the screen
      expect(element[0]).toBeInTheDocument();
    });
  });

  // Test to check if the Footer is being rendered
  test("Check If Footer is being rendered", () => {
    render(<Home />); // Render the Home component

    expect(
      screen.getByText((content, element) =>
        content.includes("What is the Tech Internship Guide?")
      )
    ).toBeInTheDocument();
  });
});
