import React from 'react';
import ClientsBox from "./ClientsBox";
import Routes from "../../Routes";



class Content extends React.Component{
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <main className="content">
                <Routes/>
            </main>
        );
    }
}

export default Content