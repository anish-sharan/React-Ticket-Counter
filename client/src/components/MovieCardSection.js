import { Grid, Container, Slide, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { dummyMovie } from "../assets/Constant";
import PropTypes from "prop-types";
import Colors from "../assets/Colors";

const MovieCardSection = ({
  isDark,
  title = "Title",
  subTitle = "Sub Title",
}) => {
  const [checked, setChecked] = useState(false);

  // For sliding effect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setChecked(true);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      style={{ backgroundColor: isDark && Colors.darkColor, marginTop: "2em" }}
    >
      <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
        <Container>
          <Typography
            variant="h5"
            color={isDark ? Colors.lightTextColor : Colors.darkTextColor}
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            color={isDark ? Colors.lightTextColor : Colors.darkTextColor}
          >
            {subTitle}
          </Typography>
          <Grid
            container
            spacing={4}
            columns={{ lg: 15, md: 12, sm: 10, sx: 8 }}
          >
            {dummyMovie?.map((eachMovie, i) => {
              return (
                <Grid item key={i} lg={3} md={4} sm={5} sx={8}>
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
        </Container>
      </Slide>
    </div>
  );
};

export default MovieCardSection;

MovieCardSection.propTypes = {
  isDark: PropTypes.bool,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};
