import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { InfoModal, ModalContent } from "../components/InfoModal";

// Clean up after each test
afterEach(cleanup);

/* Test suite for the InfoModal component and ModalContent component. */
describe("InfoModal and ModalContent Testing", () => {
  /* Test case for rendering the InfoModal component.*/
  test("InfoModal should render correctly", () => {
    // Arrange: Prepare props
    const children = "Children";
    const setShow = jest.fn();
    const show = true;

    // Act: Render the InfoModal component
    render(<InfoModal setShow={setShow} show={show} children={children} />);

    // Assert: Check if children text is present in the modal
    expect(screen.getByText(children)).toBeInTheDocument();
  });

  /* Test case for rendering the ModalContent component */
  test("ModalContent should render correctly", () => {
    // Arrange: Prepare props
    const modalBodyContent = "Hello World";
    const modalTitle = "Hi Everyone";

    // Act: Render the ModalContent component
    render(
      <ModalContent
        modalBodyContent={modalBodyContent}
        modalTitle={modalTitle}
      />
    );

    // Assert: Check if modal body content and title are present
    expect(screen.getByText(modalBodyContent)).toBeInTheDocument();
    expect(screen.getByText(modalTitle)).toBeInTheDocument();
  });
});
