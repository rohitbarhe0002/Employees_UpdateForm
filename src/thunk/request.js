import { getemp, UpdateEmployee } from "../action";
import axios from "axios";


export const requestForemp = () => async (dispatch) => {
    
    try {
      const response = await axios.get('http://localhost:3008/data');
      dispatch(getemp(response.data));
    } catch (err) {

      console.log(err);
    }
  }


export const requestForEmpGet = (Id) => async (dispatch) => {

  try {
    const response = await axios.get(`http://localhost:3008/data/${Id}`);
    dispatch(UpdateEmployee(response.data));
    console.log("jiiiiii",response.data);
  } catch (err) {

    console.log(err);
  }
}


export const requestForEmpPut = (Id,employee) =>  () => {

  try {
 axios.put(`http://localhost:3008/data/${Id}`,employee);
  
  } catch (err) {

    console.log(err);
  }
}


export const requestForEmpPost = (employee) =>  () => {

  try {
 axios.post(`http://localhost:3008/data`,employee);
  
  } catch (err) {

    console.log(err);
  }
}

export const requestForEmpdelete = (id) =>  () => {

  try {
 axios.delete(`http://localhost:3008/data/${id}`);
 window.location.reload();
  } catch (err) {

    console.log(err);
  }
}