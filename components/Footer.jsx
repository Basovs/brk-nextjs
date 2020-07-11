import styled from "styled-components";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <Component>
        <Info>
          <BoxContainer>
            <InfoBox>
              <p>+ 371 2 777 777</p>
              <p>+ 371 2 777 777</p>
            </InfoBox>
            <InfoBox>
              <p>info@brk.lv</p>
              <p>Madonas iela 27, Jēkabpils</p>
            </InfoBox>
          </BoxContainer>
          <Facebook>facebook share placeholder</Facebook>
        </Info>
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
      <Author>
        <p>
          SIA „BRK“ © 2020. Visas tiesības aizsargātas / Privātuma Politika /
          Izstrādājs:
        </p>
        <img src="/kgLogo.svg" alt="KG logo" />
      </Author>
    </>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  padding: 50px 0;
  ::before {
    content: "";
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    inline-size: 100%;
    block-size: 100%;
    z-index: 1;
  }
`;

const Info = styled.div`
  color: #fff;
  z-index: 1;
  inline-size: 100%;
  max-inline-size: 1110px;
  padding: 0 0 50px;
  border-bottom: solid 2px #a3a3a3;
  margin: 0 0 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 745px) {
    align-items: unset;
    justify-content: space-around;
    flex-direction: row;
  }
  > div {
    inline-size: 100%;
    max-inline-size: 345px;
    block-size: 100px;
    display: flex;
    justify-content: space-between;
    @media screen and (min-width: 745px) {
      inline-size: 45%;
    }
    p:first-child {
      margin: 0 0 20px;
    }
  }
`;
const BoxContainer = styled.div``;
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Facebook = styled.div`
  background-color: blue;
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
  margin: 0 0 30px;
  @media screen and (min-width: 587px) {
    margin: 0;
  }
  a {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    padding: 10px 10px;
  }
`;
const Author = styled.div`
  background-color: #000;
  color: #fff;
  padding: 10px 30px;
  display: flex;
  justify-content: center;
  img {
    margin: 0 0 0 20px;
  }
`;
