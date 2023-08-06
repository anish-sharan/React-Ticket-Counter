import React, { useState } from "react";
import {
  AppBar,
  Button,
  TextField,
  Toolbar,
  CssBaseline,
  Typography,
  Link,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Colors from "../assets/Colors";
import SignInModal from "../components/SignIn/SignInModal";

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

  const [isSignInModalVisible, setIsSignInModalVisible] = useState(false);

  const toggleSignInVisibility = () => {
    setIsSignInModalVisible(!isSignInModalVisible);
  };

  return (
    <div className={style.root}>
      <SignInModal
        open={isSignInModalVisible}
        handleClose={toggleSignInVisibility}
      />

      <CssBaseline />
      <AppBar
        position="static"
        sx={{ backgroundColor: Colors.darkColor, margin: 0 }}
      >
        <Toolbar variant="dense" className={style.toolbar}>
          <div className={style.leftContent}>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{ textDecoration: "none" }}
            >
              <Link href="/" underline="none">
                LOGO
              </Link>
            </Typography>
            {/* <Typography
              variant="h6"
              color="inherit"
              component={Link}
              to="/"
              underline="none"
            >
              LOGO
            </Typography> */}
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
              onClick={toggleSignInVisibility}
            >
              Sign in
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
