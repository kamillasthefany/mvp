import React from 'react';
import { CustomButton } from './styles';
import { Container, makeStyles, Typography } from '@material-ui/core';
import { CenterFocusStrong, Home } from '@material-ui/icons';

const Leftbar = () => {

  const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(10),
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      height: '100vh',
      [theme.breakpoints.up("sm")]: {
        backgroundColor: '#D9D9D9',
        color: '#555',
        border: '1px solid #ece7e7'
      }
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing(3),
      [theme.breakpoints.up("sm")]: {
        marginBottom: theme.spacing(3),
        cursor: 'pointer',
      },
      '&:hover': {
        color: "white",
      },
    },
    icon: {
      marginRight: theme.spacing(1),
      [theme.breakpoints.up('sm')]: {
        fontSize: '18px',
      },
      [theme.breakpoints.down('sm')]: {
        alignItems: 'center',
      }
    },
    text: {
      fontWeight: 500,
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      }
    }
  }));

  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Home</Typography>
      </div>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Home</Typography>
      </div>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Home</Typography>
      </div>
    </Container>
  )
}

export default Leftbar;