import React from 'react';
import { AppBar, Badge, InputBase, Toolbar, Typography } from '@material-ui/core';
import { AccountBox, Cancel, Mail, Notifications, Search, Toys } from "@material-ui/icons";
import { LargeTitle, SmallTitle, MailIcon, ToolbarCustom, SearchBox, SearchIcon, UserIcon, IconsWrapper } from './styles';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  const { titulo } = props;
  return (
    // <AppBar position='static'>
    <AppBar position='fixed'>
      <ToolbarCustom>
        <Typography variant="h6" className={classes.logoLg}>
          {titulo}
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          LOGO
        </Typography>
        <SearchBox>
          <SearchIcon />
          <InputBase placeholder='Pesquisar' />
        </SearchBox>
        <IconsWrapper>
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
          <Badge color="secondary">
            <UserIcon />
          </Badge>
        </IconsWrapper>
      </ToolbarCustom>

    </AppBar>
  )
}

export default Navbar;