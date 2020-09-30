import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";


const mapPropsToState = (state) => {
    return {
        clients: state.clientReducer.users
    }

}



class ClientsBox extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        let {clients} = JSON.parse(JSON.stringify(this.props))

        return (
            <div className="content_box content_clients_box">
                <div className="content_box_clients_box">
                    {clients.reverse().map((el) => (
                        <div className="content_box_user_box" key={el.id}>
                            <p> Name: <span>{el.firstName}  {el.secondName}</span></p>
                            <p> Date of registration: <span>{el.dateRegistration}</span></p>
                        </div>
                    ))}
                </div>

                <div className="content_box_btn_registration">
                    <div className="btn_to_registration"  style={{fontSize: "50px"}}>
                        <Link to="/registration">Registration</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapPropsToState, null)(ClientsBox)