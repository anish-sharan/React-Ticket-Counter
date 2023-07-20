import React from "react";
import { CarouselProvider, Slider, Image, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import PropTypes from "prop-types";
import { dummyImage } from "../assets/Constant";

const Carousel = ({ numberOfSlides = 1, data }) => {
  return (
    <CarouselProvider
      naturalSlideWidth={5}
      naturalSlideHeight={5}
      totalSlides={numberOfSlides}
      style={{
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "95%",
        height: "15rem",
      }}
    >
      <Slider>
        {data?.map((eachItem, index) => {
          return (
            <Slide key={index}>
              <Image src={dummyImage} style={{ height: "20%" }} />
            </Slide>
          );
        })}
      </Slider>
    </CarouselProvider>
  );
};

export default Carousel;

Carousel.propTypes = {
  numberOfSlides: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.string),
};
