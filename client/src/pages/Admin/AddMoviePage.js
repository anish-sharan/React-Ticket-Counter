import { Container, TextField } from "@mui/material";
import React from "react";
// import PropTypes from "prop-types";

const AddMoviePage = () => {
  return (
    <Container sx={style.container}>
      <TextField label={"City"} style={style.input} />
      <TextField label={"Movie"} style={style.input} />
      <TextField label={"Seat Row Capacity"} style={style.input} />
    </Container>
  );
};

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginTop: "2rem",
    marginBottom: "2rem",
  },
};

// AddMoviePage.propTypes = {};

export default AddMoviePage;
