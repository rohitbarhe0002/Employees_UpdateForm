import React, { useState } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { useHistory } from 'react-router';
import Badge from 'react-bootstrap/Badge'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Password from 'antd/lib/input/Password';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { ShowUser } from './ShowUser';
import { showform } from '../action';

export default function EmpoloyeeLogin() {



  const myStyle={
    backgroundImage:"url(" +
"https://i.pinimg.com/474x/62/69/be/6269be179ab7d610b2a4959387fd77af.jpg"+")",
    width:'100%',
    height:'900px',
    };
    const dispatch = useDispatch()
  const employees = useSelector((state) => state.getEmployees.emp)
  const show = useSelector((state) => state.ShowForm.show)

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
dispatch(showform(!show))

   if(id =='3002')
    {

 history.push('/EmpData')
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
      <div  style={myStyle}>
 

      <h1 style={{ color: 'skyblue', textAlign : 'center'} }>Welocome <span style={{ color: 'grey', textAlign : 'center' } } >Emoloyee</span></h1>

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

