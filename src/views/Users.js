import React, { useState } from 'react';
// import Modal from 'react-bootstrap/Modal';
import { FcBusinessman } from "react-icons/fc";
import { BsXLg } from "react-icons/bs";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Pagination from 'react-bootstrap/Pagination';
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
  Form,
  OverlayTrigger,
  Tooltip,
  Modal,
  placeholder,



} from "react-bootstrap";

function Users() {




  const [description, setDescription,] = useState(true);
	const [reviews, setReviews] = useState(false);
  const [on,setOn] = useState(false);
  const [Leads,setLeads]= useState(true);
  const [accounts,setaccounts]= useState(true);
	const descriptionHandler = () => {
		setDescription(true);
		setReviews(false);
    setOn(false);
    setLeads(false);
    setaccounts(false);
	};
	const reviewsHandler = () => {
		setReviews(true);
    setOn(false);
    setLeads(false);
    setDescription(false);
    setaccounts(false);
	};
  const LeadsHandler = () => {
		setLeads(true);
		setOn(false);
    setReviews(false);
    setDescription(false);
    setaccounts(false);
	};
  const onHandler = () => {
		setOn(true);
		setLeads(false);
    setDescription(false);
    setReviews(false);
    setaccounts(false);
  };

  const accountsHandler = () => {
		setaccounts(true);
		setReviews(false);
    setOn(false);
    setLeads(false);
    setDescription(false);
	};


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [showleads, setShowleads] = useState(false);
  const handleCloseleads = () => setShowleads(false);
  const handleShowleads = () => setShowleads(true);
  
  return (
    <>

    <div className="container ">
  
   
     <div className="col-12 d-flex ">
     <Form.Control   placeholder="search by name...."/>
     <Button className="Search_btn border-0 ps-2" size="lg">Search</Button>
     </div>
     <div className='dropdownaline'>
     <div className='dropdown1'>
     <DropdownButton  title="Dropdown button">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
     </div>
     </div>

     <div className="my-5 container Card_container ">
     

      <div className="row mx-0">
      
           
      <Card className="User-card" style={{ width: '20rem' }} >
      


      <Card.Body>
        <div className="d-flex">
             <div className="card-image"><FcBusinessman/></div>
             <Card.Title className="fw-bold">
          <h3 className="pt-3 ps-4">Vicky</h3>
        </Card.Title>
        </div>
        
        <Card.Text className="pt-3">
         <p className="card_txt m-0 pb-1">vicky@gmail.com</p>
         <p  className="card_txt">123343123123</p>
         
        </Card.Text>
        <Button className="Seemore_btn" onClick={handleShow}>
        See Other Details
      </Button>

      <Modal
      size="xl"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title className="pt-1">User Details</Modal.Title>
          <Button className="Close_btn " onClick={handleClose}>
          <BsXLg/>
          </Button>
         
        </Modal.Header>
        <Modal.Body>
        <div className="d-flex Innerbtn_container">
            <Button  onClick={descriptionHandler}>Personal Details</Button>
            <Button onClick={reviewsHandler}>Feedbacks</Button>
            
            <Button onClick={LeadsHandler}>Leads</Button>
            <Button onClick={onHandler}>Task</Button>
            <Button onClick={accountsHandler}> Accounts</Button>
          </div>


          <div className="Innercontent_container">

          {description && (
			      <>
            <div className="mt-4 d-flex">
            <p className="h4">Name:</p>
            <p>Vicky</p>
          </div>
          <div className="mt-2 d-flex">
            <p className="h4">Email-id:</p>
            <p>Vicky@gmail.com</p>
          </div>
          <div className="mt-2 d-flex">
            <p className="h4">Mobile-Number:</p>
            <p>12313123213</p>
          </div>
          <div className="mt-2 d-flex">
            <p className="h4">Gender:</p>
            <p>Male</p>
          </div>
          <div className="mt-2 d-flex">
            <p className="h4">DOB:</p>
            <p>12.12.1997</p>
          </div>
          <div className="mt-2 d-flex">
            <p className="h4">Pin-code:</p>
            <p>1234532</p>
          </div>
          <div className="mt-2 d-flex">
            <p className="h4">Organisation:</p>
            <p>bhive</p>
          </div>
          <div className="mt-2 d-flex">
            <p className="h4">Designation:</p>
            <p>Developer</p>
          </div>
          <div className="mt-2 d-flex">
            <p className="h4">Created at:</p>
            <p>23.7.2022</p>
          </div>
            </>
          )}


          
    

          {reviews && (
				   <div className="mt-4">
             <div>
             <Card style={{ width: '25rem' }} className="p-2">
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
          <h5>description :</h5>
          <p className="ticket_txt">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything </p>
         </div>
        </Card.Text>
       
      </Card.Body>
    </Card>
             </div>
           </div>
           )}




           {Leads && (
            <>

            <div className='dropdownaline'>
     <div className='dropdown1'>
     <DropdownButton  title="Dropdown button">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
     </div>
     </div>
              <p>hi</p>
            </>
        
			)}




      {on && (
        <div>
            <Card style={{ width: '25rem' }}>
            
      <Card.Body>
        <Card.Title className='cardtitle pl-3 '>Hive CRM Design</Card.Title>
       <div className='card1 p-3'>
        <div className="d-flex">
        <p>Category :</p>
        <p>Product</p>
        </div>
  
       
        <Button  className="Seemore_btn" onClick={handleShowleads}>
       See More Details
      </Button>

      <Modal show={showleads} onHide={handleCloseleads}>
      <Modal.Header>
          <Modal.Title className="pt-1">Task Details</Modal.Title>
          <Button className="Close_btn " onClick={handleCloseleads}>
          <BsXLg/>
          </Button>
         
        </Modal.Header>
        <Modal.Body>

        <div className='taskfields'>
         <p>Title : Hive Crm </p>
         <p>Category : Product</p>
         <p> Participants Name : Hive</p>
         <p>From & To Date: 10-02-22 To 12-12-22</p>
         <p> Description : Event</p>
         <div className='d-flex'>
         <p>Level :</p>
         <p className='levelcolor'>low</p>

        </div>
        </div>

        </Modal.Body>
       
      </Modal>
        </div>
        
      
    
      </Card.Body>

    </Card>
    </div>
			)}

      {accounts && (
            <>

            <div className='cardone'>
             <div> 
            <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>
        <p className='accountscardtitle'>Cash In</p>
        </Card.Title>
        <Card.Text>
        <p className='cardamount'>+ 2100</p>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

<div>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>
        <p className='accountscardtitle2'>Cash Out</p>
        </Card.Title>
        <Card.Text>
         <p className='cardamount'>- 10000</p>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>


<div>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>
        <p className='accountscardtitle3'>Balance</p></Card.Title>
        <Card.Text>
        <p className='cardamount'> 2,50,000</p>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    </div>

    
   
  
   <div className="col-8 p-0"> 
   <from className="w-100 AccountsSearch_container d-flex">
      
      <Form.Control type="text" placeholder="Search by Name..." className="Accounts_searchbar"/>
      
      <Button className="Search_btn border-0 ps-2" >Search</Button>
    </from>
  </div>
    
    

   
    <Table  striped="columns "  hover className="Accountstable_container">
      <thead className='tablebgcolor'>
     
        <tr >
          <th>S.No</th>
          <th>Date</th>
          <th> Cash-in / Cash-out</th>
          <th>Category</th>
          <th>Mode Of Payment</th>
          <th>Reason</th>
        </tr>
       
      </thead>
      <tbody>
    

        <tr>
          <td>1</td>
          <td>12.7.22</td>
          <td className='text-success'>1000+</td>
          <td>Designs</td>
          <td>Cash</td>
          <td>-</td>
        </tr>
        <tr>
        <td>2</td>
          <td>12.7.22</td>
          <td className='text-danger'>5000-</td>
          <td>travel</td>
          <td>Online</td>
          <td>-</td>
        </tr>
        <tr>
        <td>3</td>
          <td>12.7.22</td>
          <td className='text-success'>1000+</td>
          <td>travel</td>
          <td>Online</td>
          <td>-</td>
        </tr>
        <tr>
        <td>4</td>
          <td>12.7.22</td>
          <td className='text-success'>1000+</td>
          <td>travel</td>
          <td>Online</td>
          <td>-</td>
        </tr>
        <tr>
        <td>5</td>
          <td>12.7.22</td>
          <td className='text-danger'>1000-</td>
          <td>Fuel charges</td>
          <td>Online</td>
          <td>-</td>
        </tr>
      </tbody>
    </Table>
  
  
    
    
     
   
            </>
        
			)}


     
          </div>

        </Modal.Body>
        
      </Modal>
      </Card.Body>
     
      
     
      </Card>

       
   


    <Card className="User-card mx-4" style={{ width: '20rem' }}>
      <Card.Body>
        <div className="d-flex">
             <div className="card-image"><FcBusinessman/></div>
             <Card.Title className="fw-bold">
          <h3 className="pt-3 ps-4">Vicky</h3>
        </Card.Title>
        </div>
        
        <Card.Text className="pt-3">
         <p className="card_txt m-0 pb-1">vicky@gmail.com</p>
         <p  className="card_txt">123343123123</p>
         
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card className="User-card" style={{ width: '20rem' }}>
      <Card.Body>
        <div className="d-flex">
             <div className="card-image"><FcBusinessman/></div>
             <Card.Title className="fw-bold">
          <h3 className="pt-3 ps-4">Vicky</h3>
        </Card.Title>
        </div>
        
        <Card.Text className="pt-3">
         <p className="card_txt m-0 pb-1">vicky@gmail.com</p>
         <p  className="card_txt">123343123123</p>
         
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card className="User-card" style={{ width: '20rem' }}>
      <Card.Body>
        <div className="d-flex">
             <div className="card-image"><FcBusinessman/></div>
             <Card.Title className="fw-bold">
          <h3 className="pt-3 ps-4">Vicky</h3>
        </Card.Title>
        </div>
        
        <Card.Text className="pt-3">
         <p className="card_txt m-0 pb-1">vicky@gmail.com</p>
         <p  className="card_txt">123343123123</p>
         
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className="User-card mx-4" style={{ width: '20rem' }}>
      <Card.Body>
        <div className="d-flex">
             <div className="card-image"><FcBusinessman/></div>
             <Card.Title className="fw-bold">
          <h3 className="pt-3 ps-4">Vicky</h3>
        </Card.Title>
        </div>
        
        <Card.Text className="pt-3">
         <p className="card_txt m-0 pb-1">vicky@gmail.com</p>
         <p  className="card_txt">123343123123</p>
         
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card className="User-card" style={{ width: '20rem' }}>
      <Card.Body>
        <div className="d-flex">
             <div className="card-image"><FcBusinessman/></div>
             <Card.Title className="fw-bold">
          <h3 className="pt-3 ps-4">Vicky</h3>
        </Card.Title>
        </div>

        <Card.Text className="pt-3">
         <p className="card_txt m-0 pb-1">vicky@gmail.com</p>
         <p  className="card_txt">123343123123</p>
         
        </Card.Text>

        
      </Card.Body>
    </Card>
    
   
        
        </div>
        <div className='pagenationbutton'>
    <Pagination>
 <Pagination.Item>{1}</Pagination.Item>
 <Pagination.Item>{2}</Pagination.Item>
 <Pagination.Item>{3}</Pagination.Item>
 <Pagination.Item>{4}</Pagination.Item>
 <Pagination.Item>{5}</Pagination.Item>
 </Pagination>
    </div>
     
     </div>
    
    </div>
  
   
    </>
  );
}

export default Users;

 