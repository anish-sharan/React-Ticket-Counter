import { Grid } from "@mui/material";
import React from "react";
import MovieCard from "./MovieCard";
import { dummyMovie } from "../assets/Constant";

const MovieCardSection = () => {
  return (
    <Grid
      container
      spacing={{ lg: 4, md: 3, sm: 2 }}
      columns={{ lg: 15, md: 12, sm: 10 }}
      style={{ backgroundColor: "red", width: "95%", margin: "2% auto 0 auto" }}
    >
      {dummyMovie?.map((eachMovie, i) => {
        return (
          <Grid item key={i} lg={3} md={4} sm={5}>
            <MovieCard
              name={eachMovie?.name}
              image={eachMovie?.image}
              rating={eachMovie?.rating}
              genre={eachMovie?.genre}
              language={eachMovie?.language}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MovieCardSection;
