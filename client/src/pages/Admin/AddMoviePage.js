import { Container, TextField } from "@mui/material";
import React, { useState } from "react";
import CustomSearchBar from "../../components/CustomSearchBar";
// import PropTypes from "prop-types";
import { dummyImage, movieFromApiDummy, showTime } from "../../assets/Constant";
import MovieCard from "../../components/MovieCard";
import CustomButton from "../../components/CustomButton";
import Colors from "../../assets/Colors";

const AddMoviePage = () => {
  const [movieData, setMovieData] = useState([]);
  const [movieShows, setMovieShows] = useState([]);
  console.log(`movieData - ${movieData}, movieShows-${movieShows}`);

  return (
    <Container sx={style.container}>
      <TextField label={"City"} style={style.input} />
      <TextField label={"Seat Row Capacity"} />
      <TextField label={"Price in ₹"} style={style.input} />

      <CustomSearchBar
        data={showTime}
        placeholder={"Add show timing"}
        setSelectedData={setMovieShows}
        multi
      />

      <CustomSearchBar
        data={movieFromApiDummy}
        placeholder={"Add movie"}
        setSelectedData={setMovieData}
        containerStyle={style.input}
      />

      {movieData?.[0]?.value && (
        <MovieCard
          name={movieData?.[0]?.value}
          image={dummyImage}
          rating={"5*"}
          genre={"Comedy"}
          language={"English"}
          style={style.input}
        />
      )}

      <CustomButton title={"Add movie"} style={style.button} />
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
  rowContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: Colors.redText,
    marginBottom: "2rem",
    marginTop: "2rem",
  },
};

// AddMoviePage.propTypes = {};

export default AddMoviePage;
