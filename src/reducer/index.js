import { combineReducers } from "redux";
import { getEmployees } from "./GetEmployees";
import { updateEmployees } from "./UpdateEmployees";
  const reducer = combineReducers({
     getEmployees,
     updateEmployees,
 })
 export default reducer;