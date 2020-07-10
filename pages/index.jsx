import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import InfoBar from "../components/InfoBar";
import PhilosophySection from "../components/philosophy";
import OfferSection from "../components/OfferSection";
import FindUs from "../components/FindUs";

const Index = () => {
  return (
    <>
      <Head>
        <title>BRK</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Description about the company for SEO"
        ></meta>
      </Head>

      <Layout>
        <Hero />
        <InfoBar />
        <PhilosophySection />
        <OfferSection />
        <FindUs />
      </Layout>
    </>
  );
};

export default Index;
