import React from "react";
import { Switch, Redirect, Route } from "react-router";
import { ProtectedRoute } from "./ProtectedRoute";
import NavBar from "../Components/Navbar";
import { Home } from "../Pages/Home";
import { Grupos } from "../Pages/Grupos";
import { Solicitudes } from "../Pages/Solicitudes";
import { Settings } from "../Pages/Settings";
import { NewActivity } from "../Pages/NewActivity";

export const SubRutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Switch>
          <ProtectedRoute
            exact
            path="/_"
            component={() => <Redirect to="/_Inicio" />}
          />
          <ProtectedRoute exact path="/_Inicio" component={Home} />
          <ProtectedRoute exact path="/_Grupos" component={Grupos} />
          <ProtectedRoute exact path="/_Solicitudes" component={Solicitudes} />
          <ProtectedRoute exact path="/_Ajustes" component={Settings} />
          <ProtectedRoute exact path="/_Nueva_Actividad" component={NewActivity} />
          <Route exact path="**" component={() => <h1>No found</h1>} />
        </Switch>
      </div>
    </>
  );
};
