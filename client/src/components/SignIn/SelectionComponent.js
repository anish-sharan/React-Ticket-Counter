import { Typography } from "@mui/material";
import React from "react";
import Colors from "../../assets/Colors";
import RenderBox from "./RenderBox";
import { signInConstant } from "../../assets/Constant";
import PropTypes from "prop-types";

const SelectionComponent = ({ setSignInMethod, setSteps }) => {
  return (
    <>
      <div style={styles.mt}>
        <RenderBox
          icon={signInConstant.google}
          loginMethod={"Continue with Google"}
          onClick={() => {
            setSignInMethod(signInConstant.google);
          }}
        />
        <RenderBox
          icon={signInConstant.email}
          loginMethod={"Continue with Email"}
          onClick={() => {
            setSignInMethod(signInConstant.email);
            setSteps(2);
          }}
        />
        <RenderBox
          icon={signInConstant.admin}
          loginMethod={"Continue as Admin"}
          onClick={() => {
            setSignInMethod(signInConstant.admin);
            setSteps(2);
          }}
        />
      </div>
      <Typography fontSize={15} color={Colors.fadedText}>
        I agree to the Terms & Conditions & Privacy Policy
      </Typography>
    </>
  );
};

const styles = {
  mt: {
    marginTop: "2rem",
  },
};

SelectionComponent.propTypes = {
  setSignInMethod: PropTypes.func,
  setSteps: PropTypes.func,
};

export default SelectionComponent;
