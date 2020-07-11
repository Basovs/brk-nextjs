import React, { Component } from "react";
import styled from "styled-components";
import Link from "next/link";

class HumburgerNav extends Component {
  constructor(props) {
    super();
    this.state = {
      show: false,
    };
  }
  render() {
    if (this.state.show === false) {
      return (
        <>
          <HumburgerBtn
            onClick={() => {
              this.setState({ show: !this.state.show });
            }}
          >
            Menu :D
          </HumburgerBtn>
          <MyComponent style={{ display: "none" }} />
        </>
      );
    } else {
      return (
        <>
          <HumburgerBtn
            onClick={() => {
              this.setState({ show: !this.state.show });
            }}
          >
            Menu :D
          </HumburgerBtn>
          <MyComponent style={{ display: "block" }}>
            <Nav>
              <Ul>
                <Li>
                  <Link href="/">
                    <a>SĀKUMLAPA</a>
                  </Link>
                </Li>
                <Li>
                  <Link href="/">
                    <a>JAUNUMI</a>
                  </Link>
                </Li>
                <Li>
                  <Link href="/">
                    <a>FILAZOFIJA</a>
                  </Link>
                </Li>
                <Li>
                  <Link href="/">
                    <a>PAKALPOJUMI</a>
                  </Link>
                </Li>
                <Li>
                  <Link href="/">
                    <a>PORTFOLIO</a>
                  </Link>
                </Li>
                <Li>
                  <Link href="/">
                    <a>KONTAKTI</a>
                  </Link>
                </Li>
              </Ul>
            </Nav>
          </MyComponent>
        </>
      );
    }
  }
}

export default HumburgerNav;

const MyComponent = styled.div`
  position: absolute;
  inline-size: 100%;
  block-size: 100vh;
  background-color: #fff;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 60px 30px;
`;
const HumburgerBtn = styled.div`
  inline-size: 50px;
  block-size: 50px;
  background-color: #000;
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: calc(50% + 16px);
  transform: translateX(-50%);
  color: #fff;
  text-align: center;
  z-index: 2;
  @media screen and (min-width: 1130px) {
    display: none;
  }
`;
const Nav = styled.div``;
const Ul = styled.ul`
  list-style: none;
`;
const Li = styled.li`
  padding: 20px 0;
  a {
    text-decoration: none;
    font-size: 34px;
    font-weight: bold;
  }
`;
