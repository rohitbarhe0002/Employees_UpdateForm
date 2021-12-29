import React from 'react'
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { requestForEmpGet, requestForEmpPut } from '../thunk/request';
import { UpdateEmployee } from '../action';
import { useHistory } from 'react-router';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';
export default function UpdateEmp() {
    const {Id} = useParams();
    
    const history=useHistory()
    const employee = useSelector((state) => state.updateEmployees.employee)
    const dispatch = useDispatch()

    const{id,employee_name,employee_salary,employee_age,city,email,phone,gender} = employee;

    const [show, setShow] = useState(true);

    const handleClose = () =>{
    history.push("/")
     setShow(false);
    }
    const handleShow = () => setShow(true);

    useEffect(() => {
      dispatch(requestForEmpGet(Id))
     
    }, [])

    
      const InputChange = (event) =>{
  
        dispatch(UpdateEmployee({...employee,[event.target.name]:event.target.value}));
      }
   const onSubmit = (event) =>{
   console.log("hiiiiii");
   event.preventDefault();
   dispatch(requestForEmpPut(Id,employee))
   history.push('/')
 }
    console.log(employee);
    return (
        <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='container'>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>name</Form.Label>
    <Col sm={4}>
    <Form.Control type="text" name="employee_name" value ={employee_name} placeholder="Enter name"  onChange={InputChange}/>
    </Col>
    <Form.Text className="text-muted">  
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>age</Form.Label>
    <Col sm={4}>
    <Form.Control type="text" name="employee_age" value ={employee_age} placeholder="Enter email"  onChange={InputChange}/>
    </Col>
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>salary</Form.Label>
    <Col sm={4}>
    <Form.Control type="text" name="employee_salary" value ={employee_salary} placeholder="Enter salary"  onChange={InputChange}/>
    </Col>
    <Form.Text className="text-muted">
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email </Form.Label>
    <Col sm={4}>
    <Form.Control type="text" name="email" value ={email} placeholder="Enter Email"  onChange={InputChange}/>
    </Col>
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>city</Form.Label>
    <Col sm={4}>
    <Form.Control type="text" name="city" value ={city} placeholder="Enter city"  onChange={InputChange}/>
    </Col>
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>phone</Form.Label>
    <Col sm={4}>
    <Form.Control type="text" name="phone" value ={phone} placeholder="Enter phone"  onChange={InputChange}/>
    </Col>
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>


  <Button varient="warning"type='submit' onClick={onSubmit}>submit</Button><br/><br/>

       <input type="radio" value="Male" name="gender" onChange={InputChange}/> Male
        <input type="radio" value="Female" name="gender"onChange={InputChange} /> Female
        <input type="radio" value="Other" name="gender"onChange={InputChange} /> Other
  </Form></Modal.Body>
        <Modal.Footer>
        
        </Modal.Footer>
      </Modal>

        </div>
    )
}
