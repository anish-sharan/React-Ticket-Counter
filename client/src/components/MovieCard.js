import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const MovieCard = ({ name, image, rating, genre, language, style }) => {
  return (
    <Card raised={true} sx={[style, { maxWidth: 400 }]}>
      <CardMedia component="img" image={image} alt="movie image" />
      <CardContent>
        <Typography>{name}</Typography>
        <Typography>{rating}</Typography>
        <Typography>{genre}</Typography>
        <Typography>{language}</Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  rating: PropTypes.number,
  language: PropTypes.string,
  genre: PropTypes.string,
  style: PropTypes.object,
};
