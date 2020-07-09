import styled from "styled-components";

const TitleComponent = props => {
  return (
    <Component>
      <Wrapper>
        <Text>{props.text}</Text>
        <Title>{props.title}</Title>
        <Shadow>{props.shadow}</Shadow>
      </Wrapper>
    </Component>
  );
};

export default TitleComponent;

const Component = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px 20px;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
const Shadow = styled.h2`
  position: absolute;
  top: 0;
  left: 50%;
  margin: 7px 0 0 -153.5px;
  color: #ebebeb;
  font-size: 39px;
  line-height: 1px;
  inline-size: 307px;
  @media screen and (min-width: 500px) {
    font-size: 50px;
    inline-size: 394px;
    margin: 0px 0 0 -197px;
  }
  @media screen and (min-width: 700px) {
    font-size: 56px;
    inline-size: 441px;
    margin: -5px 0 0 -220.5px;
  }
  @media screen and (min-width: 900px) {
    font-size: 60px;
    inline-size: unset;
    margin: -5px 0 0 -220.5px;
  }
  @media screen and (min-width: 1100px) {
    font-size: 100px;
    margin: -20px 0 0 -346.345px;
  }
`;
const Text = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #be1769;
  z-index: 1;
`;
const Title = styled.h2`
  font-size: 32px;
  z-index: 1;
`;
