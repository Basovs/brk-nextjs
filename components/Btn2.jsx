import styled from "styled-components";
import Link from "next/link";

const Btn2 = props => {
  return (
    <Link href={props.href}>
      <A>{props.children}</A>
    </Link>
  );
};

export default Btn2;

const A = styled.a`
  padding: 16px 40px;
  background-color: transparent;
  color: #fff;
  border: solid 2px #fff;
  cursor: pointer;
  :hover {
    background-color: #fff;
    color: #be1769;
  }
`;
