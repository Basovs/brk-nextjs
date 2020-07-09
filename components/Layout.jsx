import styled from "styled-components";
import Nav from "./Nav";

const Layout = props => {
  return (
    <Component>
      <Nav />
      <main>{props.children}</main>

      <style jsx global>{`
        html,
        body {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }
        a {
          text-decoration: none;
          color: #000;
        }
      `}</style>
    </Component>
  );
};

export default Layout;

const Component = styled.div`
  inline-size: 100%;
  min-block-size: 100vh;
`;
