import styled from "styled-components";
import Title from "./Title";

const OfferSection = () => {
  return (
    <Component>
      <Title
        text="PAPAKALPOJUMI"
        title="KO MĒS PIEDĀVĀJAM"
        shadow="PAKALPOJUMI"
      />
      <SelectOffer>
        <First></First>
        <Second></Second>
        <Third></Third>
        <Fourth></Fourth>
        <Fifth></Fifth>
      </SelectOffer>
    </Component>
  );
};

export default OfferSection;

const Component = styled.section`
  padding: 40px 0;
`;
const SelectOffer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
  justify-content: center;
`;
const First = styled.div`
  block-size: 384px;

  background-image: url("./first.jpg");
  background-color: #cccccc; /* Used if the image is unavailable */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
`;
const Second = styled.div`
  block-size: 384px;

  background-image: url("./second.jpg");
  background-color: #cccccc; /* Used if the image is unavailable */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
`;
const Third = styled.div`
  block-size: 384px;

  background-image: url("./third.jpg");
  background-color: #cccccc; /* Used if the image is unavailable */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
`;
const Fourth = styled.div`
  block-size: 384px;

  background-image: url("./fourth.jpg");
  background-color: #cccccc; /* Used if the image is unavailable */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
`;
const Fifth = styled.div`
  block-size: 384px;

  background-image: url("./fifth.jpg");
  background-color: #cccccc; /* Used if the image is unavailable */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
`;
