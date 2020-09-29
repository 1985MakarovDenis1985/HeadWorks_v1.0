import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink, HashRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer"; // хуки позволяющий дипатчить акшины и получать state

//----------------------------

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <HashRouter>
                <div className="main_container">
                    <Header/>
                    <Content/>
                    <Footer/>
                </div>
            </HashRouter>

        );
    }
}

export default App;


