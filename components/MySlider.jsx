import styled from "styled-components";

const MySlider = props => {
  return (
    <Component
      style={{
        backgroundImage: "url(" + props.url + ")",
        blockSize: props.blockSize,
        backgroundSize: props.backgroundSize,
        backgroundColor: props.backgroundColor,
        border: props.border,
      }}
    />
  );
};

export default MySlider;

const Component = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  outline: none;
`;
