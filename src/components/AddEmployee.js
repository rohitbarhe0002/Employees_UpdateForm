import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useEffect } from 'react';
// import Modal from 'react-bootstrap/Modal'
// import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Button from 'react-bootstrap/Button'
import { Form, Input, Button, Checkbox,DatePicker} from 'antd';
// import {Form,Input,Cascader,Select,Checkbox,Button} from "antd"

import { Select } from 'antd';

import { Modal } from 'antd';
import { requestForEmpGet, requestForEmpPost, requestForEmpPut } from '../thunk/request';
import { UpdateEmployee } from '../action';
import { useHistory } from 'react-router';
import Password from 'antd/lib/input/Password';


export default function AddEmployee() {
   
    const history = useHistory();
    const employee = useSelector((state) => state.updateEmployees.employee)
    
    const [cityData, setCountryData] = useState(['Indore','khargone','Bombay','pune','chennai']);
    console.log(cityData);
    const dispatch = useDispatch()
    const{id,employee_name,employee_salary,employee_age,city,email,phone,gender,empId,date} = employee;
    const ciities =['khargone','indore','banaras','bombay']


     const { Option } = Select;

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

    const [show, setShow] = useState(true);
    const handleClose = () => {
      history.push('/EmpData')
    setShow(false);
    }
    const InputChange = (event) =>{
    dispatch(UpdateEmployee({...employee,[event.target.name]:event.target.value}));
     
     }
     const countryChange = event => {
      if (event.target.value) {
        setCountryData(event.target.value);
      }
    };

    
   const onSubmit = (event) => {
  //   if (phone.length < 10 || phone.length > 10) (
  //     alert("wrong number")
  //   )
  //  else if (
  //     !new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email)
  //   ) {
  //     alert("wrong email")
  //   }
  //    else if(employee_name==null || employee_name==""|| employee_name.length>20){
  //     alert("Plz fill name and check length   ")

  //   }
  //   else{
    dispatch(requestForEmpPost(employee))
    history.push('/EmpData')
    }
  
    
    console.log(employee);
    return (
        <div>
      {/* <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title><span className='container'>Add Employee</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>  */}
          <Modal  className='center'  title="Add Employee" visible={isModalVisible} onCancel={handleCancel}>
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
        name="employee_name"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]}
     
      >
        <Input  name="employee_name"
        value={employee_name}
        onChange={InputChange}/>
      </Form.Item>

      <Form.Item
        label="Age"
        name="employee_age"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please input your age!',
          },
        ]}
     
      >
        <Input  name="employee_age"
        value={employee_age}
        onChange={InputChange}/>
      </Form.Item>

      <Form.Item
        label="id"
        name="id"    
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please input your Id!',
            whitespace:false
          },
        ]}
     
      >
        <Input   
         name="id"
        value={id}
        onChange={InputChange} />
      </Form.Item>

      <Form.Item
        label="Salary"
        name="employee_salary"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please input your salary!',
          },
        ]}
     
      >
        <Input name="employee_salary"
        value={employee_salary}
        onChange={InputChange} />
      </Form.Item>

     
      <Form.Item
        label="Email"
        name="email"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
            whitespace:false,
          },
        ]}
     
      >
        <Input name="email"
        value={email}
        onChange={InputChange} />
      </Form.Item>

      <Form.Item
        label="phone"
        name="phone"    
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please input your phone!',
            whitespace:false
          },
        ]}
     
      >
        <Input    name="phone"
        value={phone}
        onChange={InputChange} />
      </Form.Item>

      <Form.Item
        label="date"
        name="date"    
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please input your date!',
            whitespace:false
          },
        ]}
     
        
      >
     <DatePicker  />
       
      </Form.Item>
      <Input    name="date"
        value={date}
        onChange={InputChange} />



      <Form.Item
      hasFeedback
        label="Gender"
        rules={[
          {
            required: true,
            message: 'Please select gender!',
          },
        ]}
      >
        <Select  name="gender" value={gender} onChange={InputChange}eplaceholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>

        <Select onSelect={(value, event) => InputChange(value, event)}>

<Option value="1">text 1</Option>
<Option value="2">text 2</Option>
</Select>
      </Form.Item>
      <Form.Item

            
label="city"
name="city"
hasFeedback
rules={[
  {
    required: true,
    message: 'Please input your city!',
  },
]}

    
>
 <Select   placeholder="select city"
 style={{width:'50%'}}
 >
   {
     ciities.map((i,index)=>{
       return<Select.Option name="city" onChange={InputChange} key={index} value={i}></Select.Option>
     })
   }

 </Select>
 </Form.Item>
 <br/>
<br/>
 <Form.Item  className='center'>
      <Button  type="primary" htmlType='submit' onClick={onSubmit}>submit</Button>
      </Form.Item>
    </Form>
    </Modal>
            
     
        </div>
    )
}
