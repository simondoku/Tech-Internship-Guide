import { render, screen } from "@testing-library/react";
import { FeaturedStory } from "../components/FeaturedStory";
import { expect } from "@jest/globals";

describe("FeaturedStory Component Test Suite", () => {
  test("FeaturesStory should render", () => {
    const featuredItem = {
      company: "Test company",
      story: "hello world",
    };
    render(<FeaturedStory featuredItem={featuredItem} />);
    expect(
      screen.getByText(`Software Engineering Intern, ${featuredItem.company}`)
    ).toBeInTheDocument();
    expect(screen.getByText(featuredItem.story)).toBeInTheDocument();
  });
});
