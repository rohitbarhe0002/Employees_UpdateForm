import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { useHistory } from 'react-router';

export default function EmpoloyeeLogin() {

    const image = 'https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjdG9yeXxlbnwwfHwwfHw%3D&w=1000&q=80'
    const history =  useHistory ();
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    const onFinish = (values) => {
        console.log('Success:', values);
      };

      const onSubmit = () => {

        history.push("/EmpData")

      }
      
    return (
       <div>
         <div>
      <img   style={{ alignSelf: 'center' }} src="https://cdn5.vectorstock.com/i/1000x1000/70/44/industrial-factory-background-vector-2227044.jpg"alt="BigCo Inc. logo"/>
    </div>
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
        rules={[
          {
            required: true,
            message: 'Please input your username!',
            min:9,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            type:'number',
            min:6,
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
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
