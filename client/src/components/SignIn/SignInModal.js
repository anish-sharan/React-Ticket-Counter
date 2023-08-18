import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal, Box, Stepper, Step, StepLabel } from "@mui/material";
import Colors from "../../assets/Colors";
import { signInConstant, signInStep } from "../../assets/Constant";
import EmailComponent from "./EmailComponent";
import SelectionComponent from "./SelectionComponent";

const SignInModal = ({ open, handleClose }) => {
  const [signInMethod, setSignInMethod] = useState("");
  const [steps, setSteps] = useState(1);

  const signInTypeComponent = () => {
    if (
      signInMethod == signInConstant.email ||
      signInMethod == signInConstant.admin
    ) {
      return (
        <EmailComponent
          setSignInMethod={setSignInMethod}
          setSteps={setSteps}
          isAdminLogin={signInMethod == signInConstant.admin}
        />
      );
    } else {
      return (
        <SelectionComponent
          setSignInMethod={setSignInMethod}
          setSteps={setSteps}
        />
      );
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={styles.container}>
        <Stepper activeStep={steps}>
          {signInStep.map((label, index) => {
            return (
              <Step key={index}>
                <StepLabel icon={index + 1} />
                {/* <StepLabel>{label}</StepLabel> */}
              </Step>
            );
          })}
        </Stepper>
        {signInTypeComponent()}
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
    height: "60%",
    borderRadius: "5px",
  },
};

SignInModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default SignInModal;
