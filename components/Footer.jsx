import styled from "styled-components";
import Link from "next/link";

const Footer = () => {
  return (
    <Component>
      <Nav>
        <Ul>
          <Li>
            <Link href="/">
              <a>SĀKUMLAPA</a>
            </Link>
          </Li>
          <Li>
            <Link href="/news">
              <a>JAUNUMI</a>
            </Link>
          </Li>
          <Li>
            <Link href="/philosophy">
              <a>FILAZOFIJA</a>
            </Link>
          </Li>

          <Li>
            <Link href="/offer">
              <a>PAKALPOJUMI</a>
            </Link>
          </Li>

          <Li>
            <Link href="/portfolio">
              <a>PORTFOLIO</a>
            </Link>
          </Li>

          <Li>
            <Link href="/contact">
              <a>KONTAKTI</a>
            </Link>
          </Li>
        </Ul>
      </Nav>
    </Component>
  );
};

export default Footer;

const Component = styled.section`
  background-image: url("./footerImg.jpg");
  background-color: #cccccc; /* Used if the image is unavailable */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  block-size: 300px;

  ::before {
    content: "";
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    inline-size: 100%;
    block-size: 100%;
    z-index: 1;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Ul = styled.ul`
  list-style: none;
  inline-size: 100%;
  max-inline-size: 600px;
  z-index: 1;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;
const Li = styled.li`
  a {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    padding: 10px 10px;
  }
`;
