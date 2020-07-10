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

      className: "slides",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    };
    return (
      <Container>
        <Slider {...settings}>
          <div className="janis">
            <img src="company1.svg" alt="company1" />
          </div>
          <div>
            <img src="company2.svg" alt="company2" />
          </div>
          <div>
            <img src="company3.svg" alt="company3" />
          </div>
          <div>
            <img src="company4.svg" alt="company4" />
          </div>
          <div>
            <img src="company2.svg" alt="company2" />
          </div>
          <div>
            <img src="company3.svg" alt="company3" />
          </div>
        </Slider>
      </Container>
    );
  }
}

const Container = styled.div``;
