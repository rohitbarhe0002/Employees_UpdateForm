import 'antd/dist/antd.css';

import {Table} from 'antd'

import React from 'react'
import { useSelector } from 'react-redux';
import { Button } from 'bootstrap';

export default function AntdForm() {
    const employees = useSelector((state) => state.getEmployees.emp )
    console.log(employees);
  
  const data= employees.map((item)=>(
       ( {employee_name:item.employee_name,employee_age:item.employee_age,employee_salary:item.employee_salary,})
    )
    )
 
    const columns =[
        {
            title:'employee_name',
            dataIndex:'employee_name',
            key:'Id'
        },
        {
            title:'employee_age',
            dataIndex:'employee_age',
            key:'Id'
        },
        {
            title:'employee_salary',
            dataIndex:'employee_salary',
            key:'Id'
        },
        {
            title:'Actions',
            dataIndex:'Actions',
            key:'Id'
        }
    ]

    return (
        <div>
            <Table dataSource={data}
            
            columns={columns}
            ></Table>
        </div>
    )
}
