import React from "react";
import CarouselComponent from "../components/CarouselComponent";
import { makeStyles } from "@mui/styles";
import MovieCardSection from "../components/MovieCardSection";
import { TrendingSection } from "../components/TrendingSection";
import { dummyMovie } from "../assets/Constant";

const useStyles = makeStyles(() => ({
  box: {
    height: "20%",
    marginTop: "10px",
  },
}));

const HomePage = () => {
  const style = useStyles();

  return (
    <>
      <div className={style.box}>
        <CarouselComponent />
      </div>

      <MovieCardSection
        movieData={dummyMovie}
        title={"Title"}
        subTitle={"Sub Title"}
      />
      <MovieCardSection
        movieData={dummyMovie}
        isDark={true}
        title={"Title"}
        subTitle={"Sub Title"}
      />

      <TrendingSection />
    </>
  );
};

export default HomePage;
