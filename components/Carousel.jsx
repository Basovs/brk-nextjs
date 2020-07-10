import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,

      className: "slides",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Container>
        <Slider {...settings}>
          <div>
            <img src="company1.svg" alt="" />
          </div>
          <div>
            <img src="company2.svg" alt="" />
          </div>
          <div>
            <img src="company3.svg" alt="" />
          </div>
          <div>
            <img src="company4.svg" alt="" />
          </div>
          <div>
            <img src="company2.svg" alt="" />
          </div>
          <div>
            <img src="company3.svg" alt="" />
          </div>
        </Slider>
      </Container>
    );
  }
}

const Container = styled.div`
  inline-size: 100%;
  max-inline-size: 1200px;
  margin: 0 auto;
`;
