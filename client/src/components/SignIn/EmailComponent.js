import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import Colors from "../../assets/Colors";

const EmailComponent = ({ setSignInMethod, setSteps }) => {
  return (
    <div style={styles.container}>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Login with Email
      </Typography>
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <Button
        onClick={() => {
          setSignInMethod("");
          setSteps(1);
        }}
        variant="contained"
        style={styles.button}
      >
        Back
      </Button>
      <Button variant="contained" style={{ backgroundColor: Colors.redText }}>
        Continue
      </Button>
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
  },
  iconColor: {
    color: Colors.white,
  },
};

EmailComponent.propTypes = {
  setSignInMethod: PropTypes.func,
  setSteps: PropTypes.func,
};

export default EmailComponent;
