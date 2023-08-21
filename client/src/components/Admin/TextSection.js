import React from "react";
import { Container, Typography } from "@mui/material";
import PropTypes from "prop-types";
import Colors from "../../assets/Colors";
import CustomButton from "../CustomButton";

const TextSection = ({ boldText, smallText, onClick }) => {
  return (
    <Container>
      <div style={style.container}>
        <Typography color={Colors.darkTextColor} variant="h4">
          {boldText}
        </Typography>
        <Typography color={Colors.darkTextColor}>{smallText}</Typography>
        <CustomButton
          style={style.button}
          title={"Add your Movie"}
          onClick={onClick}
        />
      </div>
      ;
    </Container>
  );
};

const style = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem",
    height: "70vh",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
  },
  button: {
    backgroundColor: Colors.redText,
    marginTop: "2rem",
  },
};

TextSection.propTypes = {
  boldText: PropTypes.string,
  smallText: PropTypes.string,
  onClick: PropTypes.func,
};

export default TextSection;
