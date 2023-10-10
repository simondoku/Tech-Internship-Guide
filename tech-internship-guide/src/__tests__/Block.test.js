import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { Block, BlockSection } from "../components/Block";
import renderer from "react-test-renderer";
import { BLOCK_CONTENTS, BLOCK_SECTIONS } from "../core/block-cores";

// Clean up after each test
afterEach(cleanup);

describe("Block Component Testing", () => {
  // Test for rendering Block component with props
  test("Block component renders correctly with props", () => {
    // Arrange: Prepare props
    const blockId = Object.keys(BLOCK_CONTENTS)[0];
    const blockData = BLOCK_CONTENTS[blockId];

    // Act: Render the Block component
    render(<Block blockId={blockId} />);

    // Assert: Check if elements are present
    const blockNameElement = screen.getByText(blockData.name);
    const viewButton = screen.getByTestId("RemoveRedEyeOutlinedIcon");
    const launchButton = screen.getByTestId("LaunchIcon");

    expect(blockNameElement).toBeInTheDocument();
    expect(viewButton).toBeInTheDocument();
    expect(launchButton).toBeInTheDocument();
  });

  // Test for clicking on the view button to open a modal
  test("Clicking on view button opens a Modal", () => {
    const blockId = Object.keys(BLOCK_CONTENTS)[0];
    const blockData = BLOCK_CONTENTS[blockId];

    render(<Block blockId={blockId} />);

    const viewButton = screen.getByTestId("RemoveRedEyeOutlinedIcon");

    // Simulate a click on the view button
    fireEvent.click(viewButton);

    // Assert: Check if the modal content is present and matches with the block
    expect(screen.getByText(blockData.description)).toBeInTheDocument();
  });

  // Test for clicking on the launch button to open a new tab
  test("Clicking on launch button opens a new tab", () => {
    const blockId = Object.keys(BLOCK_CONTENTS)[0];
    const blockData = BLOCK_CONTENTS[blockId];

    render(<Block blockId={blockId} />);

    // Get all elements with role "link" (assuming this is how your launch button is implemented)
    const launchButton = screen.getAllByRole("link");

    // Get the last launch button (assuming it's the one you want to test)
    const lastLaunchButton = launchButton[launchButton.length - 1];

    // Assert: Check attributes of the link element
    expect(lastLaunchButton).toHaveAttribute("target", "_blank");
    expect(lastLaunchButton).toHaveAttribute("rel", "noreferrer");
    expect(lastLaunchButton).toHaveAttribute(
      "href",
      `https://www.${blockData.link}`
    );
  });

  test("Testing BlockSection Component exported from Block", () => {
    const sectionName = "Test Section";
    const sectionId = "pFundamentals";

    render(<BlockSection sectionName={sectionName} sectionId={sectionId} />);
    expect(screen.getByText(sectionName)).toBeInTheDocument();

    // pfundamentals is property of BLOCK_SECTION obj, we are using it to access another object BLOCK_CONTENTS
    BLOCK_SECTIONS[sectionId].forEach((element) => {
      // BLOCK_CONTENTS is taking element as 'key' to access the corresponding object mapped to it
      // and calling name property of the object
      // e.g. if element = w3school, then textElement = BLOCK_CONTENTS.w3school.name
      const textElement = BLOCK_CONTENTS[element].name;
      expect(screen.getByText(textElement)).toBeInTheDocument();
    });
  });

  // Snapshot testing of the Block component
  test("Create Snapshot of the Block", () => {
    // Arrage: Prepare Props
    const blockId = Object.keys(BLOCK_CONTENTS)[0];

    // Act: Create a snapshot of the Block component
    const component = renderer.create(<Block blockId={blockId} />).toJSON();

    // Assert: Compare the snapshot
    expect(component).toMatchSnapshot();
  });
});
