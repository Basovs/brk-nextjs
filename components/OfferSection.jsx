import styled from "styled-components";
import Title from "./Title";

const OfferSection = () => {
  return (
    <Component>
      <Title
        text="PAPAKALPOJUMI"
        title="KO MĒS PIEDĀVĀJAM"
        shadow="PAKALPOJUMI"
      />
      <SelectOffer>
        <First>
          <h3>Projektēšana</h3>
        </First>
        <Second>
          <h3>Dokumentācijas</h3>
        </Second>
        <Third>
          <h3>Inženiertīklu projektēšana</h3>
        </Third>
        <Fourth>
          <h3>Pakalpojums nr.4</h3>
        </Fourth>
        <Fifth>
          <h3>Pakalpojums nr.5</h3>
        </Fifth>
      </SelectOffer>
    </Component>
  );
};

export default OfferSection;

const Component = styled.section`
  padding: 40px 0;
`;
const SelectOffer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
  justify-content: center;
`;
const First = styled.div`
  block-size: 384px;
  position: relative;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url("./first.jpg");
  background-color: #cccccc; /* Used if the image is unavailable */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  ::before {
    content: "";
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    inline-size: 100%;
    block-size: 100%;
    z-index: 1;
  }
  :hover {
    ::before {
      background-color: rgba(190, 23, 105, 0.9);
    }
  }
  h3 {
    color: #fff;
    z-index: 2;
    font-size: 32px;
    text-align: center;
  }
`;
const Second = styled.div`
  block-size: 384px;
  position: relative;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url("./second.jpg");
  background-color: #cccccc; /* Used if the image is unavailable */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */

  ::before {
    content: "";
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    inline-size: 100%;
    block-size: 100%;
    z-index: 1;
  }
  :hover {
    ::before {
      background-color: rgba(190, 23, 105, 0.9);
    }
  }
  h3 {
    color: #fff;
    z-index: 2;
    font-size: 32px;
    text-align: center;
  }
`;
const Third = styled.div`
  block-size: 384px;
  position: relative;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url("./third.jpg");
  background-color: #cccccc; /* Used if the image is unavailable */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */

  ::before {
    content: "";
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    inline-size: 100%;
    block-size: 100%;
    z-index: 1;
  }
  :hover {
    ::before {
      background-color: rgba(190, 23, 105, 0.9);
    }
  }
  h3 {
    color: #fff;
    z-index: 2;
    font-size: 32px;
    text-align: center;
  }
`;
const Fourth = styled.div`
  block-size: 384px;
  position: relative;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url("./fourth.jpg");
  background-color: #cccccc; /* Used if the image is unavailable */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */

  ::before {
    content: "";
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    inline-size: 100%;
    block-size: 100%;
    z-index: 1;
  }
  :hover {
    ::before {
      background-color: rgba(190, 23, 105, 0.9);
    }
  }
  h3 {
    color: #fff;
    z-index: 2;
    font-size: 32px;
    text-align: center;
  }
`;
const Fifth = styled.div`
  block-size: 384px;
  position: relative;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url("./fifth.jpg");
  background-color: #cccccc; /* Used if the image is unavailable */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  ::before {
    content: "";
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    inline-size: 100%;
    block-size: 100%;
    z-index: 1;
  }
  :hover {
    ::before {
      background-color: rgba(190, 23, 105, 0.9);
    }
  }
  h3 {
    color: #fff;
    z-index: 2;
    font-size: 32px;
    text-align: center;
  }
`;
