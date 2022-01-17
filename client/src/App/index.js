import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Login from '../pages/Login';
import { Rotas } from './rotas';
import { useHistory } from 'react-router-dom';
import { UseAuthProvider } from './../contexts/authContext';
import DashboardLayout from '../layouts/dashboard';

export const Routes = () => {
  const [{ rehydrated, auth }] = UseAuthProvider();
  const history = useHistory();

  console.log('windows location', window.location.href.includes('login'));

  const rotaDeLogin = () => {
    return window.location.href.includes('login');
  }

  // if (rotaDeLogin && auth) {
  //   history.push('/');
  //   window.location.reload();
  // }

  if (!rehydrated) {
    return <div>loading</div>;
  }
  return (
    <>
      <Router>
        <Switch>
          {auth && auth.token &&
            <Route to="/" render={props => <DashboardLayout {...props} />} />
          }
          <Route path="/" component={Login} />
          <Redirect to="/" exact component={Login} />
        </Switch>
      </Router>
    </>
  );
};
