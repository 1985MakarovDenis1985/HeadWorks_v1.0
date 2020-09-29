import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ClientsBox from "./components/content/ClientsBox";
import RegistrationBox from "./components/content/RegistrationBox";
import AboutBox from "./components/content/AboutBox";



const Routes = () => {
    return (
        <Switch>
            <Route exact path="/clients" component={ClientsBox} />
            <Route exact path="/registration" component={RegistrationBox} />
            <Route exact path="/about_me" component={AboutBox} />
        </Switch>
    )
}

export default Routes