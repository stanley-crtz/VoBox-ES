import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { AboutWe } from '../Components/AboutWe';
import { HomePage } from '../Components/HomePage';
import NavBar from "../Components/Navbar";



export const InitialPage = () => (
    <>
        <NavBar type='OutMenu' />
        <div className="container">
            <Switch>
                <Route exact path="/" component={() => <Redirect to='/Home' />} />
                <Route exact path="/Home" component={HomePage} />
                <Route exact path="/Sobre_Nosotros" component={AboutWe} />
            </Switch>
        </div>
    </>
)