import React, { Component } from "react";
import Slider from "react-slick";
import MySlider from "./MySlider";

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
      <div>
        <Slider {...settings}>
          <MySlider
            url="company1.svg"
            blockSize="150px"
            backgroundSize="fit"
            backgroundColor="#fff"
            border="solid 10px #ebebeb"
          />
          <MySlider
            url="company2.svg"
            blockSize="150px"
            backgroundSize="fit"
            backgroundColor="#fff"
            border="solid 10px #ebebeb"
          />
          <MySlider
            url="company3.svg"
            blockSize="150px"
            backgroundSize="fit"
            backgroundColor="#fff"
            border="solid 10px #ebebeb"
          />
          <MySlider
            url="company4.svg"
            blockSize="150px"
            backgroundSize="fit"
            backgroundColor="#fff"
            border="solid 10px #ebebeb"
          />
          <MySlider
            url="company2.svg"
            blockSize="150px"
            backgroundSize="fit"
            backgroundColor="#fff"
            border="solid 10px #ebebeb"
          />
          <MySlider
            url="company3.svg"
            blockSize="150px"
            backgroundSize="fit"
            backgroundColor="#fff"
            border="solid 10px #ebebeb"
          />
        </Slider>
      </div>
    );
  }
}
