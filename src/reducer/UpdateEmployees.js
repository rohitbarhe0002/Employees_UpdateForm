import { UPDATE_EMP }from "../action";
const initialState = {
    employee:{
        id:'',
       employee_name:'',
       employee_age:'',
       employee_salary:'',
    },
}

export const updateEmployees = (state=initialState,action) =>  {
const {payload}=action
console.log("emp red",state)
    switch (action.type) 
    {
        case UPDATE_EMP:
        return {
            ...state,
            employee:action.payload,

        }
        default :
        return state
    }

}