import * as A from "react-bootstrap";
import Button from 'react-bootstrap/Button';
// import {useState} from 'react';

export default function ComingSoon(props) {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const show = props.show;
  const handleClose = props.handleClose;
  const handleShow = props.handleShow;

  return (
    <>
      <A.Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <A.Modal.Header closeButton>
          <A.Modal.Title centered>COMING SOON</A.Modal.Title>
        </A.Modal.Header>
        <A.Modal.Body>
          This Feature is coming soon ...
        </A.Modal.Body>
        <A.Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </A.Modal.Footer>
      </A.Modal>
    </>
  );
}

