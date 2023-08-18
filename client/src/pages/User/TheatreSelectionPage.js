import { Card, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Colors from "../../assets/Colors";
import { dummyTheatre } from "../../assets/Constant";
import CustomDivider from "../../components/CustomDivider";
import { AiOutlineInfoCircle } from "react-icons/ai";
import ShowTimeComponent from "../../components/TheatreSection/ShowTimeComponent";
import TheatreInfoModal from "../../components/TheatreSection/TheatreInfoModal";
import HeaderSection from "../../components/TheatreSection/HeaderSection";
// import PropTypes from 'prop-types'

const TheatreSelectionPage = () => {
  const location = useLocation();
  const selectedMovie = location?.state?.selectedMovie;
  const [isTheatreModalVisible, setIsTheatreModalVisible] = useState(false);
  const [modalData, setModalData] = useState({
    mallName: "",
    mallAddress: "",
    mallFacilities: "",
  });
  console.log("🚀 ~ file:", modalData);

  const handleModalData = (value, inputRef) => {
    setModalData((prevState) => ({ ...prevState, [inputRef]: value }));
  };

  const toggleModalInVisibility = () => {
    setIsTheatreModalVisible(!isTheatreModalVisible);
  };

  const renderMallShows = (theatreShows) => {
    const { theatreName, theatreAddress, availableFacilities, showsAvailable } =
      theatreShows;
    return (
      <>
        <div style={style.mallSection}>
          <Typography sx={style.theatreName}>{theatreName}</Typography>
          <Typography
            color={Colors.grey}
            sx={{ fontSize: "10px" }}
            onClick={() => {
              handleModalData(theatreName, "mallName");
              handleModalData(theatreAddress, "mallAddress");
              handleModalData(availableFacilities, "mallFacilities");
              toggleModalInVisibility();
            }}
          >
            <AiOutlineInfoCircle size={20} />
            INFO
          </Typography>
          <ShowTimeComponent
            compStyle={style.chip}
            showsData={showsAvailable}
            selectedMovie={selectedMovie}
          />
        </div>
        <CustomDivider />
      </>
    );
  };

  return (
    <>
      <TheatreInfoModal
        open={isTheatreModalVisible}
        handleClose={toggleModalInVisibility}
        mallAddress={modalData.mallAddress}
        mallName={modalData.mallName}
        mallFacilities={modalData.mallFacilities}
      />

      <HeaderSection selectedMovie={selectedMovie} />

      <Container maxWidth={true}>
        <Card variant="outlined">
          <div>
            {dummyTheatre?.map((eachTheatre) => {
              return renderMallShows(eachTheatre);
            })}
          </div>
        </Card>
      </Container>
    </>
  );
};

const style = {
  mallSection: {
    display: "flex",
    flexDirection: "row",
    padding: "13px",
    justifyContent: "center",
    alignItems: "center",
  },
  theatreName: {
    width: "20%",
    fontWeight: "bold",
  },
  chip: {
    flex: "wrap",
    width: "70%",
    marginLeft: "3%",
  },
};
// MallSelectionPage.propTypes = {}

export default TheatreSelectionPage;
