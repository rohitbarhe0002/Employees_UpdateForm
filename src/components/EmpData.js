import React, { useState } from 'react'
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
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import "antd/dist/antd.css"
import {SearchOutlined} from '@ant-design/icons';


import { BehanceSquareOutlined, SecurityScanFilled, SlackSquareFilled, WindowsFilled } from '@ant-design/icons/lib/icons'
import 'antd/dist/antd.css';

import { Input, Table } from 'antd'


export default function EmpData() {

  const { id } = useParams();

  const dispatch = useDispatch()
  const employees = useSelector((state) => state.getEmployees.emp)
  const [search, setsearch] = useState('')
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
      date:item.date
    
    })
  )
  )

  const columns = [

    {
      title: 'EmployeeName',
      dataIndex: 'employee_name',
      filterDropdown: ({setSelectedKeys,selectedKeys,confirm}) => {
        return <Input autoFocus placeholder='type text here' 
        value={selectedKeys [0]}
        onChange={(e)=>{
         
          setSelectedKeys (e.target.value?[e.target.value]:[])
        }}
        onPressEnter={() => {
          confirm()
        }} 
        onBlur={() => {
          confirm()
        }}></Input>;
         
      },
      filterIcon: () =>{
        return <SearchOutlined/>
      },
      onFilter:(value,employees)=>{
        return employees.employee_name.toLowerCase().includes(value.toLowerCase())
      }
      
  
    },
    {
      title: 'employee_id',
      dataIndex: 'id',


    },
    {
      title: 'EmployeeAge',
      dataIndex: 'employee_age',
     
      sorter: (a, b) => a.employee_age - b.employee_age,


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
      title: 'Date',
      dataIndex: 'date',

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

    
          <Navbar bg="secondary" variant="dark">
          <Container>
          <SecurityScanFilled  style={{ color: '#92D7B8   ',fontSize:55 } }/>
        
          {"             "}
            <Nav className="me-auto">

              <Nav.Link href="/AddEmployee">Add</Nav.Link>
              <Nav.Link href="/EmpData">Employee Board</Nav.Link>
              
            </Nav>
            <h4 >
            <Badge bg="success">{length}</Badge>
          </h4>{"             "} {"             "}
          
          <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(event)=>{
            setsearch(event.target.value)
          }}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
          </Container>
        </Navbar>
      <Table className="table-striped-rows"
      dataSource={data}
        pagination={{ pageSize: 10 }}
        columns={columns}
        
      >
        </Table>
        </>

  )
}

