import React, { useState } from "react";
import NavBar from "../components/NavBar";
import CarouselComponent from "../components/CarouselComponent";
import { makeStyles } from "@mui/styles";
import MovieCardSection from "../components/MovieCardSection";
import { TrendingSection } from "../components/TrendingSection";
import Footer from "../components/Footer";
import SignInModal from "../components/SignIn/SignInModal";

const useStyles = makeStyles(() => ({
  box: {
    height: "20%",
    marginTop: "10px",
  },
}));

const HomePage = () => {
  const style = useStyles();

  const [isSignInModalVisible, setIsSignInModalVisible] = useState(false);

  const toggleSignInVisblity = () => {
    setIsSignInModalVisible(!isSignInModalVisible);
  };

  return (
    <>
      <SignInModal
        open={isSignInModalVisible}
        handleClose={toggleSignInVisblity}
      />

      <NavBar onSignInPress={toggleSignInVisblity} />

      <div className={style.box}>
        <CarouselComponent />
      </div>

      <MovieCardSection />
      <MovieCardSection isDark={true} />

      <TrendingSection />

      <Footer />
    </>
  );
};

export default HomePage;
