import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Login } from "../Pages/Login";
import { Verifiqued } from "../Pages/Verifiqued";
import { SplashScreen } from "../Components/SplashScreen";
import { SubRutes } from "./SubRutes";

export const Routes = () => {
  const [splash, setSplash] = useState({
    rutes: false,
    splash: true,
  });

  useEffect(() => {
    if (splash.rutes) {
      setTimeout(() => setSplash((v) => ({ ...v, splash: false })), 2000);
    }
  }, [splash.rutes]);

  return (
    <Switch>
      {splash.splash && <SplashScreen onClose={setSplash} />}

      <Route exact path="/Login" component={Login} />
      <Route exact path="/Verifiqued" component={Verifiqued} />
      <Route exact path="/Recuperar" component={() => <h1>hola</h1>} />
      <Route exact path="**" component={SubRutes} />

    </Switch>
  );
};
