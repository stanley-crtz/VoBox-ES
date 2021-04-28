import React from 'react';
import {useLocation, Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import { VerifyEmail } from '../Components/VerifyEmail';

export const Verifiqued = () => {

    const oobCode = useQuery().get('oobCode');
    const mode = useQuery().get('mode');

    return (
        <BrowserRouter>

            <Redirect
                from="/Verifiqued/"
                to={`/Verifiqued/${mode}?oobCode=${oobCode}`}
            />

            <Switch>
                <Route exact path="/Verifiqued/verifyEmail" component={VerifyEmail} />
                {/* <Route exact path="/Verifiqued/resetPassword" /> */}
            </Switch>

        </BrowserRouter>
    )
}

const useQuery = () => new URLSearchParams(useLocation().search);