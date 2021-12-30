import React from 'react'
import { getemp } from '../action'
import { requestForemp, requestForEmpdelete } from '../thunk/request'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import { WindowsFilled } from '@ant-design/icons/lib/icons'
import 'antd/dist/antd.css';

import { Table } from 'antd'


export default function EmpData() {

  const { id } = useParams();

  const dispatch = useDispatch()
  const employees = useSelector((state) => state.getEmployees.emp)
  const length = employees.length;
  console.log("Employee", employees);

  const data = employees.map((item) => (

    ({
      
      employee_name: item.employee_name,
      employee_age: item.employee_age,
      employee_salary: item.employee_salary,
      city: item.city,
      email: item.email,
       phone: item.phone,
      id: item.id,
      dob:item.birth,
    })
  )
  )

  const columns = [

    {
      title: 'EmployeeName',
      dataIndex: 'employee_name',

    },
    {
      title: 'EmployeeAge',
      dataIndex: 'employee_age',


    },
    {
      title: 'EmployeeSalary',
      dataIndex: 'employee_salary',

    },
    {
      title: 'City',
      dataIndex: 'city',

    },
    {
      title: 'Email',
      dataIndex: 'email',

    },
    {
      title: 'Phone',
      dataIndex: 'phone',

    },
 
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'key',
      render: (item) => (
        <>
         <Link className="btn btn-secondary" size="sm" varient="danger" to={`/UpdateEmp/` + item}>Update</Link>
          {"             "}
         
          <Link className="btn btn-secondary"  size="sm" onClick={()=>handledlete(item)}>Delete</Link>

        </>
      ),
    },
  ]

  useEffect(() => {
    dispatch(requestForemp());
  }, [])


  const handledlete = (id) => {
    if (window.confirm("are you sure want to delete"))

      dispatch(requestForEmpdelete(id))
  }
  return (
    <>

      <h2 className='container' ><span className='board'>Emloyees Board</span></h2>

      <Navbar bg="warning" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/AddEmployee">Add</Nav.Link>
          </Nav>
          <h4 >
            <Badge bg="success">{length}</Badge>
          </h4>
        </Container>
      </Navbar>

      <Table className="table-striped-rows"
      dataSource={data}
        pagination={{ pageSize: 10 }}
        columns={columns}
        
      ></Table>
      {/* <Table  className='Table' bg="dark" >
       
        <thead className="thead-dark">
          <tr>
          
            <th>Employee name</th>
            <th>Employee age</th>
            <th>Employee salary</th>
            <th>City</th>
            <th>Email</th>
            <th>Phone</th>
            <th>gender</th>
            <th>Actions</th>
          </tr>
        </thead>


        <tbody>
            {employees.map((item)=>(
                <tr>
                    
                    <td>{item.employee_name}</td>
                    <td>{item.employee_age}</td>
                    <td>{item.employee_salary}</td>
                    <td>{item.city}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.gender}</td>
                   
                  <Button> <Link className="btn btn-secondary" varient="danger" to={`/UpdateEmp/${item.id}`}>Update</Link></Button> 
                  <Button className='warning'> <Button varient="secondary"onClick={()=>handledlete(item.id)}>Delete</Button></Button>
                </tr>
            ))}
        
         
        </tbody>
      </Table>  */}
    </>
  )
}
