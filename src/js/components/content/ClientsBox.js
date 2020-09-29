import React from 'react';
import {connect} from "react-redux";



class ClientsBox extends React.Component {
    constructor(props) {
        super(props);
    }




    render() {
        // console.log(this.props.clients)

        return (
            <div className="content_box content_clients_box">

                <div className="content_box_clients_box">

                </div>

                <div className="content_box_btn_registration">

                </div>
            </div>
        );
    }
}

export default connect(null, null)(ClientsBox)