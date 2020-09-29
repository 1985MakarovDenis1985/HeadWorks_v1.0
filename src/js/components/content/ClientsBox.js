import React from 'react';
import {connect} from "react-redux";
import {getClients, Plus} from "../../redux/actions/actions";


const mapPropsToState = (state) => {
    return {
        clients: state.clientReducer.users
        // number: state.numReducer.num
    }
}

const mapDispatchToProps = {
    getClients,
}

class ClientsBox extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => this.props.getClients(data))
    }


    getU = () => {
        console.log(this.props.clients)
    }


    render() {
        return (

            <div className="content_box content_clients_box">
                <div className="content_box_clients_box">
                    {/*{this.props.numReducer.num}*/}
                    {this.props.clients.map((el) => (
                        <div className="content_box_user_box" key={el.name + el.date}>
                            <p> Name: <span>{el.name}</span></p>
                            <p> Date of registration: <span>{el.date}</span></p>
                        </div>
                    ))}
                </div>

                <div className="content_box_btn_registration">
                    <button onClick={this.getU} style={{fontSize: "50px"}}>
                        CLICK
                    </button>
                </div>
            </div>
        );
    }
}

export default connect(mapPropsToState, mapDispatchToProps)(ClientsBox)