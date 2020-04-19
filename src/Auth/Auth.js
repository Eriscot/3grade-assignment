import React from 'react'
import {Route, Redirect, Switch} from 'react-router-dom';
import Register from './Register/Register';
import Login from './Login/Login';

const Auth = () => {
    return (
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/">
                <Redirect to="/login"/>
            </Route>
        </Switch>
    )
}

export default Auth;