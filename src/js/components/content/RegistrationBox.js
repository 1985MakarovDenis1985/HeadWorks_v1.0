import React from 'react';
import {connect} from "react-redux";
import {setClients} from "../../redux/actions/actions";
import CreditCardBox from "./CreditCardBox";
import PropTypes from "prop-types"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCreditCard} from "@fortawesome/free-solid-svg-icons";


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
            person: {
                id: this.props.clients.length + 1,
                firstName: "",
                secondName: "",
                sex: "man",
                loyaltyProgram: "",
                mobileApp: "",
                dateRegistration: `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`,
                creditNumber: "",
            },
            creditCardBox: false,
            bottomText: "",
            validation: false
        }
    }

    componentDidMount() {
        fetch("https://meowfacts.herokuapp.com")
            .then(res => res.json())
            .then(res =>
                document.getElementById("ajax_test").innerText = res.data
            )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const registrationBlock = document.getElementById("content_registration_box");
        const ajaxText = document.getElementById("ajax_test");
        console.log(this.state.creditCardBox);
        // (this.state.validation == false) ? registrationBlock.style.borderColor = "red" : registrationBlock.style.borderColor = "transparent";
        (this.state.creditCardBox == false) ? ajaxText.style.display = "block" : ajaxText.style.display = "none"
    }


    valueCardNumber = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        const numberOfCart = Object.assign({}, this.state.person)
        numberOfCart[name] = value

        if (numberOfCart.creditNumber.length != 16) {
            numberOfCart.creditNumber = "nothing"
        }

        return new Promise((res, rej) => {
            this.setState({
                person:
                numberOfCart
            })
            res()
        })
            .then(() => {
                this.validationAndAnimationForm()
            })

    }


    changValue = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        return new Promise((res, rej) => {
            let newClient = Object.assign(this.state.person, {})
            newClient[name] = value
            this.setState({
                person:
                newClient
            })
            console.log(this.state.validation)
            this.validationAndAnimationForm()
            res()
        })
            .catch(err => console.error(err))
    }

    addNewClient = (e) => {
        e.preventDefault()
        const {setClients} = this.props
        if (this.state.validation == true) {
            return new Promise((res, rej) => {
                setClients(this.state.person)
                document.getElementById("error_text_information").style.animationName = "main_err_text_disappear"
                res()
            }).then(() => {
                this.setState({
                    person: {
                        id: this.props.clients.length + 2,
                        firstName: "",
                        secondName: "",
                        sex: "man",
                        loyaltyProgram: "",
                        mobileApp: "",
                        dateRegistration: `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`,
                        creditNumber: "",
                    },
                    creditCardBox: false,
                    validation: false
                })
            }).then(() => {
                this.validationAndAnimationForm()
                document.getElementById("notice_message").style.animationName = "notice_message_appear"
                setTimeout(()=>{
                    document.getElementById("notice_message").style.animationName = "null"
                }, 3000)
            })
        } else {
            document.getElementById("error_text_information").style.animationName = "main_err_text_appear"
            console.log("sorry")
        }
    }

    showCreditCard = () => {
        const {creditCardBox} = this.state
        if (!creditCardBox) {
            this.setState({creditCardBox: true})
        } else {
            this.setState({creditCardBox: false})
        }
    }

    validationAndAnimationForm = () => {
        const {creditNumber, firstName, secondName} = this.state.person;
        const errName = document.getElementById("err_name");
        const errSecondName = document.getElementById("err_second_name");

        if(firstName.length >= 3) {
            errName.style.color = "green"
            errName.style.animationName = "err_text_appear"
            errName.innerText = "Ok"

        }else {
            errName.style.color = "red";
            errName.style.animationName = "err_text_appear"
            errName.innerText = "very short name..."
        }

        if(secondName.length >= 3) {
            errSecondName.style.color = "green"
            errSecondName.style.animationName = "err_text_appear"
            errSecondName.innerText = "Ok"

        }else {
            errSecondName.style.color = "red"
            errSecondName.style.animationName = "err_text_appear"
            errSecondName.innerText = "very short second name..."
        }



        (secondName.length >= 2) ? errSecondName.style.color = "green" : errSecondName.style.color = "red";
        (firstName.length >= 2 && secondName.length >= 2) ? this.setState({validation: true}) : this.setState({validation: false})
        if (this.state.creditCardBox) {
            const errCreditCard = document.getElementById("err_credit_card");
            (creditNumber.length == 16) ? errCreditCard.style.color = "green" : errCreditCard.style.color = "red";
        }
    }


    render() {

        return (
            <div className="content_box content_registration_box" id="content_registration_box">
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
                        value={this.state.person.firstName}/>


                    <label htmlFor={"secondName"}>SECOND NAME <span className="err_text" id="err_second_name">write full name</span></label>
                    <input
                        onChange={this.changValue}
                        name="secondName"
                        type="text"
                        value={this.state.person.secondName}/>


                    <label htmlFor="sex">SEX <span className="err_text" id="err_sex">err_sex</span></label>
                    <div className="select_box">
                        <select
                            onChange={this.changValue}
                            name="sex"
                            defaultValue={this.state.person.sex}
                            id="registration_form_option_sex">
                            <option defaultValue="man">man</option>
                            <option value="woman">woman</option>
                        </select>
                    </div>

                    <label htmlFor="loyaltyProgram">LOYALTY PROGRAM <span className="err_text"
                                                                          id="err_loyalty_program">err_loyalty_program</span></label>
                    <input disabled
                           name="loyaltyProgram"
                           type="text"
                           defaultValue="not available"/>


                    <label htmlFor="creditCard" style={{float: "left"}}>ADD CREDIT CARD <span
                        className="btn_show_credit_card" type="click"
                        onClick={this.showCreditCard}><FontAwesomeIcon className="icon_credit_card" icon={faCreditCard}/></span>



                    </label>
                    <div>{this.state.creditCardBox ?
                        <CreditCardBox valueCardNumber={this.valueCardNumber}/> : null}</div>


                    <label htmlFor="mobileApp">MOBILE APPLICATION<span className="err_text"
                                                                       id="err_m_app">err_m_app</span></label>
                    <input disabled
                           name="mobileApp"
                           type="text"
                           defaultValue="not available"/>

                    <button
                        type="submit" id="btn_add_client">add client
                    </button>
                </form>

                <h5 className="error_text_information" id="error_text_information">Fill in all the fields</h5>
                <h5 className="ajax_test" id="ajax_test"></h5>
                <div className="notice_message" id="notice_message">
                    <p>New client has been added</p>
                    <p>{`${this.props.clients.length}    clients in data base`}</p>
                </div>
            </div>
        );
    }
}

RegistrationBox.propTypes = {
    clients: PropTypes.array
}

export default connect(mapPropsToState, mapDispatchToProps)(RegistrationBox)







