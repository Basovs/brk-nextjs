import styled from "styled-components";
import Link from "next/link";

const Btn = props => {
  return (
    <Link href={props.href}>
      <A>{props.children}</A>
    </Link>
  );
};

export default Btn;

const A = styled.a`
  padding: 16px 40px;
  background-color: #be1769;
  color: #fff;
  border: solid 2px #be1769;
  cursor: pointer;
  :hover {
    background-color: #fff;
    color: #be1769;
  }
`;
