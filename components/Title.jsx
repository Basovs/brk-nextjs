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
  padding: 50px 0;
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
  color: #ebebeb;
  font-size: 44px;
  line-height: 1px;
  inline-size: 350px;
  margin: -4px 0 0 -175px;
  @media screen and (min-width: 414px) {
    font-size: 46px;
    inline-size: 400px;
    margin: 1px 0 0 -200px;
  }
  @media screen and (min-width: 500px) {
    font-size: 56px;
    inline-size: 450px;
    margin: -2px 0 0 -225px;
  }
  @media screen and (min-width: 700px) {
    font-size: 66px;
    inline-size: 550px;
    margin: -9px 0 0 -275px;
  }
  @media screen and (min-width: 900px) {
    font-size: 76px;
    inline-size: 650px;
    margin: -14px 0 0 -325px;
  }
  @media screen and (min-width: 1100px) {
    font-size: 100px;
    inline-size: 800px;
    margin: -20px 0 0 -400px;
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
