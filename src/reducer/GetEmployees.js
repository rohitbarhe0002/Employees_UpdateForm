import { GET_EMP }from "../action";
const initialState = {
    emp:[],
}

export const getEmployees = (state=initialState,action) =>  {

    switch (action.type) 
    {
        case GET_EMP:
        return {
            ...state,
            emp:action.payload,

        }
        default :
        return state
    }

}