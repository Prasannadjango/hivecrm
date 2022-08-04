import React,{PureComponent}from 'react';
import {Card,Row,Col,Table} from 'react-bootstrap';
import { TbListDetails,TbBusinessplan } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi";
import { RiUserStarLine } from "react-icons/ri";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
function Login(){

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  
  
return (
    <>
    <div className='Feedback_all row container'>
        <Card style={{ width: '15rem' }} className="p-2 Homepage_card">
          <Card.Body>
        <Card.Title className="Feedback_header">
         <div>
         <div className='d-flex'>
         <TbListDetails/>
         <h4 className='text-white'>Total Leads</h4>
         </div>
         <h1 className='text-white'>200</h1></div>
         </Card.Title>
         </Card.Body>
          </Card>
          <Card style={{ width: '15rem' }} className="p-2 Homepage_card">
          <Card.Body>
        <Card.Title className="Feedback_header">
         <div>
         <div className='d-flex'>
         <HiOutlineUsers/>
         <h4 className='text-white'>Total Users</h4>
         </div>
         <h1 className='text-white'>80</h1>
         </div>
         </Card.Title>
         </Card.Body>
          </Card>
          <Card style={{ width: '15rem' }} className="p-2 Homepage_card">
          <Card.Body>
        <Card.Title className="Feedback_header">
         <div>
         <div className='d-flex'>
         <RiUserStarLine/>
         <h4 className='text-white'>Daily Users</h4>
         </div>
         <h1 className='text-white'>50</h1></div>
         </Card.Title>
         </Card.Body>
          </Card>
          <Card style={{ width: '15rem' }} className="p-2 Homepage_card">
          <Card.Body>
        <Card.Title className="Feedback_header">
         <div>
         <div className='d-flex'>
         <TbBusinessplan />
         <h4 className='text-white'>Total Followups</h4>
         </div>
         <h1 className='text-white'>100</h1></div>
         </Card.Title>
         </Card.Body>
          </Card>
     </div>

      <div className="d-flex Charts_mainContainer">
      <div>
   
        
   <h2 className=" pb-3">Total Leads Report</h2>
<Col xl={6} className="Bargraph_container">


<LineChart
width={500}
height={300}
data={data}

>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<Legend />
<Line
  type="monotone"
  dataKey="pv"
  stroke="#8884d8"
  activeDot={{ r: 8 }}
/>
<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
</LineChart>

</Col>
</div>

<div>
<h2 className=" ps-5 pb-3">Users Cash Flow</h2>
<Col xl={6} className="Table_container">

<Table striped bordered hover>
<thead>
  <tr>
    <th>s.no</th>
    <th>User Name</th>
    <th>Date</th>
    <th>Cash-in / Cash-out</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>1</td>
    <td>Mark</td>
    <td>12.2.22</td>
    <td className='text-success'>+$100</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Jacob</td>
    <td>12.2.22</td>
    <td className='text-danger'>-$50</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Jacob</td>
    <td>12.2.22</td>
    <td className='text-danger'>-$50</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Jacob</td>
    <td>12.2.22</td>
    <td className='text-danger'>-$50</td>
  </tr>
 
</tbody>
</Table>

</Col>
</div>
   
      </div>
 
   

 

      
  

    </>
  );
 
}

export default Login;







