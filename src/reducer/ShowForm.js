import { SHOW_FROM } from "../action"

const initialState = {
    show:false,
}

export const ShowForm = (state=initialState,action) =>  {

    console.log("state",state);
    switch (action.type) 
    {
        case SHOW_FROM:
        return {
            ...state,
            show:action.payload,

        }
        default :
        return state
    }

}