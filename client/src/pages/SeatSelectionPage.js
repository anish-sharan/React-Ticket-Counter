import React from "react";
import HeaderSection from "../components/TheatreSection/HeaderSection";
// import CustomDivider from "../components/CustomDivider";
import { Button, Container, Typography } from "@mui/material";
import { dummySeatArrangement, numberOfSeatsInRow } from "../assets/Constant";
import SeatArrangement from "../components/TheatreSection/SeatArrangement";
import Colors from "../assets/Colors";
// import PropTypes from 'prop-types'

const SeatSelectionPage = () => {
  const dummyData = {
    name: "TEST",
    genre: "GENRE TEST",
    duration: "DURATION",
  };

  const renderBox = (isSelected) => {
    return (
      <div
        style={{
          ...style.box,
          backgroundColor: isSelected ? Colors.redText : Colors.white,
          border: !isSelected && `1px solid ${Colors.redText}`,
        }}
      ></div>
    );
  };

  return (
    <>
      <HeaderSection selectedMovie={dummyData} />
      <Container sx={style.marginTopBottom}>
        {/* <CustomDivider /> */}
        <SeatArrangement
          data={dummySeatArrangement}
          numberOfSeats={numberOfSeatsInRow}
        />
        <Typography sx={style.lowerText}>All eyes here please!</Typography>
        <Container style={style.infoStyle}>
          {renderBox()} <Typography>Available</Typography>
          {renderBox(true)} <Typography>Filled</Typography>
        </Container>
        <div style={style.buttonSection}>
          <Button variant="contained" style={style.button}>
            Pay Rs.100.00
          </Button>
        </div>
      </Container>
    </>
  );
};

const style = {
  box: {
    width: "1rem",
    height: "1rem",
    borderRadius: "3px",
  },
  marginTopBottom: {
    marginTop: "3vh",
    marginBottom: "3vh",
  },
  infoStyle: {
    display: "flex",
    flexDirection: "row",
    width: "20%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "2rem",
  },
  lowerText: {
    textAlign: "center",
    marginTop: "2rem",
  },
  buttonSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2rem",
  },
  button: {
    backgroundColor: Colors.redText,
    width: "30%",
  },
};

// SeatSelectionPage.propTypes = {}

export default SeatSelectionPage;
