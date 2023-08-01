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
import PropTypes from "prop-types";

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

const NavBar = ({ onSignInPress }) => {
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
            <Button
              variant="contained"
              style={{ backgroundColor: Colors.redText }}
              onClick={onSignInPress}
            >
              Sign in
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

NavBar.propTypes = {
  onSignInPress: PropTypes.func,
};

export default NavBar;
