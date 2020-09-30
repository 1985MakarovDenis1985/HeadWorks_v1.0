import {ADD_CLIENT} from "../types";

export function setClients(users){
    return {
        type: ADD_CLIENT,
        payload: users
    }
}

