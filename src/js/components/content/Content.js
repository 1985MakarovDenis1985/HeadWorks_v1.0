import React from 'react';
import {connect} from "react-redux";
import Routes from "../../Routes";
import {getClients} from "../../redux/actions/actions";

const mapDispatchToProps = {
    getClients,
}


class Content extends React.Component{
    constructor(props) {
        super(props);

    }


    // componentDidMount() {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then(res => res.json())
    //         .then(data => this.props.getClients(data))
    // }


    render() {
        return (
            <main className="content">
                <Routes/>
            </main>
        );
    }
}

export default connect(null, mapDispatchToProps)(Content)