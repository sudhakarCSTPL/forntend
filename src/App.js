

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
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
function App() {

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const [data , setFecthedData] = useState();
  const [loading, setFetchStatus] =useState(true);
  const [currencydata , setFecthedcurrency] = useState();
  const [selectedcurrency, setcurrency] = useState();

const handleChange = async () => {

  const url  = `http://localhost:8089/api/v1/coindesk/value?startdate=${startDate}&enddate=${endDate}&currency=${selectedcurrency}`;
  
  try {
    const {data: response} = await axios.get(url);
    console.log(data);
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
          <MDBRow>
             <MDBCol>
           <Form.Label>From Date</Form.Label>
           <Form.Control  className="w-50" type='date' onChange={e=>setStartDate(e.target.value)} /> 
            </MDBCol> 
             <MDBCol>
           <Form.Label>To Date</Form.Label> 
           <Form.Control type='date' onChange={e=>setEndDate(e.target.value)}/> 
             </MDBCol> 
             <MDBCol>
             <select
                value={selectedcurrency} // ...force the select's value to match the state variable...
                onChange={e => setcurrency(e.target.value)} // ... and update the state variable on any change!
              >
                <option value="EUR">Euro</option>
                <option value="USD">United States Dollar</option>
                <option value="INR">India Rupee</option>
                <option value="JPY">Japan Yen</option>
                <option value="BGN">Bulgaria Lev</option>
                <option value="CZK">Czech Republic Koruna</option>
                <option value="DKK">Denmark Krone</option>
                <option value="GBP">United Kingdom Pound</option>
                <option value="HUF">Hungary Forint</option>
                <option value="PLN">Poland Zloty</option>
                <option value="RON">Romania Leu</option>
                <option value="SEK">Sweden Krona</option>
                <option value="CHF">Switzerland Franc</option>
                <option value="ISK">Iceland Krona</option>
                <option value="NOK">Norway Krone</option>
                <option value="TRY">Turkish lira equals</option>
                <option value="AUD">Australia Dollar</option>
                <option value="BRL">Brazil Real</option>
                <option value="CAD">Canada Dollar</option>
                <option value="CNY">China Yuan Renminbi</option>
                <option value="HKD">Hong Kong Dollar</option>
                <option value="IDR">Indonesia Rupiah</option>
                <option value="ILS">Israel Shekel</option>
                <option value="KRW">Korea (South) Won</option>
                <option value="MXN">Mexico Peso</option>
                <option value="MYR">Malaysia Ringgit</option>
                <option value="NZD">New Zealand Dollar</option>
                <option value="PHP">Philippines Piso</option>
                <option value="SGD">Singapore Dollar</option>
                <option value="THB">Thailand Baht</option>
                <option value="ZAR">South Africa Rand</option>
              </select>
             </MDBCol> 
             </MDBRow>

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
