import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
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
    const dispatch = useDispatch()

    const{id,employee_name,employee_salary,employee_age} = employee;

  

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
      const InputChange = (event) =>{
  
        dispatch(UpdateEmployee({...employee,[event.target.name]:event.target.value}));
      }

   const onSubmit = (event) =>{
   console.log("hiiiiii");
   event.preventDefault();
   dispatch(requestForEmpPost(employee))
   history.pushState("/EmpData");
 }
    console.log(employee);
    return (
        <div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
   <Form >
         <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                       <Form.Label column sm="2">
                        Email
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
                    {/* <input type="text" name="Email" value={Email} onChange={InputChange}/>
                    <input type="text" name="password" value={password} onChange={InputChange}/> */}
  
                </Form>



            
            </Modal.Body>
        <Modal.Footer>
         
          <Button variant="success" onClick={onSubmit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}
