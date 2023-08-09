import React from "react";
import PropTypes from "prop-types";
import Colors from "../../assets/Colors";
import { Typography } from "@mui/material";

const ShowTimeComponent = ({ showsData, compStyle }) => {
  return (
    <div style={{ ...compStyle, ...style.container }}>
      {showsData?.map((eachShow, i) => {
        return (
          <div key={i} style={style.chip}>
            <Typography>{eachShow?.timing}</Typography>
          </div>
        );
      })}
    </div>
  );
};

const style = {
  container: {
    display: "flex",
    flexDirection: "row",
  },
  chip: {
    border: `1px solid ${Colors.redText}`,
    width: "5rem",
    height: "2rem",
    borderRadius: "3px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "5px",
    marginLeft: "5px",
  },
};

ShowTimeComponent.propTypes = {
  showsData: PropTypes.array,
  compStyle: PropTypes.object,
};

export default ShowTimeComponent;
