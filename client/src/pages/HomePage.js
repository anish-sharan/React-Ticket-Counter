import React from "react";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import { dummyCarouselData } from "../assets/Constant";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  box: {
    height: "20%",
    marginTop: "10px",
  },
}));

const HomePage = () => {
  const style = useStyles();

  return (
    <div>
      <NavBar />
      <div className={style.box}>
        <Carousel
          numberOfSlides={dummyCarouselData?.length}
          data={dummyCarouselData}
        />
      </div>
    </div>
  );
};

export default HomePage;
