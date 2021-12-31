import React, { useState } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { useHistory } from 'react-router';
import Badge from 'react-bootstrap/Badge'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Password from 'antd/lib/input/Password';
export default function EmpoloyeeLogin() {

  const image = 'https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjdG9yeXxlbnwwfHwwfHw%3D&w=1000&q=80'
  const [state, setState] = useState({
   
    username:'',
    Password:'',

   } )
   

  const history = useHistory();
  const pass = 3001
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  
  const{username,Password} =state;

  const InputChange = (e) =>{
  setState({...state, [e.target.name]: e.target.value})

  }
console.log('yhhhh',state);

  const onSubmit = (e) => {
    e.preventDefault()
if(Password==pass)

    {
     console.log("hii");
      history.push("/EmpData")
      
    }
    else{
      alert("your are not registerd")
    }

  }

          return (
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
                        min: 9,
                      },
                    ]}
                  >
                    <Input  value={username} name="username" onChange={InputChange}/>
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        type: 'number',
                        min: 6,
                        required: true,
                        message: 'Please input your password!',
                      },
                    ]}
                  >
                    <Input.Password name="password" value={Password}/>
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
                    <Button type="primary" onClick={onSubmit} htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>


                  </div>
                )
              }
