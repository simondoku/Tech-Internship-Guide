import React from "react";
import "@testing-library/jest-dom";
import "@jest/globals";
import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import { TAB_NAMES } from "../core/tab-names"; // Importing tab names from an external source
import { TabGroup } from "../components/Tab"; // Importing the TabGroup component
import { within } from "@testing-library/react";
import { FAQS, STORIES } from "../core/block-cores";

afterEach(cleanup); // Cleanup after each test

describe("TEST TAB GROUP", () => {
  // Test to check if the TabGroup component renders correctly
  test("Component Should render", () => {
    render(<TabGroup />); // Render the TabGroup component

    // Loop through each tab name in the TAB_NAMES array
    TAB_NAMES.forEach((tabElement, index) => {
      // Find all elements on the screen with the text equal to the current tab name
      const element = screen.getAllByText(tabElement.tabName.toString());

      // Check if the first element with the tab name is present on the screen
      expect(element[0]).toBeInTheDocument();
    });
  });

  // Test to check if clicking on the link renders the Class Component
  test("Clicking on Classes Link Renders the Class Component", () => {
    // An array of arrays containing text to be present after clicking each tab
    const TextArrayToBePresent = [
      ["Programming Fundamentals", "Data Structures and Algorithm"],
      ["Game Development", "Web Development"],
      ["Resume Templates", "Resume Building"],
      ["Behavioral Interview", "Technical Interview"],
      ["Internship Search"],
      ["Personal Notes", "Study Groups"],
      ["Tech Events and Meetups", "Diversity Groups"],
      [
        ...STORIES.map(
          (story) => `Software Engineering Intern, ${story.company}`
        ),
        ...STORIES.map((story) => story.story),
      ],
      [
        "Frequently Asked Questions",
        ...FAQS.map((faq) => faq.question),
    
      ],
    ];

    const view = render(<TabGroup />); // Render the TabGroup component

    // Loop through each tab in TAB_NAMES
    TAB_NAMES.forEach((element, index) => {
      const TestELement = screen.getByText(element.tabName);

      fireEvent.click(TestELement);

      // Find the clicked tab content element
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      const ClickedElement = view.container.querySelector(".active.show");

      // Loop through the expected text elements and check if they are present
      TextArrayToBePresent[index].forEach((element) => {
        expect(within(ClickedElement).getByText(element)).toBeTruthy();
      });
    });
  });
});
