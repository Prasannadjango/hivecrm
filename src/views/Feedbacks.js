import React, { useState } from 'react';

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col
} from "react-bootstrap";

function User() {
  const [all, setall] = useState(true);
  const [progress, setProgress] = useState(true);
  const [pending, setPending] = useState(true);
  const [solved, setsolved] = useState(true);
  
  const allHandler = () => {
    setall(true);
		setProgress(false);
	  setPending(false);
    setsolved(false);
	};
  
  const ProgressHandler = () => {
		setProgress(true);
	  setPending(false);
    setall(false);
    setsolved(false);
	};
  const PendingHandler = () => {
		setPending(true);
	  setProgress(false);
    setall(false);
    setsolved(false);
	};
  const solvedHandler = () => {
		setsolved(true);
	  setProgress(false);
    setall(false);
    setPending(false);
	};
  return (
    <>
      <div>
      <div className="d-flex feedbackbtn_container ">
            <Button  onClick={allHandler}>All</Button>
            <Button onClick={ProgressHandler}>In-Progress</Button>
            <Button  onClick={PendingHandler}>Pending</Button>
            <Button  onClick={solvedHandler}>Solved</Button>
      </div>


          <div className='page_container'>



          {all && (
			      <>
            <div className='Feedback_all row container'>
            <Card style={{ width: '20rem' }} className="p-2">
      <Card.Body>
        <Card.Title className="Feedback_header">
         <div><h4>Profile update Issue</h4></div>
         <div className="d-flex">
         <h6>Status</h6>
         <p className="text-success">Resolved</p>
         </div>
        </Card.Title>
         <div>
         </div>
        <Card.Text>
         <div className="mt-4 d-flex">
          <h5>Ticket-ID :</h5>
          <p className="ticket_txt">#11633</p>
         </div>
         <div className="mt-2 d-flex">
          <h5>Date & Time :</h5>
          <p className="ticket_txt">12.2.22 2:10pm</p>
         </div>
         <div className="mt-2 ">
          <h5>Description :</h5>
          <p className="ticket_txt">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
         </div>
        </Card.Text>
       
      </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }} className="p-2">
      <Card.Body>
        <Card.Title className="Feedback_header">
         <div><h4>Profile update Issue</h4></div>
         <div className="d-flex">
         <h6>Status</h6>
         <p className="text-warning">In-progress</p>
         </div>
        </Card.Title>
         <div>
         </div>
        <Card.Text>
         <div className="mt-4 d-flex">
          <h5>Ticket-ID :</h5>
          <p className="ticket_txt">#11633</p>
         </div>
         <div className="mt-2 d-flex">
          <h5>Date & Time :</h5>
          <p className="ticket_txt">12.2.22 2:10pm</p>
         </div>
         <div className="mt-2 ">
          <h5>Description :</h5>
          <p className="ticket_txt">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
         </div>
        </Card.Text>
       
      </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }} className="p-2">
      <Card.Body>
        <Card.Title className="Feedback_header">
         <div><h4>Profile update Issue</h4></div>
         <div className="d-flex">
         <h6>Status</h6>
         <p className="text-danger">Pending</p>
         </div>
        </Card.Title>
         <div>
         </div>
        <Card.Text>
         <div className="mt-4 d-flex">
          <h5>Ticket-ID :</h5>
          <p className="ticket_txt">#11633</p>
         </div>
         <div className="mt-2 d-flex">
          <h5>Date & Time :</h5>
          <p className="ticket_txt">12.2.22 2:10pm</p>
         </div>
         <div className="mt-2 ">
          <h5>Description :</h5>
          <p className="ticket_txt">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
         </div>
        </Card.Text>
       
      </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }} className="p-2">
      <Card.Body>
        <Card.Title className="Feedback_header">
         <div><h4>Profile update Issue</h4></div>
         <div className="d-flex">
         <h6>Status</h6>
         <p className="text-success">Resolved</p>
         </div>
        </Card.Title>
         <div>
         </div>
        <Card.Text>
         <div className="mt-4 d-flex">
          <h5>Ticket-ID :</h5>
          <p className="ticket_txt">#11633</p>
         </div>
         <div className="mt-2 d-flex">
          <h5>Date & Time :</h5>
          <p className="ticket_txt">12.2.22 2:10pm</p>
         </div>
         <div className="mt-2 ">
          <h5>Description :</h5>
          <p className="ticket_txt">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
         </div>
        </Card.Text>
       
      </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }} className="p-2">
      <Card.Body>
        <Card.Title className="Feedback_header">
         <div><h4>Profile update Issue</h4></div>
         <div className="d-flex">
         <h6>Status</h6>
         <p className="text-warning">In-progress</p>
         </div>
        </Card.Title>
         <div>
         </div>
        <Card.Text>
         <div className="mt-4 d-flex">
          <h5>Ticket-ID :</h5>
          <p className="ticket_txt">#11633</p>
         </div>
         <div className="mt-2 d-flex">
          <h5>Date & Time :</h5>
          <p className="ticket_txt">12.2.22 2:10pm</p>
         </div>
         <div className="mt-2 ">
          <h5>Description :</h5>
          <p className="ticket_txt">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
         </div>
        </Card.Text>
       
      </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }} className="p-2">
      <Card.Body>
        <Card.Title className="Feedback_header">
         <div><h4>Profile update Issue</h4></div>
         <div className="d-flex">
         <h6>Status</h6>
         <p className="text-warning">In-progress</p>
         </div>
        </Card.Title>
         <div>
         </div>
        <Card.Text>
         <div className="mt-4 d-flex">
          <h5>Ticket-ID :</h5>
          <p className="ticket_txt">#11633</p>
         </div>
         <div className="mt-2 d-flex">
          <h5>Date & Time :</h5>
          <p className="ticket_txt">12.2.22 2:10pm</p>
         </div>
         <div className="mt-2 ">
          <h5>Description :</h5>
          <p className="ticket_txt">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
         </div>
        </Card.Text>
       
      </Card.Body>
            </Card>
            
            
            </div>
         
          
            </>
          )}



          {progress && (
          
			      <div className='Feedback_all row container'>
            <Card style={{ width: '20rem' }} className="p-2">
      <Card.Body>
        <Card.Title className="Feedback_header">
         <div><h4>Profile update Issue</h4></div>
         <div className="d-flex">
         <h6>Status</h6>
         <p className="text-warning">In-Progress</p>
         </div>
        </Card.Title>
         <div>
         </div>
        <Card.Text>
         <div className="mt-4 d-flex">
          <h5>Ticket-ID :</h5>
          <p className="ticket_txt">#11633</p>
         </div>
         <div className="mt-2 d-flex">
          <h5>Date & Time :</h5>
          <p className="ticket_txt">12.2.22 2:10pm</p>
         </div>
         <div className="mt-2 ">
          <h5>Description :</h5>
          <p className="ticket_txt">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
         </div>
        </Card.Text>
       
      </Card.Body>
            </Card>
           
            
            
            </div>
          )}
          
          {pending && (
            <div className='Feedback_all row container'>
            <Card style={{ width: '20rem' }} className="p-2">
      <Card.Body>
        <Card.Title className="Feedback_header">
         <div><h4>Profile update Issue</h4></div>
         <div className="d-flex">
         <h6>Status</h6>
         <p className="text-danger">Pending</p>
         </div>
        </Card.Title>
         <div>
         </div>
        <Card.Text>
         <div className="mt-4 d-flex">
          <h5>Ticket-ID :</h5>
          <p className="ticket_txt">#11633</p>
         </div>
         <div className="mt-2 d-flex">
          <h5>Date & Time :</h5>
          <p className="ticket_txt">12.2.22 2:10pm</p>
         </div>
         <div className="mt-2 ">
          <h5>Description :</h5>
          <p className="ticket_txt">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
         </div>
        </Card.Text>
       
      </Card.Body>
            </Card>
           
            
            
            </div>
			     
          
          )}


          {solved && (
			      <div className='Feedback_all row container'>
            <Card style={{ width: '20rem' }} className="p-2">
      <Card.Body>
        <Card.Title className="Feedback_header">
         <div><h4>Profile update Issue</h4></div>
         <div className="d-flex">
         <h6>Status</h6>
         <p className="text-success">Solved</p>
         </div>
        </Card.Title>
         <div>
         </div>
        <Card.Text>
         <div className="mt-4 d-flex">
          <h5>Ticket-ID :</h5>
          <p className="ticket_txt">#11633</p>
         </div>
         <div className="mt-2 d-flex">
          <h5>Date & Time :</h5>
          <p className="ticket_txt">12.2.22 2:10pm</p>
         </div>
         <div className="mt-2 ">
          <h5>Description :</h5>
          <p className="ticket_txt">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
         </div>
        </Card.Text>
       
      </Card.Body>
            </Card>
           
            
            
            </div>
          )}

          </div>
      </div>
    </>
  );
}

export default User;
