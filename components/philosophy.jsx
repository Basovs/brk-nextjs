import styled from "styled-components";
import Btn from "./Btn";

const PhilosophySection = () => {
  return (
    <Component>
      <Wrapper>
        <Article>
          <p>FILOZOFIJA</p>
          <h2>We Build Our Projects With Your Dreams Project And Ideas.</h2>
          <p>
            Consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur
            adipisicing elitsed do eiusimod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrixercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehei voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.Consectetur adipisicing elit Lorem ipsum dolor sit
            amet, consectetur adipisicing
          </p>
          <Btn href="/filazofija">LASĪT VAIRĀK</Btn>
        </Article>
        <ImgGrid>
          <BigPic />
          <MedPic />
          <SmallPic />
        </ImgGrid>
      </Wrapper>
    </Component>
  );
};

export default PhilosophySection;

const Component = styled.section`
  padding: 100px 0;

  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  inline-size: 100%;
  max-inline-size: 1110px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Article = styled.article`
  inline-size: 100%;
  max-inline-size: 555px;
  background-color: #fff;
  padding: 40px 16px 64px 50px;
  h2 {
    font-size: 32px;
    line-height: 40px;
  }
  p:first-child {
    color: #be1769;
    font-weight: 800;
  }
  p:nth-child(3) {
    padding: 40px 0 50px 0;
    font-size: 16px;
    line-height: 30px;
  }
`;
const ImgGrid = styled.div`
  inline-size: 555px;
  block-size: 555px;
  display: grid;
  grid-template-areas:
    "big big big big big big"
    "big big big big big big"
    "big big big big big big"
    "med med med med big big"
    "med med med med smallPic smallPic"
    "med med med med smallPic smallPic";
  grid-template-rows: 30px 30px 30px 30px 30px 30px;
  grid-template-columns: 30px 30px 30px 30px 30px 30px;
`;

const BigPic = styled.div`
  grid-area: big;
  inline-size: 100%;
  block-size: 100%;

  background-image: url("./bigPic.jpg");
  background-color: #cccccc; /* Used if the image is unavailable */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
`;
const MedPic = styled.div`
  grid-area: med;
  inline-size: 100%;
  block-size: 100%;

  background-image: url("./mediumPic.jpg");
  background-color: #cccccc; /* Used if the image is unavailable */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
`;
const SmallPic = styled.div`
  grid-area: smallPic;
  inline-size: 100%;
  block-size: 100%;

  background-image: url("./smallPic.jpg");
  background-color: #cccccc; /* Used if the image is unavailable */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
`;
