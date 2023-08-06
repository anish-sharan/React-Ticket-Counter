import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const MovieCard = ({
  name,
  image,
  rating,
  genre,
  language,
  style,
  isFullImageCard,
}) => {
  return (
    <Card raised={true} sx={[style, { maxWidth: 400, minHeight: 300 }]}>
      <CardMedia
        component="img"
        image={image}
        alt="movie image"
        // sx={{ height: isFullImageCard && "90%" }}
        sx={{ height: 290 }}
      />
      {isFullImageCard ? (
        <Typography sx={{ textAlign: "center" }}>{name}</Typography>
      ) : (
        <CardContent>
          <Typography>{name}</Typography>
          <Typography>{rating}</Typography>
          <Typography>{genre}</Typography>
          <Typography>{language}</Typography>
        </CardContent>
      )}
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
  isFullImageCard: PropTypes.bool,
};
