import styled from "styled-components";
import Btn from "./Btn";
import { motion } from "framer-motion";

const PhilosophySection = () => {
  return (
    <Component>
      <Wrapper>
        <Article
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.5 }}
        >
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
          <Btn href="/philosophy">LASĪT VAIRĀK</Btn>
        </Article>
        <ImgGrid
        // initial={{ x: 200, opacity: 0 }}
        // animate={{ x: 0, opacity: 1 }}
        // transition={{ delay: 0.95, duration: 0.5 }}
        />
      </Wrapper>
    </Component>
  );
};

export default PhilosophySection;

const Component = styled.section`
  padding: 50px 30px;

  display: flex;
  justify-content: center;
  @media screen and (min-width: 1130px) {
    padding: 100px 0;
  }
`;
const Wrapper = styled.div`
  inline-size: 100%;
  max-inline-size: 1110px;

  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1130px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
const Article = styled(motion.article)`
  inline-size: 100%;
  max-inline-size: 540px;
  background-color: #fff;
  padding: 0 0 50px 0;
  @media screen and (min-width: 1130px) {
    max-inline-size: 49%;
    padding: 40px 0 64px 20px;
  }

  h2 {
    font-size: 32px;
    line-height: 40px;
  }
  p:first-child {
    color: #be1769;
    font-weight: 800;
  }
  p:nth-child(3) {
    padding: 40px 0px 50px 0;
    font-size: 14px;
    line-height: 30px;
  }
`;
const ImgGrid = styled(motion.div)`
  inline-size: 100%;
  block-size: 300px;

  background-image: url("./pics.jpg");
  background-color: #cccccc; /* Used if the image is unavailable */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */

  @media screen and (min-width: 500px) {
    block-size: 400px;
    inline-size: 500px;
  }

  @media screen and (min-width: 670px) {
    block-size: 500px;
    inline-size: 550px;
  }

  @media screen and (min-width: 900px) {
    block-size: 500px;
    inline-size: 600px;
  }

  @media screen and (min-width: 1130px) {
    max-inline-size: 49%;
  }
`;
// const ImgGrid = styled.div`
//   inline-size: 50%;
//   block-size: 555px;
//   display: grid;
//   grid-template-areas:
//     ". lar lar lar lar lar"
//     ". lar lar lar lar lar"
//     ". lar lar lar lar lar"
//     "medi medi medi medi smalish smalish"
//     "medi medi medi medi smalish smalish"
//     "medi medi medi medi smalish smalish";
//   grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
//   grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
// `;

// const BigPic = styled.div`
//   grid-area: lar;
//   inline-size: 100%;
//   block-size: 100%;

//   background-image: url("./bigPic.jpg");
//   background-color: #cccccc; /* Used if the image is unavailable */
//   background-position: center; /* Center the image */
//   background-repeat: no-repeat; /* Do not repeat the image */
//   background-size: cover; /* Resize the background image to cover the entire container */
// `;
// const MedPic = styled.div`
//   grid-area: medi;
//   inline-size: 100%;
//   block-size: 100%;

//   background-image: url("./mediumPic.jpg");
//   background-color: #cccccc; /* Used if the image is unavailable */
//   background-position: center; /* Center the image */
//   background-repeat: no-repeat; /* Do not repeat the image */
//   background-size: cover; /* Resize the background image to cover the entire container */
// `;
// const SmallPic = styled.div`
//   grid-area: smalish;
//   inline-size: 100%;
//   block-size: 100%;

//   margin: -200px -200px;
//   justify-self: center;
//   align-self: center;

//   background-image: url("./smallPic.jpg");
//   background-color: #cccccc; /* Used if the image is unavailable */
//   background-position: center; /* Center the image */
//   background-repeat: no-repeat; /* Do not repeat the image */
//   background-size: cover; /* Resize the background image to cover the entire container */
// `;
