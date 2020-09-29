import {GET_CLIENT} from "../types";

export function getClients(users){
    return {
        type: GET_CLIENT,
        payload: users
    }
}

