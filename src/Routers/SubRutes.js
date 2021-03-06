import React from "react";
import { Switch, Redirect} from "react-router";
import { ProtectedRoute } from "./ProtectedRoute";
import NavBar from "../Components/Navbar";
import { Home } from "../Pages/Home";
import { Grupos } from "../Pages/Grupos";
import { Solicitudes } from "../Pages/Solicitudes";
import { Settings } from "../Pages/Settings";
import { NewActivity } from "../Pages/NewActivity";
import { PageActivity } from "../Pages/PageActivity";

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
          <ProtectedRoute exact path="/_Actividad" component={PageActivity} />
          
        </Switch>
      </div>
    </>
  );
};
