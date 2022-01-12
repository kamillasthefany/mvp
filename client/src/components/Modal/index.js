import React, { useState } from 'react';
//import { Container } from './styles';
import {
  Typography, Modal,
  makeStyles,
  Container,
  TextField,
  Button,
} from '@material-ui/core';
import Snackbar from '../Snackbar';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  container: {
    width: 500,
    height: 400,
    backgroundColor: "white",
    position: "absolute",
    borderRadius: "3px",
    borderColor: "white",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
    "&:focus": {
      outline: "none"
    }
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(3),
  },
}));

const ModalCustom = (props) => {

  const { onClick, open, setOpen } = props;

  const classes = useStyles();
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };



  return (
    <>
      <Snackbar open={openAlert} setOpen={setOpenAlert} />
      <Modal open={open} onClose={handleClose}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <Typography variant="h6" color="primary">
                Cadastro
              </Typography>
            </div>
            <div className={classes.item}>
              <TextField
                rows={4}
                InputLabelProps={{ shrink: true }}
                defaultValue="teste"
                variant="outlined"
                label="Link"
                size="small"
                style={{ width: "100%" }}
              />
              <br />
              <br />
              <TextField
                rows={4}
                InputLabelProps={{ shrink: true }}
                defaultValue="teste"
                variant="outlined"
                label="Outline"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                placeholder='Digite aqui as tags'
                variant="outlined"
                label="Tags"
                size="small"
                InputLabelProps={{ shrink: true }}
                style={{ width: "100%" }}
              />
            </div>

            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: 20 }}
                onClick={() => setOpenAlert(true)}
              >
                Criar
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Cancelar
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
    </>
  )
}

export default ModalCustom;
