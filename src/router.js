import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./pages/login/App";
import Dashboard from "./pages/dashboard/index";

const rootElement = document.getElementById("root");
export default function  () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}