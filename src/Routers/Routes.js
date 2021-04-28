import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { Login } from '../Pages/Login';
import { Verifiqued } from '../Pages/Verifiqued';
import NavBar from '../Components/Navbar';
import { Home } from '../Pages/Home';
import { Grupos } from '../Pages/Grupos';
import { Solicitudes } from '../Pages/Solicitudes';

export const Routes = () => {
    return (
        <Switch>
            <Route path='/_' component={() => {

                return (
                    <BrowserRouter>
                        <NavBar />
                        <div className="container">
                            <Switch>
                                <Route exact path="/_" component={() => <Redirect to="/_Inicio" />} />
                                <Route exact path="/_Inicio" component={Home} />
                                <Route exact path="/_Grupos" component={Grupos} />
                                <Route exact path="/_Solicitudes" component={Solicitudes} />
                            </Switch>
                        </div>
                    </BrowserRouter>
                )

            }} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Verifiqued" component={Verifiqued} />
        </Switch>
    )
}
