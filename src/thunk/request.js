import { getemp } from "../action";
import axios from "axios";

export const requestForemp = () => async (dispatch) => {
    
    try {
      const response = await axios.get('http://dummy.restapiexample.com/api/v1/employees ');
      dispatch(getemp(response.data));
    } catch (err) {

      console.log(err);
    }
  }