import styled from "styled-components";

const InfoBar = () => {
  return (
    <Component>
      <Wrapper>
        <Card>
          <img src="/phoneIcon.svg" alt="Call us" />
          <Article>
            <h2>+371 2 777 777</h2>
            <p>P-PK 08:00-17:00</p>
          </Article>
        </Card>
        <Card>
          <img src="/mapIcon.svg" alt="Find us" />
          <Article>
            <h2>Madonas iela 27</h2>
            <p>Jēkabpils</p>
          </Article>
        </Card>
        <Card>
          <img src="/mailIcon.svg" alt="Mail us" />
          <Article>
            <h2>info@brk.lv</h2>
            <p>Raksti mums</p>
          </Article>
        </Card>
        <Card>
          <img src="/facebookIcon.svg" alt="" />
          <Article>
            <h2>Facebook</h2>
            <p>Seko mums</p>
          </Article>
        </Card>
      </Wrapper>
    </Component>
  );
};

export default InfoBar;

const Component = styled.section`
  background-color: #f7f7f7;
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const Wrapper = styled.div`
  display: grid;
  row-gap: 30px;
  grid-template-columns: repeat(1, minmax(250px, 267.5px));
  justify-content: center;
  max-inline-size: 1110px;
  padding: 0 20px;

  @media screen and (min-width: 414px) {
    inline-size: 100%;
  }

  @media screen and (min-width: 575px) {
    grid-template-columns: repeat(2, minmax(250px, 267.5px));
    justify-content: space-around;
  }

  @media screen and (min-width: 1110px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 267.5px));
  }
`;
const Card = styled.div`
  display: flex;

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
