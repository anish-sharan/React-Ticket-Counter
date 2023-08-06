import React from "react";
import { useLocation } from "react-router-dom";
import { dummyImage, dummyMovie } from "../assets/Constant";
import { Button, Container, Typography } from "@mui/material";
import Colors from "../assets/Colors";
import { FaRegThumbsUp } from "react-icons/fa";
import ActorImageSection from "../components/MovieDetails/ActorImageSection";
import CustomDivider from "../components/CustomDivider";
import MovieCardSection from "../components/MovieCardSection";

const MovieDetailPage = () => {
  const location = useLocation();

  const selectedMovie = location?.state?.data;

  const renderBox = (text) => {
    return <div style={style.box}>{text}</div>;
  };

  const renderHeading = (headingText) => {
    return (
      <Typography
        variant="h5"
        sx={style.aboutMovieSection}
        color={Colors.darkTextColor}
      >
        {headingText}
      </Typography>
    );
  };

  return (
    <>
      <div style={style.container}>
        <div style={style.wrapper}></div>

        <div style={style.imageSection}>
          <img src={dummyImage} style={style.image} />
        </div>

        <div style={style.contentSection}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold" }}
            color={Colors.lightTextColor}
          >
            {selectedMovie?.name}
          </Typography>

          <Typography variant="h5" color={Colors.lightTextColor}>
            {selectedMovie?.genre}
          </Typography>

          <Typography variant="h5" color={Colors.lightTextColor}>
            {selectedMovie?.language}
          </Typography>

          <div style={style.durationAndUa}>
            {renderBox(selectedMovie?.isUa ? "U/A" : "U")}

            <Typography variant="h5" color={Colors.lightTextColor}>
              {selectedMovie?.duration}
            </Typography>
          </div>

          <Typography variant="h5" color={Colors.lightTextColor}>
            <FaRegThumbsUp
              color={Colors.lightTextColor}
              style={{
                marginRight: "10px",
              }}
            />
            {selectedMovie?.rating}
          </Typography>

          <Button
            variant="contained"
            style={{ backgroundColor: Colors.redText }}
            onClick={() => console.log("Book tickets")}
            sx={style.bookingButton}
          >
            Book tickets
          </Button>
        </div>
      </div>

      <Container>
        {renderHeading("About the movie")}

        <Typography color={Colors.darkTextColor} sx={style.marginTopBottom}>
          {selectedMovie?.aboutMovie}
        </Typography>

        <CustomDivider />

        {renderHeading("Cast")}

        <ActorImageSection
          actors={selectedMovie?.actors}
          containerStyle={style.marginTopBottom}
        />

        <CustomDivider />

        {renderHeading("Popular movies")}

        <MovieCardSection
          movieData={dummyMovie?.splice(0, 4)}
          isFullImageCard={true}
          containerStyle={style.marginTopBottom}
        />
      </Container>
    </>
  );
};

const style = {
  container: {
    width: "100%",
    height: "80vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    zIndex: "-1",
    padding: "5%",
  },
  imageSection: {
    width: "20%",
    height: "20rem",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    zIndex: "1",
    position: "relative",
  },
  wrapper: {
    width: "100%",
    height: "80vh",
    position: "absolute",
    top: 0,
    left: 0,
    background: `url(${dummyImage})`,
    filter: "blur(2px)",
    zIndex: "-1",
  },
  contentSection: {
    width: "75%",
    height: "20rem",
  },
  box: {
    backgroundColor: Colors.lightTextColor,
    alignItems: "center",
    display: "flex",
    borderRadius: "2px",
    justifyContent: "center",
    width: "25%",
  },
  durationAndUa: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "15%",
  },
  bookingButton: {
    marginTop: "10px",
  },
  aboutMovieSection: {
    fontWeight: "bold",
    marginBottom: "20px",
  },
  marginTopBottom: {
    marginTop: "20px",
    marginBottom: "20px",
  },
};
// MovieDetailPage.propTypes = {};

export default MovieDetailPage;
