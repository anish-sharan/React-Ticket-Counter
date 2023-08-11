import { Container, Typography } from "@mui/material";
import React from "react";
import Colors from "../../assets/Colors";
import PropTypes from "prop-types";

const HeaderSection = ({ selectedMovie }) => {
  return (
    <div style={style.darkBackgroundSection}>
      <Container maxWidth={true}>
        <Typography variant="h4" color={Colors.lightTextColor}>
          {selectedMovie?.name}
        </Typography>
        <Typography variant="h6" color={Colors.lightTextColor}>
          {selectedMovie?.duration} • {selectedMovie?.genre}
        </Typography>
      </Container>
    </div>
  );
};

const style = {
  darkBackgroundSection: {
    backgroundColor: Colors.darkBackground,
    width: "100%",
    height: "20vh",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: "20px",
  },
};

HeaderSection.propTypes = {
  selectedMovie: PropTypes.object,
};

export default HeaderSection;
