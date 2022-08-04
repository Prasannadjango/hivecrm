import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FaBeer } from 'react-icons/fa';
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  FormControl,
  FormGroup,
  Form
} from "react-bootstrap";

function Aboutus() {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <>
    <div class="formaboutbg">
      <div class="aboutusheading"> ABOUTUS</div>
      <p class="para">How can I write paragraph in Gandhiji?
Short Paragraph on Mahatma Gandhi 1 (100 words)

Mohandas Karamchand Gandhi, popularly known as Mahatma Gandhi, was born on 2nd October 1869. He was a lawyer by profession. He could have practiced law and spent a comfortable life. However, he chose to fight the British by participating in India's struggle for freedom.</p>
    
{/* <Button class="button2" variant="primary" onClick={handleShow}>
        Edit 
      </Button> */}

      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Aboutus Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
     
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3}  />
       <FaBeer/>
      </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
     
    </>
  );
}

export default Aboutus;
