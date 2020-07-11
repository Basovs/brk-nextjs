import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import MySlider from "./MySlider";

export default class CarouselSingle extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 7000,
      arrows: false,
    };
    return (
      <Slider {...settings}>
        <StyledMySlider
          url="./heroImg.jpg"
          blockSize="700px"
          backgroundSize="cover"
        />
        <StyledMySlider
          url="./heroImg.jpg"
          blockSize="700px"
          backgroundSize="cover"
        />
        <StyledMySlider
          url="./heroImg.jpg"
          blockSize="700px"
          backgroundSize="cover"
        />
      </Slider>
    );
  }
}

const StyledMySlider = styled(MySlider)`
  @media screen and (min-width: 868px) {
    margin: 0 0 0 60px;
    block-size: 700px;
  }
`;
