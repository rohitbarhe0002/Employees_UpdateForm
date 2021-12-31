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
// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'
// import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';
import { Modal } from 'antd';
import { Form, Input, Button, Checkbox,DatePicker} from 'antd';

export default function UpdateEmp() {
    const {Id} = useParams();
    
    const history=useHistory()
    const employee = useSelector((state) => state.updateEmployees.employee)
    const dispatch = useDispatch()

    const{id,employee_name,employee_salary,employee_age,city,email,phone,gender,password} = employee;

   

    
    const [isModalVisible, setIsModalVisible] = useState(true);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      history.push('/EmpData')
      setIsModalVisible(false);
    };


  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

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
      <Modal title="Update Employee" visible={isModalVisible} onCancel={handleCancel}>


      <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onSubmit}
     
      autoComplete="off"
    >
      
      <Form.Item
        label="name"
       hasFeedback
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
     
      >
        <Input  name="employee_name"
        value={employee_name}
        onChange={InputChange}/>
      </Form.Item>

      <Form.Item
        label="password"
       hasFeedback
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
     
      >
        <Input  name="password"
        value={password}
        onChange={InputChange}/>
      </Form.Item>

      <Form.Item
        label="Age"
       hasFeedback
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
     
      >
        <Input  name="employee_age"
        value={employee_age}
        onChange={InputChange}/>
      </Form.Item>

      <Form.Item
        label="Salary"
       hasFeedback
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
     
      >
        <Input name="employee_salary"
        value={employee_salary}
        onChange={InputChange} />
      </Form.Item>

      <Form.Item
        label="city"
      hasFeedback
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
     
      >
        <Input   name="city"
        value={city}
        onChange={InputChange} />
      </Form.Item>
      <Form.Item
        label="Email"
        
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
     
      >
        <Input name="email"
        value={email}
        onChange={InputChange} />
      </Form.Item>

      <Form.Item
        label="phone"
     hasFeedback
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
     
      >
        <Input    name="phone"
        value={phone}
        onChange={InputChange} />
      </Form.Item>

      <Form.Item label="DatePicker">
        <DatePicker />
      </Form.Item>

      <Form.Item >
      <Button type="submit" htmlType='submit' onClick={onSubmit}>submit</Button>
      </Form.Item>
    </Form>
     
      </Modal>
    
        </div>
    )
}

