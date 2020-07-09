import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import InfoBar from "../components/InfoBar";
import PhilosophySection from "../components/philosophy";

const Index = () => {
  return (
    <>
      <Head>
        <title>BRK</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="Description" content="A BRK project - JBB" />
      </Head>

      <Layout>
        <Hero />
        <InfoBar />
        <PhilosophySection />
      </Layout>
    </>
  );
};

export default Index;
