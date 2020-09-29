import {ADD_CLIENT, GET_CLIENT} from "../types"

const initiallyState = {
    users: [
        {
            id: "1",
            firstName: "Leanne",
            secondName: "Graham",
            sex: "",
            loyaltyProgram: "",
            mobileApp: "",
            dateRegistration: "",
            creditCard: {
                number: "",
                date: "",
                cv: ""
            }
        },{
            id: "2",
            firstName: "Ervin",
            secondName: "Howell",
            sex: "",
            loyaltyProgram: "",
            mobileApp: "",
            dateRegistration: "",
            creditCard: {
                number: "",
                date: "",
                cv: ""
            }
        },{
            id: "3",
            firstName: "Clementine",
            secondName: "Bauch",
            sex: "",
            loyaltyProgram: "",
            mobileApp: "",
            dateRegistration: "",
            creditCard: {
                number: "",
                date: "",
                cv: ""
            }
        },{
            id: "4",
            firstName: "Patricia",
            secondName: "Lebsack",
            sex: "",
            loyaltyProgram: "",
            dateRegistration: "",
            mobileApp: "",
            creditCard: {
                number: "",
                date: "",
                cv: ""
            }
        },{
            id: "5",
            firstName: "Chelsey",
            secondName: "Dietrich",
            sex: "",
            loyaltyProgram: "",
            mobileApp: "",
            dateRegistration: "",
            creditCard: {
                number: "",
                date: "",
                cv: ""
            }
        }

    ]
}

export const clientReducer = (state = initiallyState, action) => {
    switch (action.type) {
        case GET_CLIENT :
            return {...state, users: state.users.concat(action.payload)}
        default :
            return state
    }
}
