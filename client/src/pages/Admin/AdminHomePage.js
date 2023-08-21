import React from "react";
import CarouselComponent from "../../components/CarouselComponent";
// import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import TextSection from "../../components/Admin/TextSection";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  box: {
    height: "20%",
    marginTop: "10px",
  },
}));

const AdminHomePage = () => {
  const style = useStyles();
  const navigate = useNavigate();

  const buttonClickHandler = () => {
    navigate("/admin/add_movie");
  };

  return (
    <div>
      <div className={style.box}>
        <CarouselComponent />
      </div>
      <TextSection
        boldText={"Booking Management"}
        smallText={
          "Effortlessly manage movie ticket bookings. Review and approve pending bookings, track booking history, and ensure a smooth ticketing process for your users."
        }
        onClick={buttonClickHandler}
      />
      <TextSection
        boldText={"User Management"}
        smallText={
          "Maintain a database of registered users. Review user profiles, manage accounts, and provide support when needed."
        }
      />
      <TextSection
        boldText={"Add Movie"}
        smallText={
          "Easily add new movie details to the website. Include information such as title, genre, release date, cast, synopsis, trailer link, and more. Upload eye-catching posters to entice your audience."
        }
      />
    </div>
  );
};

// AdminHomePage.propTypes = {};

export default AdminHomePage;
