import React, { useState } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { useHistory } from 'react-router';
import Badge from 'react-bootstrap/Badge'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Password from 'antd/lib/input/Password';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { ShowUser } from './ShowUser';

export default function EmpoloyeeLogin() {

  const employees = useSelector((state) => state.getEmployees.emp)

  console.log("eeee", employees);

  const [state, setState] = useState({

    username: '',
    id: '',

  })

  const [user, setuser] = useState([])

  const history = useHistory();
  const pass = 3001
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  const { username, id } = state;

  const inputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })

  }
  console.log('yhhhh', state);

  const onSubmit = async () => {
    if(id=='3002'){
      await axios.get(`http://localhost:3008/data`).then((response)=>{
      console.log("raj",response.data);
      setuser(response.data);

    })
  }
  
    else{

    await axios.get(`http://localhost:3008/data/${id}`).then((response)=>{
      console.log("raj",response.data);
      setuser(response.data);
    })
  }
}



  return (
    <>
      <div>

        <Navbar bg="secondary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/AddEmployee">Add</Nav.Link>
              <Nav.Link href="/EmpData">Employee Board</Nav.Link>
            </Nav>

          </Container>
        </Navbar>

        <Form


          name="basic"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 6,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onSubmit}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please input your username!',
                
              },
            ]}
          >
            <Input value={username} name="username" onChange={inputChange} />
          </Form.Item>

          <Form.Item
            label="id"
            name="id"
            rules={[
              {

                required: true,
                message: 'Please input your id!',
              },
            ]}
          >
            <Input name="id" value={id}  onChange={inputChange}/>
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary"   htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      <ShowUser user={user}/>

      </div>
      
    
    </>
  )
}

