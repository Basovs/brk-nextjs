import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

export default class CarouselSingle extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <Box />
          <Box />
          <Box />
        </Slider>
      </div>
    );
  }
}

const Box = styled.div`
  block-size: 900px;
  background-image: url("./heroImg.jpg");
  background-color: #cccccc; /* Used if the image is unavailable */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  outline: none;
  @media screen and (min-width: 868px) {
    margin: 0 0 0 60px;
    block-size: 700px;
  }
`;
