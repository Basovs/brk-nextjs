import styled from "styled-components";
import Title from "./Title";
import Btn2 from "./Btn2";
import OfferBox from "./OfferBox";
// import Toggle from "./Toggle";

const OfferSection = () => {
  return (
    <Component>
      <Title
        text="PAPAKALPOJUMI"
        title="KO MĒS PIEDĀVĀJAM"
        shadow="PAKALPOJUMI"
      />
      <SelectOffer>
        <OfferBox
          title="Projektēšana"
          text="Sed a metus ante. Aenean id ipsum nec
          nisi sagittis rhoncus. Aenean est turpis,
          efficitur in euismod nec, molestie a
          metus. Donec vehicula rhoncus dui,
          non porta leo dictum vehicula. Morbi
          tristique mattis efficitur."
          btnText="Lasiit vairaak"
          backgroundImg="./first.jpg"
        />
        <OfferBox
          title="Dokumentācijas"
          text="Sed a metus ante. Aenean id ipsum nec
          nisi sagittis rhoncus. Aenean est turpis,
          efficitur in euismod nec, molestie a
          metus. Donec vehicula rhoncus dui,
          non porta leo dictum vehicula. Morbi
          tristique mattis efficitur."
          btnText="Lasiit vairaak"
          backgroundImg="./second.jpg"
        />
        <OfferBox
          title="Inženiertīklu
          projektēšana"
          text="Sed a metus ante. Aenean id ipsum nec
          nisi sagittis rhoncus. Aenean est turpis,
          efficitur in euismod nec, molestie a
          metus. Donec vehicula rhoncus dui,
          non porta leo dictum vehicula. Morbi
          tristique mattis efficitur."
          btnText="Lasiit vairaak"
          backgroundImg="./third.jpg"
        />
        <OfferBox
          title="Pakalpojums nr.4"
          text="Sed a metus ante. Aenean id ipsum nec
          nisi sagittis rhoncus. Aenean est turpis,
          efficitur in euismod nec, molestie a
          metus. Donec vehicula rhoncus dui,
          non porta leo dictum vehicula. Morbi
          tristique mattis efficitur."
          btnText="Lasiit vairaak"
          backgroundImg="./fourth.jpg"
        />
        <OfferBox
          title="Pakalpojums nr.5"
          text="Sed a metus ante. Aenean id ipsum nec
          nisi sagittis rhoncus. Aenean est turpis,
          efficitur in euismod nec, molestie a
          metus. Donec vehicula rhoncus dui,
          non porta leo dictum vehicula. Morbi
          tristique mattis efficitur."
          btnText="Lasiit vairaak"
          backgroundImg="./fifth.jpg"
        />
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
  @media screen and (min-width: 415px) {
    grid-template-columns: repeat(auto-fit, minmax(392px, 1fr));
  }
`;
