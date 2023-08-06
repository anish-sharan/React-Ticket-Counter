import React from "react";
import PropTypes from "prop-types";
import { Divider } from "@mui/material";
import Colors from "../assets/Colors";

const CustomDivider = ({ color = Colors.grey }) => {
  return (
    <Divider sx={[style.marginTopBottom, { width: "100%" }]} color={color} />
  );
};

const style = {
  marginTopBottom: {
    marginTop: "20px",
    marginBottom: "20px",
  },
};

CustomDivider.propTypes = {
  color: PropTypes.string,
};

export default CustomDivider;
