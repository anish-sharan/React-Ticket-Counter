import React from "react";
import CarouselComponent from "../../components/CarouselComponent";
// import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import TextSection from "../../components/Admin/TextSection";

const useStyles = makeStyles(() => ({
  box: {
    height: "20%",
    marginTop: "10px",
  },
}));

const AdminHomePage = () => {
  const style = useStyles();

  return (
    <div>
      <div className={style.box}>
        <CarouselComponent />
      </div>
      <TextSection
        boldText={"Test"}
        smallText={"I am some desctriotion to check woring of ther compoentn"}
      />
      <TextSection
        boldText={"Test"}
        smallText={"I am some desctriotion to check woring of ther compoentn"}
      />
      <TextSection
        boldText={"Test"}
        smallText={"I am some desctriotion to check woring of ther compoentn"}
      />
    </div>
  );
};

// AdminHomePage.propTypes = {};

export default AdminHomePage;
