import React from "react";
import BlurImageSection from "../components/BlurImageSection";
import { Button, Container, TextField, Typography } from "@mui/material";
import Colors from "../assets/Colors";
// import PropTypes from "prop-types";

const ContactUs = () => {
  return (
    <div>
      <BlurImageSection>
        <div style={style.container}>
          <Typography
            variant="h3"
            sx={style.aboutMovieSection}
            color={Colors.lightTextColor}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h5"
            sx={style.aboutMovieSection}
            color={Colors.lightTextColor}
          >
            Drop us a Line, Get in touch!
          </Typography>
        </div>
      </BlurImageSection>

      <Container style={style.inputSection}>
        <TextField
          id="outlined-basic"
          label="Please enter your name"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Please enter your email"
          variant="outlined"
          sx={style.marginTopBottom}
        />
        <TextField
          id="outlined-basic"
          label="Message"
          variant="outlined"
          maxRows={5}
          minRows={5}
          multiline
          sx={{ marginBottom: "20px" }}
        />
        <div style={style.buttonSection}>
          <Button variant="outlined" color="info">
            Reset
          </Button>
          <Button variant="contained" color="success">
            Submit
          </Button>
        </div>
      </Container>
    </div>
  );
};

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  aboutMovieSection: {
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
  },
  inputSection: {
    display: "flex",
    flexDirection: "column",
  },
  marginTopBottom: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  buttonSection: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "20px",
  },
};

// ContactUs.propTypes = {};

export default ContactUs;
