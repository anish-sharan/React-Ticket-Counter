import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import { Container, Typography } from "@mui/material";
import { dummyImage } from "../assets/Constant";

const CarouselComponent = () => {
  const imageStyle = {
    width: "100%",
    height: "10rem",
  };

  return (
    <Container>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img src={dummyImage} style={imageStyle} />
          <Carousel.Caption>
            <Typography>First slide label</Typography>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={dummyImage} style={imageStyle} />
          <Carousel.Caption>
            <Typography>First slide label</Typography>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={dummyImage} style={imageStyle} />
          <Carousel.Caption>
            <Typography>First slide label</Typography>
          </Carousel.Caption>
        </Carousel.Item>
        {/* );
        })} */}
      </Carousel>
    </Container>
  );
};

export default CarouselComponent;

CarouselComponent.propTypes = {
  children: PropTypes.any,
  data: PropTypes.arrayOf(PropTypes.string),
};
