import React, { useState } from 'react';
import { Button, Grid, makeStyles } from "@material-ui/core";
import Navbar from '../../components/Navbar';
import ModalCustom from '../../components/Modal';
import Leftbar from '../../components/Leftbar';
import SideNavbar from '../../components/Sidebar';

export default function Home() {
  const [open, setOpen] = useState(false);

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
      <span>home</span>
    </div>
  )
};
