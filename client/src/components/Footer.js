import React from "react";
import { Container, Typography } from "@mui/material";
import Colors from "../assets/Colors";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import PropTypes from "prop-types";

const RenderIcon = ({ children }) => {
  return <div style={styling.icon}>{children}</div>;
};

const RenderText = ({ text, isHoverEffect }) => {
  return (
    <Typography
      style={styling.text}
      color={Colors.fadedText}
      sx={{
        "&:hover": isHoverEffect ? { color: Colors.lightTextColor } : null,
      }}
      fontSize={15}
    >
      {text}
    </Typography>
  );
};

const Footer = () => {
  return (
    <Container maxWidth={false} style={styling.container}>
      <div style={styling.columnContainer}>
        <div style={styling.rowContainer}>
          <RenderIcon>
            <FacebookRoundedIcon
              sx={{ "&:hover": { color: Colors.lightColor } }}
            />
          </RenderIcon>
          <RenderIcon>
            <InstagramIcon sx={{ "&:hover": { color: Colors.lightColor } }} />
          </RenderIcon>
        </div>
        <div>
          <RenderText text="Copyright 2023 @ Ticket Counter Pvt Ltd. All Right Reserved" />
        </div>
        <div style={styling.rowContainer}>
          <RenderText text={"About us"} isHoverEffect={true} />
          <RenderText text={"\u00A0|\u00A0"} />
          <RenderText text={"Contact us"} isHoverEffect={true} />
        </div>
        <div>
          <RenderText
            text="The content and images used on this site are copyright protected and
            copyrights vests with the respective owners. The usage of the
            content and images on this website is intended to promote the works
            and no endorsement of the artist shall be implied. Unauthorized use
            is prohibited and punishable by law."
          />
        </div>
      </div>
    </Container>
  );
};

const styling = {
  container: {
    width: "100%",
    backgroundColor: Colors.darkColor,
    height: 200,
    padding: "2rem",
    paddingTop: "2rem",
  },
  columnContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  rowContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  text: {
    textAlign: "center",
  },
  icon: {
    backgroundColor: Colors.fadedText,
    borderRadius: "20px",
    marginRight: "10px",
    padding: "5px",
  },
};

RenderIcon.propTypes = {
  children: PropTypes.node,
};

RenderText.propTypes = {
  text: PropTypes.string,
  isHoverEffect: PropTypes.bool,
};

export default Footer;
