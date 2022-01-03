// import React from 'react'
// import { Table } from 'react-bootstrap'

// export const  ShowUser=(props)=> {
//    // console.log("vijay",props.user);
//     //console.log("vi",props.user.employee_name);
//     const {empId,employee_name,employee_age,employee_salary,email,phone,city,gender}=props.user

//     return (
       
//             <div>
//              {/* <Table striped bordered hover size="sm" >
//           <thead className="thead-dark" >
//             <tr className="table-dark">
//               <th >Employe_Name</th>
//               <th>Age</th>
//               <th>Salary</th>
//               <th>email</th>
//               <th>Phone</th>
//               <th>City</th>
//               <th>Gender</th>
             
//             </tr>
//           </thead>
//           <tbody>

//               <>
//                 <tr >
                  
//                   <th className="table-danger">{employee_name}</th>
//                   <th className="table-danger">{employee_age}</th>
//                   <th className="table-danger">{employee_salary}</th>
//                   <th className="table-danger">{email}</th>
//                   <th className="table-danger">{phone}</th>
//                   <th className="table-danger">{city}</th>
//                   <th className="table-danger">{gender}</th>
                  
//                 </tr>
//               </>
//           </tbody>
//         </Table> */}
//         dsgdsg
//         </div>
        
//     )
// }

import React from 'react'
import { Table } from 'react-bootstrap';
export const ShowUser=(props)=> {

         console.log("vijay",props.user);
     console.log("vi",props.user.employee_name);
     const {employee_name,employee_age,employee_salary,email,city,phone,gender} = props.user
    return (
       
            <div>
             <Table striped bordered hover size="sm" >
          <thead className="thead-dark" >
            <tr className="table-dark">
              <th >Employe_Name</th>
              <th>Age</th>
              <th>Salary</th>
              <th>email</th>    
              <th>Phone</th>
              <th>City</th>
              <th>Gender</th>
             
            </tr>
          </thead>
          <tbody>

              <>
                <tr >
                  
                  <th className="table-danger">{employee_name}</th>
                  <th className="table-danger">{employee_age}</th>
                  <th className="table-danger">{employee_salary}</th>
                  <th className="table-danger">{email}</th>
                  <th className="table-danger">{phone}</th>
                  <th className="table-danger">{city}</th>
                  <th className="table-danger">{gender}</th>
                  
                </tr> 
               </>
          </tbody>
        </Table> 
        </div>
       
    )
}
