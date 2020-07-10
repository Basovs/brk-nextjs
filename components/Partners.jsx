import styled from "styled-components";
import Title from "./Title";
import Carousel from "./Carousel";

// To check document before initializing

// if (typeof document !== "undefined") {

// }

const Partners = () => {
  return (
    <Component>
      <Title
        shadow="SADARBĪBAS PARTNERI"
        text="SADARBĪBAS PARTNERI"
        title="Ar ko mēs sadarbojamies"
      />
      <Carousel />
    </Component>
  );
};

export default Partners;

const Component = styled.section`
  background-color: #f7f7f7;
  padding: 30px;
`;
