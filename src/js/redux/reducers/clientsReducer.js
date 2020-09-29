import {ADD_CLIENT, GET_CLIENT} from "../types"

const initiallyState = {
    users: []
}

export const clientReducer = (state = initiallyState, action) => {
    switch (action.type){
        case GET_CLIENT :
            return {...state, users: state.users.concat(action.payload) }
        default :
            return state
    }
}
