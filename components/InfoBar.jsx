import styled from "styled-components";

const InfoBar = () => {
  return (
    <Component>
      <Wrapper>
        <Card>
          <img src="./phoneIcon.svg" alt="Call us" />
          <Article>
            <h2>+371 2 777 777</h2>
            <p>P-PK 08:00-17:00</p>
          </Article>
        </Card>
        <Card>
          <img src="./mapIcon.svg" alt="Find us" />
          <Article>
            <h2>Madonas iela 27</h2>
            <p>Jēkabpils</p>
          </Article>
        </Card>
        <Card>
          <img src="mailIcon.svg" alt="Mail us" />
          <Article>
            <h2>info@brk.lv</h2>
            <p>Raksti mums</p>
          </Article>
        </Card>
        <Card>
          <img src="./facebookIcon.svg" alt="" />
        </Card>
      </Wrapper>
    </Component>
  );
};

export default InfoBar;

const Component = styled.section`
  block-size: 130px;
  background-color: #f7f7f7;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  inline-size: 100%;
  max-inline-size: 1110px;
`;
const Card = styled.div`
  display: flex;
  margin: 0 15px;

  img {
    margin: 0 30px 0 0;
  }
`;
const Article = styled.article`
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 18px;
    font-weight: bold;
  }
  p {
    font-size: 15px;
    color: #555555;
  }
`;
