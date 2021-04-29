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
                                <Route exact path="/_" component={() => <Redirect to="/_Inicio" />} />
                                <Route exact path="/_Inicio" component={Home} />
                                <Route exact path="/_Grupos" component={Grupos} />
                                <Route exact path="/_Solicitudes" component={Solicitudes} />
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
