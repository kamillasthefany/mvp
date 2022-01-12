import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Login from '../pages/Login';
import { Rotas } from './rotas';
import { UseAuthProvider } from './../contexts/authContext';
import { Grid, makeStyles } from "@material-ui/core";
import Navbar from './../components/Navbar';
import Leftbar from './../components/Leftbar';

export const Routes = () => {
  const [{ rehydrated, auth }] = UseAuthProvider();

  const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(10),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
  }));

  const classes = useStyles();
  if (!rehydrated) {
    return <div>loading</div>;
  }
  return (
    <>
      <Router>
        <Switch>
          {auth && auth.token &&
            <>
              <Navbar titulo="titulo" />
              <Grid container>
                <Grid item sm={2} xs={2}>
                  <Leftbar />
                </Grid>
                <Grid item sm={10} xs={10} className={classes.container}>
                  <Route to="/teste" render={props => <Rotas {...props} />} />
                </Grid>
              </Grid>
            </>
          }
          <Route path="/" component={Login} />
          <Redirect to="/" exact component={Login} />
        </Switch>
      </Router>
    </>
  );
};
