import React from 'react'
import { getemp } from '../action'
import { requestForemp, requestForEmpdelete } from '../thunk/request'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import Badge from 'react-bootstrap/Badge'

import Button from 'react-bootstrap/Button'


export default function EmpData() {
     
    const {id} = useParams();

     const dispatch = useDispatch()
     const employees = useSelector((state) => state.getEmployees.emp )
     const length = employees.length;
     console.log("Employee",employees);

    useEffect(() => {
      dispatch(requestForemp());
    }, [])


    const handledlete =(id)=>{
  dispatch(requestForEmpdelete(id))
    }
    return (
<>
<h4 className='container'>
    <Badge bg="secondary">{length}</Badge>
  </h4>
  <h3 className='container'>Emloyees Board</h3>
  <Button style={{display: 'flex', justifyContent: 'center'}}>
<Link  className="btn btn-primary" varient="danger" to="/AddEmployee">Add</Link>
</Button>
        <Table striped bordered hover variant="light" >
       
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee name</th>
            <th>Employee age</th>
            <th>Employee salary</th>
            <th>Actions</th>
          </tr>
        </thead>


        <tbody>
            {employees.map((item)=>(
                <tr>
                    <td>{item.id}</td>
                    <td>{item.employee_name}</td>
                    <td>{item.employee_age}</td>
                    <td>{item.employee_salary}</td>
                    <Link className="btn btn-primary" varient="danger" to={`/UpdateEmp/${item.id}`}>Update</Link>
                   <Button varient="succsess"onClick={()=>handledlete(item.id)}>Delete</Button>
                </tr>
            ))}
        
         
        </tbody>
      </Table>
      </>
    )
}
