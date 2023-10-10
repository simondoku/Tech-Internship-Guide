import { render, screen } from "@testing-library/react";
import { expect } from "@jest/globals";
import { Footer } from "../components/Footer";

describe("Footer Component Test Suite", () => {
  test("Footer should render", () => {
    render(<Footer />);

    // Check if the right text is present in the footer
    expect(
      screen.getByText((content, element) =>
        content.includes("What is the Tech Internship Guide?")
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText((content, element) =>
        content.includes(
          "It's an open source project that organizes websites and other"
        )
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText((content, element) =>
        content.includes("resources needed for you to land a tech internship")
      )
    ).toBeInTheDocument();

    // Check if buttons are rendered
    expect(screen.getByText("Edit on Github")).toBeInTheDocument();
    expect(screen.getByText("Support this project")).toBeInTheDocument();
    expect(screen.getByText("Share this site")).toBeInTheDocument();
  });

  test("renders buttons with correct variants", () => {
    render(<Footer />);

    // Check button variants
    expect(screen.getByText("Edit on Github")).toHaveClass("btn-secondary");
    expect(screen.getByText("Support this project")).toHaveClass(
      "btn-secondary"
    );
    expect(screen.getByText("Share this site")).toHaveClass("btn-secondary");
  });
});
