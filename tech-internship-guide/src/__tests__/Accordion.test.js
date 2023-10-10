import React from "react";
import {
  render,
  screen,
  fireEvent,
  cleanup,
  within,
} from "@testing-library/react";
import { Accordion as Accord } from "../components/Accordion";
import { FAQS } from "../core/block-cores";

// Clean up after each test
afterEach(cleanup);

describe("Accordion Component Testing", () => {
  // Test for rendering Accordion component
  test("Accordion component renders correctly", () => {
    // Act: Render the Accordion component
    render(<Accord />);
  });

  test("All AccordionItem components are present", () => {
    render(<Accord />);

    // Get all the accordian items
    const accordionItems = screen.getAllByRole("button", {
      attribute: /aria-expanded/,
    });

    // Assert: Check if all the accordian items are present
    expect(accordionItems).toHaveLength(FAQS.length);
  });

  test("AccordionItem expands on click", () => {
    render(<Accord />);

    // Get the accordian item for first question
    const firstQuestion = FAQS[0].question;
    const accordionItem = screen.getAllByText(firstQuestion)[0];

    // Act: Expand the accordian
    fireEvent.click(accordionItem);

    // Assert: Check if it gets expanded on click
    expect(accordionItem).toHaveAttribute("aria-expanded", "true");
  });

  test("AccordionItem content is displayed on click", () => {
    render(<Accord />);

    // Get the accordian item for first question
    const faq = FAQS[0];
    const accordionItem = screen.getAllByText(faq.question)[0];

    // Act: Expand the accordian
    fireEvent.click(accordionItem);
    const accordianRoot = accordionItem.parentElement.parentElement;

    // Assert: Check if the answer exists
    expect(within(accordianRoot).getByText(faq.answer)).toBeTruthy();
  });

  test("AccordionItem collapses previous one when a new one is clicked", () => {
    render(<Accord />);

    // Get all the accordian items
    const accordionItems = screen.getAllByRole("button", {
      attribute: /aria-expanded/,
    });

    // Act: Expand first accordian
    fireEvent.click(accordionItems[0]);

    // Assert: Check if first accordian is expanded and rest is collapsed
    expect(accordionItems[0]).toHaveAttribute("aria-expanded", "true");
    accordionItems.forEach((accordian, index) => {
      if (index === 0) {
        return;
      }
      expect(accordian).toHaveAttribute("aria-expanded", "false");
    });

    // Act: Expand second accordian
    fireEvent.click(accordionItems[1]);

    // Assert: Check if first accordian is collapsed and second is expanded
    expect(accordionItems[0]).toHaveAttribute("aria-expanded", "false");
    expect(accordionItems[1]).toHaveAttribute("aria-expanded", "true");
  });
});
