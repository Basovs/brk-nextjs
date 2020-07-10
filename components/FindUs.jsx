import styled from "styled-components";
import Title from "./Title";
import MapAndInfo from "./MapAndInfo";

const OfferSection = () => {
  return (
    <Component>
      <Title
        text="KĀ MŪS ATRAST"
        title="Jēkabpils, Madonas 27"
        shadow="KĀ MŪS ATRAST"
      />
      <MapAndInfo />
    </Component>
  );
};

export default OfferSection;

const Component = styled.section`
  padding: 0 30px 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 1400px) {
    padding: 0 30px 80px;
  }
`;
