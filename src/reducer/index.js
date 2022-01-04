import { combineReducers } from "redux";
import { getEmployees } from "./GetEmployees";
import { updateEmployees } from "./UpdateEmployees";
import { ShowForm } from "./ShowForm";
  const reducer = combineReducers({
     getEmployees,
     updateEmployees,
     ShowForm,
 })
 export default reducer;