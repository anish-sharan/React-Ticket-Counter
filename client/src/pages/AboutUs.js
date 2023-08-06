import React from "react";
import BlurImageSection from "../components/BlurImageSection";
import { Container, Typography } from "@mui/material";
import Colors from "../assets/Colors";
// import PropTypes from "prop-types";

const AboutUs = () => {
  return (
    <div>
      <BlurImageSection>
        <div style={style.container}>
          <Typography
            variant="h3"
            sx={style.aboutMovieSection}
            color={Colors.lightTextColor}
          >
            Just a movie ticket website
          </Typography>
          <Typography
            variant="h5"
            sx={style.aboutMovieSection}
            color={Colors.lightTextColor}
          >
            with some new feature
          </Typography>
        </div>
      </BlurImageSection>

      <Container style={style.inputSection}>
        <Typography>
          A website where a user can book ticket,can see popular movies, seat
          arrangement and many more...
        </Typography>
        <Typography>
          Where a admin of theater can add movie schedule and many more...
        </Typography>
        <Typography>
          This platform is developed using react, material ui, bootstrap,
          nodejs, express, mongodb.
        </Typography>
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
    textAlign: "center",
    marginBottom: "20px",
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
// AboutUs.propTypes = {};

export default AboutUs;
