import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Animal from "./Animal";

function AniModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Maximize
      </Button>

      <Modal show={show} onHide={handleClose}
      style = {{color: "green",}}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body> <img src = {props.image} alt = {props.title} width = "465"/>
        </Modal.Body>
        <Modal.Footer>
          {props.description}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AniModal;
