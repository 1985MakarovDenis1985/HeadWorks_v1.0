import React from 'react';
import {connect} from "react-redux";
import set from "@babel/runtime/helpers/esm/set";



const mapPropsToState = (state) => {
    return {
        clients: state.clientReducer.users
    }
}

class RegistrationBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.clients.length + 1,
            firstName: "",
            secondName: "",
            sex: "",
            loyaltyProgram: "",
            mobileApp: "",
            dateRegistration:`${new Date().getDate()}.${new Date().getMonth()+1}.${new Date().getFullYear()}`,
            creditCard: {
                number: "",
                date: "",
                cv: ""
            },

        }
    }


    changValue = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        return new Promise((res, rej) => {
            let newClient = Object.assign(this.state, {})
            newClient[name] = value
            this.setState({newClient})
            console.log(this.state)
            res(newClient)
        })
            .then((newClient)=>{
                this.setState({newClient})
            })
            .catch(err => console.error(err))
    }

    addNewClient = (e) => {
        e.preventDefault()


        // console.log(this.props.clients.length)
    }


    render() {
        return (
            <div className="content_box content_registration_box">
                <form onSubmit={this.addNewClient} id="registration_form" action="">
                    <input
                        onChange={this.changValue}
                        name="firstName"
                        type="text"
                        value={this.state.firstName}/>
                    <span className="err_text" id="err_name">error name</span>

                    <input
                        onChange={this.changValue}
                        name="secondName"
                        type="text"
                        value={this.state.secondName}/>
                    <span className="err_text" id="err_second_name">error second name</span>

                    <input
                        name="sex"
                        type="text"/>
                    <span className="err_text">err_sex</span>

                    <input
                        name="loyaltyProgram"
                        type="text"/>
                    <span className="err_text">err_loyalty_program</span>

                    <input
                        type="text"/>
                    <span className="err_text">err_credit_card</span>

                    <input type="text"/>
                    <span className="err_text">err_m_application</span>

                    <button type="submit" id="btn_add_client">add client</button>
                </form>
            </div>
        );
    }
}

export default connect(mapPropsToState, null)(RegistrationBox)