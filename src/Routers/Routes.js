import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Login } from '../Pages/Login';
import { Verifiqued } from '../Pages/Verifiqued';
import NavBar from '../Components/Navbar';
import { Home } from '../Pages/Home';
import { Grupos } from '../Pages/Grupos';
import { Solicitudes } from '../Pages/Solicitudes';
import { SplashScreen } from '../Components/SplashScreen';
import { ConnectToRedux } from '../Components/ConnectToRedux';
import { ProtectedRoute } from './ProtectedRoute';
import { Settings } from '../Pages/Settings';

export const Routes = ConnectToRedux(({ User }) => {

    const [splash, setSplash] = useState({
        rutes: false,
        splash: true
    });

    useEffect(() => {

        if (splash.rutes) {

            setTimeout(() => setSplash((v) => ({ ...v, splash: false })), 2000)

        }

    }, [splash.rutes])

    return (
        <Switch>

            {
                splash.splash && (
                    <SplashScreen onClose={setSplash} />
                )
            }

            {
                splash.rutes && (
                    <>
                        {
                            User && <NavBar />
                        }

                        <div className="container">
                            <Switch>
                                <ProtectedRoute exact path="/_" component={() => <Redirect to="/_Inicio" />} />
                                <ProtectedRoute exact path="/_Inicio" component={Home} />
                                <ProtectedRoute exact path="/_Grupos" component={Grupos} />
                                <ProtectedRoute exact path="/_Solicitudes" component={Solicitudes} />
                                <ProtectedRoute exact path="/_Ajustes" component={Settings} />
                            </Switch>
                        </div>
                        <Route exact path="/Login" component={Login} />
                        <Route exact path="/Verifiqued" component={Verifiqued} />
                    </>
                )
            }
        </Switch>

    )
})
