import React from "react";
import PropTypes from "prop-types";
import { Card, Container, Typography } from "@mui/material";
import Colors from "../../assets/Colors";

const SeatArrangement = ({ data, numberOfSeats = 20 }) => {
  return (
    <Container>
      {data?.map((eachItem, ind) => {
        return (
          <div key={ind} style={style.row}>
            <Typography color={Colors.grey}>{eachItem}</Typography>
            {Array(numberOfSeats)
              .fill(0)
              ?.map((eachRow, i) => {
                return (
                  <Card
                    key={i}
                    sx={{
                      ...style.seatCard,
                      marginLeft: i === numberOfSeats / 2 && "5%",
                    }}
                  >
                    <Typography sx={style.seatText}>{i + 1}</Typography>
                  </Card>
                );
              })}
          </div>
        );
      })}
    </Container>
  );
};

const style = {
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "10px",
    marginBottom: "10px",
    alignItems: "center",
  },
  seatCard: {
    width: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: `1px solid ${Colors.redText}`,

    "&:hover": {
      backgroundColor: Colors.redText,
    },
  },
  seatText: {
    color: Colors.darkTextColor,
  },
};

SeatArrangement.propTypes = {
  data: PropTypes.array,
  numberOfSeats: PropTypes.number,
};

export default SeatArrangement;
