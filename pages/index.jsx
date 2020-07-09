import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import InfoBar from "../components/InfoBar";
import PhilosophySection from "../components/Philosophy";

const Index = () => {
  return (
    <>
      <Head>
        <title>BRKs</title>
        <link rel="icon" href="/favicon.ico" />
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
