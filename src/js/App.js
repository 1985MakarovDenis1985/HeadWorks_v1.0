import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink, HashRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

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

                </div>
            </HashRouter>

        );
    }
}

export default App;


