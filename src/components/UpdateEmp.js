import React from 'react'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { requestForEmpGet, requestForEmpPut } from '../thunk/request';
import { Form, Input,  Checkbox } from 'antd';
import { UpdateEmployee } from '../action';
import { useHistory } from 'react-router';
import Button from 'react-bootstrap/Button'


export default function UpdateEmp() {
    const {Id} = useParams();

    const history=useHistory()
    const employee = useSelector((state) => state.updateEmployees.employee)
    const dispatch = useDispatch()

    const{id,employee_name,employee_salary,employee_age} = employee;

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
   history.push('/EmpData')
 }
    console.log(employee);
    return (
        <div>
  
    <form onSubmit={onSubmit}>
            <input type="text"  name="employee_name" value={employee_name}   onChange={InputChange}/> <br />
            <input type="text" name="employee_age" value={employee_age}  onChange={InputChange}/> <br />
            <input type="text" name="employee_salary" value ={employee_salary} onChange={InputChange}/> <br />
            <Button varient="success"type='submit' onClick={onSubmit}>submit</Button>
            </form>
        </div>
    )
}
