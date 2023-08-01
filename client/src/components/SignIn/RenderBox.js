import React from "react";
import PropTypes from "prop-types";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { Typography } from "@mui/material";
import Colors from "../../assets/Colors";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  boxEffect: {
    "&:hover": {
      backgroundColor: Colors.disable,
    },
  },
}));

const RenderBox = ({ isGoogle, loginMethod, onClick }) => {
  const classes = useStyles();
  return (
    <div style={styles.box} className={classes.boxEffect} onClick={onClick}>
      <div style={styles.iconSection}>
        {isGoogle ? <FcGoogle /> : <AiOutlineMail />}
      </div>
      <div style={styles.textSection}>
        <Typography>{loginMethod}</Typography>
      </div>
    </div>
  );
};

const styles = {
  box: {
    border: `1px solid ${Colors.greyBorder}`,
    margin: "2rem auto 2rem auto",
    width: "90%",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "row",
    height: "3rem",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textSection: {
    width: "70%",
  },
  iconSection: {
    width: "30%",
    textAlign: "center",
  },
};

RenderBox.propTypes = {
  isGoogle: PropTypes.bol,
  loginMethod: PropTypes.string,
  onClick: PropTypes.func,
};

export default RenderBox;
