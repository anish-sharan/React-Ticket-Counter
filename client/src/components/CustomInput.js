import { TextField } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const CustomInput = ({
  label = "",
  style,
  size,
  maxRow,
  minRow,
  multiline,
}) => {
  return (
    <TextField
      id="outlined-basic"
      variant="outlined"
      label={label}
      sx={style}
      size={size}
      multiline={multiline}
      minRow={minRow}
      maxRow={maxRow}
    />
  );
};

CustomInput.propTypes = {
  label: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  maxRow: PropTypes.number,
  minRow: PropTypes.number,
  multiline: PropTypes.bool,
};

export default CustomInput;
