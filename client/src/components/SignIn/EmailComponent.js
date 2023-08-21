import { Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import Colors from "../../assets/Colors";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";

const EmailComponent = ({ setSignInMethod, setSteps }) => {
  return (
    <div style={styles.container}>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", marginBottom: "2rem" }}
      >
        Login with Email
      </Typography>
      <CustomInput label="Email" />
      <div style={styles.buttonSection}>
        <CustomButton
          onClick={() => {
            setSignInMethod("");
            setSteps(1);
          }}
          title={"Back"}
          style={styles.button}
        />

        <CustomButton style={styles.button} title={"Continue"} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    marginTop: "2rem",
    display: "flex",
    flexDirection: "column",
  },
  button: {
    backgroundColor: Colors.redText,
    marginTop: "2rem",
    marginBottom: "2rem",
    width: "40%",
  },
  iconColor: {
    color: Colors.white,
  },
  buttonSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "2rem",
  },
};

EmailComponent.propTypes = {
  setSignInMethod: PropTypes.func,
  setSteps: PropTypes.func,
};

export default EmailComponent;
