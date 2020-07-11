import Link from "next/link";
import styled from "styled-components";

const MainNav = () => {
  return (
    <Component top>
      <Ul>
        <Li>
          <Link href="/">
            <a>SĀKUMLAPA</a>
          </Link>
        </Li>
        <Li />
        <Li>
          <Link href="/news">
            <a>JAUNUMI</a>
          </Link>
        </Li>
        <Li />
        <Li>
          <Link href="/philosophy">
            <a>FILAZOFIJA</a>
          </Link>
        </Li>
        <Li />
        <Li>
          <Link href="/offer">
            <a>PAKALPOJUMI</a>
          </Link>
        </Li>
        <Li />
        <Li>
          <Link href="/portfolio">
            <a>PORTFOLIO</a>
          </Link>
        </Li>
        <Li />
        <Li>
          <Link href="/contact">
            <a>KONTAKTI</a>
          </Link>
        </Li>
      </Ul>
    </Component>
  );
};

export default MainNav;

const Component = styled.nav`
  inline-size: 100%;
  max-inline-size: 980px;
  display: none;
  @media screen and (min-width: 1130px) {
    display: unset;
  }
`;

const Ul = styled.ul`
  list-style: none;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;
const Li = styled.li`
  :nth-child(even) {
    inline-size: 4px;
    block-size: 4px;
    background-color: #be1769;
  }
  a {
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    padding: 10px 10px;
  }
`;
