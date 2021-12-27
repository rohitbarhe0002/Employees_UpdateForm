import { combineReducers } from "redux";
import { getEmployees } from "./GetEmployees";
  const reducer = combineReducers({
     getEmployees,
 })
 export default reducer;