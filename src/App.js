

//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from "axios";
import {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Stack from 'react-bootstrap/Stack'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
function App() {

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const [data , setFecthedData] = useState()
  const [loading, setFetchStatus] =useState(true);

const handleChange = async () => {

  const url  = `http://localhost:8089/api/v1/coindesk/value?startdate=${startDate}&enddate=${endDate}`;

  try {
    const {data: response} = await axios.get(url);
    console.log(data)
    setFecthedData(response);
  } catch (error) {
    console.error(error)
  } finally {
    setFetchStatus(false);
  };
  };

  return (
    <div className="App">
      
        <body>
        <Container>
         <Form>
          <Form.Group  as={Row} className="mb-3">
           <Form.Label>From Date</Form.Label>
           <Form.Control  className="w-50" type='date' onChange={e=>setStartDate(e.target.value)} />
           <Form.Label>To Date</Form.Label>
           <Form.Control type='date' onChange={e=>setEndDate(e.target.value)}/> 

          </Form.Group>
        <Button disabled={!(startDate && endDate)} onClick={handleChange}> Submit </Button> 
        </Form> 

        {!loading && (

       <Container>
        <h1>{data.name}</h1>
       <Row>
        <Col>
         <Card>
          <Card.Body>
            <Card.Title>Max</Card.Title>
          <Card.Text>{data.max.date} : {data.max.value}</Card.Text>
         </Card.Body>
         </Card>
        </Col>
        <Col>
         <Card>
          <Card.Body>
            <Card.Title>Min</Card.Title>
          <Card.Text>{data.min.date} : {data.min.value}</Card.Text>
         </Card.Body>
         </Card>
        </Col>
       </Row>


       </Container>
        ) } 
       </Container>
</body>
    </div>
    
  );
}

export default App;
