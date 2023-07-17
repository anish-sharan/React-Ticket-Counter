import React from "react";
import {
  AppBar,
  Button,
  TextField,
  Toolbar,
  CssBaseline,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Colors from "../assets/Colors";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    margin: 0,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: 10,
  },
  leftContent: {
    display: "flex",
    alignItems: "center",
  },
  rightContent: {
    display: "flex",
    alignItems: "center",
  },
  textField: {
    backgroundColor: Colors.white,
  },
}));

const NavBar = () => {
  const style = useStyles();

  return (
    <div className={style.root}>
      <CssBaseline />
      <AppBar
        position="static"
        sx={{ backgroundColor: Colors.darkColor, margin: 0 }}
      >
        <Toolbar variant="dense" className={style.toolbar}>
          <div className={style.leftContent}>
            <Typography variant="h6" color="inherit">
              LOGO
            </Typography>
            <TextField
              id="outlined-basic"
              label="Search for movies"
              variant="outlined"
              size="small"
              className={style.textField}
            />
          </div>
          <div className={style.rightContent}>
            <Button variant="contained" color="success">
              Sign in
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
