import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Teste from '../pages/Teste';
import Teste2 from '../pages/Teste2';
import Login from '../pages/Login';
import Home from '../pages/Home';
import DashboardLayout from '../layouts/dashboard';
//import Logout from '../components/Logout';

import { withAuthorizationRouter } from './auth';

export function Rotas() {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/admin"
          component={withAuthorizationRouter((props) => <DashboardLayout {...props} />)}
        />
        <Route
          exact
          path="/"
          component={withAuthorizationRouter(Home)}
        />
        <Route
          exact
          path="/teste2"
          component={withAuthorizationRouter(Teste2)}
        />
        <Route
          exact
          path="/home"
          component={withAuthorizationRouter(Home)}
        />
        <Route
          exact
          path="/login"
          component={Login}
        />
        {/* <Route
          exact
          path="/sair"
          component={withAuthorizationRouter(Logout)}
        /> */}

      </Switch>
    </>
  );
}
