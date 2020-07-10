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
  padding: 0 30px;
`;
