import React from 'react';
import { Grid, makeStyles } from "@material-ui/core";
import Navbar from './../src/components/Navbar';
import Leftbar from './../src/components/Leftbar';

export default function App() {

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
        </Grid>
        <Grid item sm={10} xs={10} className={classes.container}>
          {/* <BrowserRouter>
            <Switch>
              <Route exact path="/teste" component={Teste} />
              <Route exact path="/home" component={Home} />
            </Switch>
          </BrowserRouter> */}
        </Grid>
      </Grid>
    </div>
  )
};
