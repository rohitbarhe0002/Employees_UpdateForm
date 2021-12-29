import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import { requestForEmpGet, requestForEmpPost, requestForEmpPut } from '../thunk/request';

import { UpdateEmployee } from '../action';
import { useHistory } from 'react-router';


export default function AddEmployee() {
   
    const history = useHistory();
    const employee = useSelector((state) => state.updateEmployees.employee)
    
    const [cityData, setCountryData] = useState(['Indore','khargone','Bombay','pune','chennai']);
    console.log(cityData);
    const dispatch = useDispatch()
    const{id,employee_name,employee_salary,employee_age,city,email,phone,gender} = employee;

    const [show, setShow] = useState(true);
    const handleClose = () => {
      history.push('/')
    setShow(false);
    }
    const InputChange = (event) =>{
    dispatch(UpdateEmployee({...employee,[event.target.name]:event.target.value}));
     
     }
     const countryChange = event => {
      if (event.target.value) {
        setCountryData(event.target.value);
      }
    };

    
   const onSubmit = (event) => {
    if (phone.length < 10 || phone.length > 10) (
      alert("wrong number")
    )
   else if (
      !new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email)
    ) {
      alert("wrong email")
    }
     else if(employee_name==null || employee_name==""|| employee_name.length>20){
      alert("Plz fill name and check length   ")

    }
    else{
    dispatch(requestForEmpPost(employee))
    history.push('/')
    }
  
    }
    console.log(employee);
    return (
        <div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title><span className='container'>Add Employee</span></Modal.Title>
        </Modal.Header>
        <Modal.Body> 
   <Form >
         <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">

                       <Form.Label column sm="2">
                      name
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text"  name ="employee_name"  value={employee_name} onChange={InputChange} />
                        </Col>
                    </Form.Group>
                    <br/>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword" >
                        <Form.Label column sm="2">
                            Age
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" name="employee_age"  value={employee_age} onChange={InputChange} />
                        </Col>
                    </Form.Group>
                   <br/>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword" >
                        <Form.Label column sm="2">
                            salary
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" name="employee_salary"   value={employee_salary} onChange={InputChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword" >
                        <Form.Label column sm="2">
                            city
                        </Form.Label>
                        <Col sm="6">
                            {/* <Form.Control type="text" name="city"   value={city} onChange={InputChange} /> */}
                            <Form.Control>
       
      </Form.Control>
                        </Col>
                    </Form.Group>


                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword" >
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="email" name="email"   value={email} onChange={InputChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword" >
                        <Form.Label column sm="2">
                            phone
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" name="phone"   value={phone} onChange={InputChange} />
                        </Col>
                    </Form.Group>
                    <input type="radio" value="Male" name="gender" onChange={InputChange}/> Male
        <input type="radio" value="Female" name="gender"onChange={InputChange} /> Female
        <input type="radio" value="Other" name="gender"onChange={InputChange} /> Other    <br/>  <Button variant="success" onClick={onSubmit}>
                          Add
                    </Button>

                    
                    <select onChange={InputChange} >
        <option name="city"value="" />
        {cityData.map(allCountries => {
          return <option value={cityData}>{allCountries}</option>;
        })}
      </select> 
    

                </Form>
            
            </Modal.Body>
        <Modal.Footer>

      
        </Modal.Footer>
      </Modal>



     
        </div>
    )
}
