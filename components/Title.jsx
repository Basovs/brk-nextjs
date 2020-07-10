import styled from "styled-components";

const TitleComponent = props => {
  return (
    <Component>
      <Wrapper>
        <Shadow>{props.shadow}</Shadow>
        <Text>{props.text}</Text>
        <Title>{props.title}</Title>
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
  padding: 50px 0;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease;
`;
const Shadow = styled.h2`
  transition: all 0.2s ease;
  color: #ebebeb;
  font-size: 36px;
  line-height: 36px;
  margin: 0 0 -24px 0;

  @media screen and (min-width: 583px) {
    font-size: 46px;
    margin: 0 0 -20px 0;
  }
  @media screen and (min-width: 691px) {
    font-size: 56px;
    margin: 0 0 -16px 0;
  }
  @media screen and (min-width: 805px) {
    font-size: 66px;
    margin: 0 0 -12px 0;
  }
  @media screen and (min-width: 922px) {
    font-size: 76px;
    margin: 0 0 -8px 0;
  }
  @media screen and (min-width: 1400px) {
    font-size: 100px;
    margin: 0 0 0 0;
  }
`;
const Text = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #be1769;
  z-index: 1;
`;
const Title = styled.h2`
  font-size: 26px;
  z-index: 1;
`;
