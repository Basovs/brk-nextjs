import Head from "next/head";
import styled from "styled-components";
import Layout from "../components/Layout";

const Index = () => {
  return (
    <App>
      <Head>
        <title>BsRK</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout />
    </App>
  );
};

export default Index;

const App = styled.div`
  background-color: red;
  height: 100vh;
`;
