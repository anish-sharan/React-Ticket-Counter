import React from "react";
import Colors from "../../assets/Colors";
import { dummyImage2, dummyMovie } from "../../assets/Constant";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Container } from "@mui/system";
import CustomDivider from "../../components/CustomDivider";
import MovieCardSection from "../../components/MovieCardSection";

// import PropTypes from 'prop-types'

const ActorDetailPage = () => {
  const location = useLocation();
  const selectedActor = location?.state?.data;

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
      <div style={style.darkBackgroundSection}>
        <div style={style.contentSection}>
          <img src={dummyImage2} style={{ marginRight: "5%" }} />
          <div style={style.textContainer}>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold" }}
              color={Colors.lightTextColor}
            >
              {selectedActor?.name}
            </Typography>

            <Typography variant="h6" color={Colors.lightTextColor}>
              Occupation: {selectedActor?.occupation}
            </Typography>

            <Typography variant="h6" color={Colors.lightTextColor}>
              DOB: {selectedActor?.dob}
            </Typography>

            <Typography variant="h6" color={Colors.lightTextColor}>
              Born place: {selectedActor?.birthplace}
            </Typography>
          </div>
        </div>
      </div>

      <Container sx={style.marginTopBottom}>
        {renderHeading("About")}
        <Typography color={Colors.darkTextColor} sx={style.marginTopBottom}>
          {selectedActor?.aboutActor}
        </Typography>

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
  darkBackgroundSection: {
    backgroundColor: Colors.darkBackground,
    width: "100%",
    height: "60vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contentSection: {
    zIndex: "1",
    width: "90%",
    height: "60%",
    display: "flex",
    flexDirection: "row",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  marginTopBottom: {
    marginTop: "20px",
    marginBottom: "20px",
  },
};

// ActorDetailPage.propTypes = {}

export default ActorDetailPage;
