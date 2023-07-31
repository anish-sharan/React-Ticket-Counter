import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Modal,
  Box,
  //   Typography,
  Stepper,
  Step,
  StepLabel,
  Typography,
} from "@mui/material";
import Colors from "../../assets/Colors";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { makeStyles } from "@mui/styles";
import { signInConstant, signInStep } from "../../assets/Constant";

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

const SignInModal = ({ open, handleClose }) => {
  const [signInMethod, setSignInMethod] = useState();
  console.log(signInMethod);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={styles.container}>
        <Stepper activeStep={1}>
          {signInStep.map((label, index) => {
            return (
              <Step key={index}>
                <StepLabel icon={index + 1} />
                {/* <StepLabel>{label}</StepLabel> */}
              </Step>
            );
          })}
        </Stepper>
        <div style={styles.mt}>
          <RenderBox
            icon={"google"}
            isGoogle={true}
            loginMethod={"Continue with Google"}
            onClick={() => {
              setSignInMethod(signInConstant.google);
            }}
          />
          <RenderBox
            icon={"Email"}
            loginMethod={"Continue with Email"}
            onClick={() => {
              setSignInMethod(signInConstant.email);
            }}
          />
        </div>
        <Typography fontSize={15} color={Colors.fadedText}>
          I agree to the Terms & Conditions & Privacy Policy
        </Typography>
      </Box>
    </Modal>
  );
};

const styles = {
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    bgcolor: Colors.white,
    boxShadow: 24,
    p: 4,
    height: "50%",
    borderRadius: "5px",
  },
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
  mt: {
    marginTop: "2rem",
  },
};

SignInModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};

RenderBox.propTypes = {
  isGoogle: PropTypes.bol,
  loginMethod: PropTypes.string,
  onClick: PropTypes.func,
};

export default SignInModal;
