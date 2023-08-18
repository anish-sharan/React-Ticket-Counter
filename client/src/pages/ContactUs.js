import React from "react";
import BlurImageSection from "../components/BlurImageSection";
import { Container, Typography } from "@mui/material";
import Colors from "../assets/Colors";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
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
        <CustomInput label="Please enter your name" />
        <CustomInput
          label="Please enter your email"
          style={style.marginTopBottom}
        />
        <CustomInput
          label="Message"
          maxRows={5}
          minRows={5}
          multiline
          style={{ marginBottom: "20px" }}
        />
        <div style={style.buttonSection}>
          <CustomButton color="info" variant="outlined" title={"Reset"} />
          <CustomButton color="success" title={"Submit"} />
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
