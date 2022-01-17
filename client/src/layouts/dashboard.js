import React, { useState } from 'react';
import { Button, Grid, makeStyles } from "@material-ui/core";
import Navbar from './../components/Navbar';
import Leftbar from './../components/Leftbar';
import { useLocation, Route, Switch } from "react-router-dom";
import routes from './../App/dashboardRoutes';
//import { Rotas as routes } from '../App/rotas';
//import SideNavbar from '../../components/Sidebar';

export default function DashboardLayout(props) {

  const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(10),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
  }));

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {

      return (
        <Route
          path={prop.path}
          render={(props) => <prop.component {...props} />}
          key={key}
        />
      );

    });
  };

  const classes = useStyles();

  return (
    <div>
      <Navbar titulo="titulo" />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
          {/* <SideNavbar /> */}
        </Grid>
        <Grid item sm={10} xs={10} className={classes.container}>
          <Switch>{getRoutes(routes)}</Switch>
          {/* {console.log('children', children)} */}
          {/* {getRoutes(routes)}
          {console.log('props', props)} */}
          {/* <Route
            path={props.path}
            render={(props) => <prop.component {...props} />}
          /> */}
        </Grid>
      </Grid>
    </div>
  )
};
