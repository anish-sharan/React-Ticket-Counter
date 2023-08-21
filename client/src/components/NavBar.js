import React, { useState } from "react";
import { AppBar, Toolbar, CssBaseline, Typography, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Colors from "../assets/Colors";
import SignInModal from "../components/SignIn/SignInModal";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

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

            <CustomInput
              label="Search for movies"
              size="small"
              style={{ backgroundColor: Colors.white }}
            />
          </div>
          <div className={style.rightContent}>
            <CustomButton
              style={{ backgroundColor: Colors.redText }}
              onClick={toggleSignInVisibility}
              title={"Sign in"}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
