import React from 'react'
import { getemp } from '../action'
import { requestForemp } from '../thunk/request'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function EmpData() {

     const dispatch = useDispatch()
     const employees = useSelector((state) => state.getEmployees.emp )
     console.log("Employee",employees);

    useEffect(() => {
      dispatch(requestForemp());
    }, [])

    return (
        <div>

            <h1>Employees Board</h1>
            {
                employees.map((item)=>{
                    item.data.map((emp)=>{
                        <li>{emp.id}</li>

                    })
                })
            }
            
        </div>
    )
}
