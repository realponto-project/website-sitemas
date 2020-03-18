import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import PrivateRoutes from "./privateRoutes";

import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import CadastroPage from "../pages/Cadastro";
import ConfirmarPage from "../pages/Confimar";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/cadastro" component={CadastroPage} />
      <Route exact path="/confirmar" component={ConfirmarPage} />
      <PrivateRoutes exact path="/logged" />
      <Redirect to="/home" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
