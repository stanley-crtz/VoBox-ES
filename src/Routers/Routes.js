import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Login } from "../Pages/Login";
import { Verifiqued } from "../Pages/Verifiqued";
import { SplashScreen } from "../Components/SplashScreen";
import { SubRutes } from "./SubRutes";
import { ForgotPassword } from "../Pages/ForgotPassword";
import { ConfirmEmail } from "../Pages/ConfirmEmail";
import { VerifyEmail } from "../Components/VerifyEmail";
import { VerifyPasswordReset } from "../Components/VerifyPasswordReset";
import { InitialPage } from "../Pages/InitialPage";

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
      <Route exact path="/Recuperar" component={ForgotPassword} />
      <Route exact path="/ConfirmEmail" component={ConfirmEmail} />
      <Route exact path="/Verifiqued/verifyEmail" component={VerifyEmail} />
      <Route exact path="/Verifiqued/resetPassword" component={VerifyPasswordReset} />
      <Route exact path="/_**" component={SubRutes} />
      <Route exact path="/**" component={InitialPage} />

    </Switch>
  );
};
