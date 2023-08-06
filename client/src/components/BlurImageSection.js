import React from "react";
import { dummyImage } from "../assets/Constant";
import PropTypes from "prop-types";

const BlurImageSection = ({ children }) => {
  return (
    <div style={style.container}>
      <div style={style.wrapper}></div>
      <div style={style.contentSection}>{children}</div>
    </div>
  );
};

const style = {
  container: {
    width: "100%",
    height: "80vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    zIndex: "-1",
    padding: "5%",
  },
  wrapper: {
    width: "100%",
    height: "80vh",
    position: "absolute",
    top: 0,
    left: 0,
    background: `url(${dummyImage})`,
    filter: "blur(4px)",
    zIndex: "-1",
  },
  contentSection: {
    width: "75%",
    height: "20rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

BlurImageSection.propTypes = {
  children: PropTypes.node,
};

export default BlurImageSection;
