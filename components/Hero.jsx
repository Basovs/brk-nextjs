import styled from "styled-components";
import Link from "next/link";
import Btn from "./Btn";

const Hero = () => {
  return (
    <Component>
      <Article>
        <h1>Pārdošanas teksts</h1>
        <p>
          Curabitur sollicitudin velit sit amet risus pellentesque gravida. In
          hac habitasse platea dictumst. In eu nisi molestie, rhoncus ante eget,
          ornare nunc. Suspendisse cursus dapibus ligula ut placerat. Curabitur
          sollicitudin velit sit amet risus pellentesque gravida. In hac
          habitasse platea dictumst. In eu nisi molestie, rhoncus ante eget,
          ornare nunc. Suspendisse cursus dapibus ligula ut placerat. In hac
          habitasse platea dictumst.
        </p>
        <Btn href="/contact">LASĪT VAIRĀK</Btn>
      </Article>
    </Component>
  );
};

export default Hero;

const Component = styled.section`
  block-size: 700px;
  background-image: url("./heroImg.jpg");
  background-color: #cccccc; /* Used if the image is unavailable */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */

  position: relative;
  transition: all 0.2s ease;
  @media screen and (min-width: 868px) {
    margin: 0 0 0 60px;
  }
`;
const Article = styled.article`
  position: absolute;
  bottom: 0;
  right: 0;

  inline-size: 100%;
  max-inline-size: 810px;
  background-color: #fff;
  padding: 40px 50px 64px;
  h1 {
    font-size: 60px;
    line-height: 50px;
  }
  p {
    padding: 40px 0 50px 0;
    font-size: 18px;
    line-height: 30px;
  }
`;
