import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

const CustomButton = ({
  title,
  onClick,
  variant = "contained",
  style,
  color,
}) => {
  return (
    <Button variant={variant} onClick={onClick} style={style} color={color}>
      {title}
    </Button>
  );
};

CustomButton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  variant: PropTypes.string,
  color: PropTypes.string,
};

export default CustomButton;
