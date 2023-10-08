import Modal from 'react-bootstrap/Modal';

export const ModalContent = (props) => {
  const { modalBodyContent, modalTitle } = props;

  return(
    <div>
      <Modal.Header closeButton>
        <Modal.Title id="modal">
          {modalTitle}
        </Modal.Title>
      </Modal.Header>
        <Modal.Body>
          <p>
            {modalBodyContent}
          </p>
      </Modal.Body>
    </div>
  );
};

export const InfoModal = ({show, setShow, children}) => {
  const closeModal = () => {
    setShow(false);
  };

  return (
      <Modal
        show={show}
        onHide={closeModal}
        dialogClassName="modal-90w modal-50h"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        {children}
      </Modal>
  );
};
