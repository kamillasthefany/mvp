import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar as SnackbasMUI } from '@material-ui/core';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const Snackbar = (props) => {

  const { open, setOpen } = props;
  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      console.log('away');
      return;
    }

    setOpen(false);
  };

  return (
    <SnackbasMUI open={open} autoHideDuration={6000} onClose={handleCloseAlert}>
      <Alert onClose={handleCloseAlert} severity="success">Mensagem de sucesso</Alert>
    </SnackbasMUI>
  );
}

export default Snackbar;