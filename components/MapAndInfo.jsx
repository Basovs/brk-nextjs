import styled from "styled-components";

const Partners = () => {
  return (
    <Component>
      <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2200.710621569114!2d25.86563811596062!3d56.52441058076674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e9b71c1dfc41f7%3A0x8458ac3cee577351!2sMadonas%20iela%2027%2C%20J%C4%93kabpils%2C%20LV-5202!5e0!3m2!1ssv!2slv!4v1594355737512!5m2!1ssv!2slv"></Map>
      <Street src="https://www.google.com/maps/embed?pb=!4v1594356807478!6m8!1m7!1svMxbGA4a0hNuj_QnJXdc8g!2m2!1d56.52441287499585!2d25.86619958079153!3f137.11245651302306!4f-3.4533758099605762!5f0.7820865974627469"></Street>
      <HoursContainer>
        <Hours>
          <h3>Darba laiks</h3>
          <p>Pirmdiena: 8:00-17:00</p>
          <p>Otradiena: 8:00-17:00</p>
          <p>Trešdiena: 8:00-17:00</p>
          <p>Ceturtdiena: 8:00-17:00</p>
          <p>Piektdiena: 8:00-17:00</p>
          <p>
            Sestdiena: <span>Slēgts</span>
          </p>
          <p>
            Svētdiena: <span>Slēgts</span>
          </p>
        </Hours>
      </HoursContainer>
    </Component>
  );
};

export default Partners;

const Component = styled.section`
  display: grid;
  width: 100%;
  grid-template-areas:
    "map"
    "street"
    "hours";
  grid-template-rows: auto auto auto;
  grid-template-columns: 1fr;
`;
const Map = styled.iframe`
  grid-area: map;
  border: solid 10px #ebebeb;
`;
const Street = styled.iframe`
  grid-area: street;
  border: solid 10px #ebebeb;
`;
const HoursContainer = styled.div`
  grid-area: hours;
  inline-size: 50%;
  border: solid 10px #ebebeb;
  padding: 20px 0;
  display: flex;
  justify-content: flex-end;
`;
const Hours = styled.div`
  color: #555555;
  padding: 20px;
  margin: 0 -150px 0 0;
  background-color: #fff;
  h3 {
    color: #222222;
    font-size: 26px;
    padding: 0 0 10px 0;
  }
  p {
    line-height: 28px;
  }
  span {
    color: #be1769;
  }
`;
