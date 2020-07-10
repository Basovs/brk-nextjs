import styled from "styled-components";
import Btn from "./Btn";
import CarouselSingle from "./CarouselSingle";

const Hero = () => {
  return (
    <Component>
      <CarouselSingle />
      <Article>
        <h1>Pārdošanas teksts</h1>
        <p>
          Curabitur sollicitudin velit sit amet risus pellentesque gravida. In
          hac habitasse platea dictumst. In eu nisi molestie, rhoncus ante eget,
          ornare nunc. Suspendisse cursus dapibus ligula ut placerat. Curabitur
          sollicitudin velit sit amet risus pellentesque gravida. In hac
          habitasse platea dsictumst. In eu nisi molestie, rhoncus ante eget,
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
  /* block-size: 900px;
  background-image: url("./heroImg.jpg");
  background-color: #cccccc; /* Used if the image is unavailable */
  /*background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */

  position: relative;
  transition: all 0.2s ease;
  @media screen and (min-width: 868px) {
    margin: 0 0 0 60px;
    block-size: 700px;
  }
`;
const Article = styled.article`
  position: absolute;
  bottom: 0;
  right: 0;

  inline-size: 100%;
  max-inline-size: 810px;
  background-color: #fff;
  padding: 20px 20px 64px;

  @media screen and (min-width: 414px) {
    padding: 40px 50px 64px;
  }

  h1 {
    font-size: 36px;
    line-height: 40px;
    @media screen and (min-width: 600px) {
      font-size: 60px;
    }
  }
  p {
    padding: 20px 0 50px 0;
    font-size: 16px;
    line-height: 30px;
    @media screen and (min-width: 600px) {
      font-size: 18px;
      padding: 40px 0 50px 0;
    }
  }
`;
