import React, { useState } from 'react';
import { Button, Grid, makeStyles } from "@material-ui/core";
import Navbar from './../components/Navbar';
import Leftbar from './../components/Leftbar';
//import SideNavbar from '../../components/Sidebar';

export default function DashboardLayout({ children }) {

  const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(10),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
  }));

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
          {children}
        </Grid>
      </Grid>
    </div>
  )
};
