import styled from "styled-components";
import Btn2 from "./Btn2";

import React, { Component } from "react";

class OfferBox extends Component {
  constructor(props) {
    super();
    this.state = {
      active: false,
    };
  }

  updateState = () => {
    this.setState({ active: !this.state.active });
    // console.log("'state' in OfferBox is:");
    // console.log(this.state.active);

    // const resault = this.state.active === true ? "displayed" : "hidden";
    // console.log("Status:");
    // console.log(resault);
  };

  render(props) {
    if (this.state.active === true) {
      return (
        <MyComponent
          onMouseLeave={this.updateState}
          style={{ backgroundImage: "url(" + this.props.backgroundImg + ")" }}
        >
          <Article>
            <h3>{this.props.title}</h3>
            <p>{this.props.text}</p>
            <Btn2 href="/">{this.props.btnText}</Btn2>
          </Article>
        </MyComponent>
      );
    }
    return (
      <MyComponent
        onMouseEnter={this.updateState}
        style={{ backgroundImage: "url(" + this.props.backgroundImg + ")" }}
      >
        <h3>{this.props.title}</h3>
      </MyComponent>
    );
  }
}

export default OfferBox;

const MyComponent = styled.div`
  block-size: 384px;
  position: relative;
  cursor: pointer;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #cccccc; /* Used if the image is unavailable */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ::before {
    content: "";
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    inline-size: 100%;
    block-size: 100%;
    z-index: 1;
    transition: all 0.15s ease;
  }
  :hover {
    ::before {
      background-color: rgba(190, 23, 105, 0.9);
    }
  }
  h3 {
    font-size: 30px;
    z-index: 1;
    @media screen and (min-width: 415px) {
      font-size: 32px;
    }
  }
`;
const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 1;
  text-align: center;

  p {
    max-inline-size: 80%;
    padding: 30px 0 20px;
    font-size: 18px;
    align-self: center;
    justify-self: center;
  }
`;
