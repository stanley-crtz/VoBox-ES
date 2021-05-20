import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { ConnectToRedux } from '../Components/ConnectToRedux';

export const ProtectedRoute = ConnectToRedux(({ component: Component, props, User }) => {

    if (User) {

        if (User.emailVerified === false) {
            return <Redirect to='/ConfirmEmail' />
        }

        return (
            <Route {...props} component={Component} />
        )

    }

    return <Redirect to='/Login' />

})
