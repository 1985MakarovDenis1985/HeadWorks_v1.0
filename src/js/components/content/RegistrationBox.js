import React from 'react';
import {connect} from "react-redux";
import {setClients} from "../../redux/actions/actions";


const mapPropsToState = (state) => {
    return {
        clients: state.clientReducer.users
    }
}

const mapDispatchToProps = {
    setClients,
}

class RegistrationBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // newClient: {
                id: this.props.clients.length+1,
                firstName: "",
                secondName: "",
                sex: "man",
                loyaltyProgram: "",
                mobileApp: "",
                dateRegistration: `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`,
                creditCard: {
                    number: "",
                    date: "",
                    cv: ""
                }
            // },
            // creditCardBox: false
        }
    }


    changValue = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        return new Promise((res, rej) => {
            let newClient = Object.assign(this.state, {})
            newClient[name] = value
            this.setState({
                newClient
            })
            // this.setState({
            //     id : this.props.clients.length+1
            // })

            console.log(this.state)
            res(newClient)
        })
            .catch(err => console.error(err))
    }

    addNewClient = (e) => {
        e.preventDefault()
        const {setClients} = this.props
        setClients(this.state)

        this.setState({
            id: this.props.clients.length+2,
            firstName: "",
            secondName: "",
            sex: "man",
            loyaltyProgram: "",
            mobileApp: "",
            dateRegistration: `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`,
            creditCard: {
                number: "",
                date: "",
                cv: ""
            }
        })

        setTimeout(() => {
            console.log(this.props.clients)
        })
    }


    render() {
        return (
            <div className="content_box content_registration_box">
                <form
                    onSubmit={this.addNewClient}
                    id="registration_form"
                    action="">

                    <label htmlFor={"firstName"}>FIRST NAME <span className="err_text" id="err_name">error name</span>
                    </label>
                    <input
                        onChange={this.changValue}
                        name="firstName"
                        type="text"
                        value={this.state.firstName}/>


                    <label htmlFor={"secondName"}>FIRST NAME <span className="err_text" id="err_second_name">error second name</span></label>
                    <input
                        onChange={this.changValue}
                        name="secondName"
                        type="text"
                        value={this.state.secondName}/>


                    <label htmlFor="sex">SEX <span className="err_text" id="err_sex">err_sex</span></label>
                    <select
                        onChange={this.changValue}
                        name="sex"
                        defaultValue={this.state.sex}
                        id="registration_form_option_sex">
                        <option defaultValue="man">man</option>
                        <option value="woman">woman</option>
                    </select>

                    <label htmlFor="loyaltyProgram">LOYALTY PROGRAM <span className="err_text"
                                                                          id="err_loyalty_program">err_loyalty_program</span></label>
                    <input disabled
                           name="loyaltyProgram"
                           type="text"
                           defaultValue="not available"
                    />

                    <label htmlFor="creditCard">CREDIT CARD<span className="err_text"
                                                                 id="err_credit_card">err_credit_card</span></label>
                    <div>
                        <button>ADD CARD</button>
                    </div>

                    {/*<input*/}
                    {/*    name="creditCard"*/}
                    {/*    type="text"*/}
                    {/*/>*/}

                    <label htmlFor="mobileApp">MOBILE APPLICATION<span className="err_text"
                                                                       id="err_m_app">err_m_app</span></label>
                    <input
                        name="mobileApp"
                        type="text"
                    />

                    <button
                        // onClick={this.addNewClient}
                        type="submit" id="btn_add_client">add client
                    </button>
                </form>
            </div>
        );
    }
}

export default connect(mapPropsToState, mapDispatchToProps)(RegistrationBox)