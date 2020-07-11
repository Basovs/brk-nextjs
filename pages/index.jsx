import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import InfoBar from "../components/InfoBar";
import PhilosophySection from "../components/philosophy";
import OfferSection from "../components/OfferSection";
import FindUs from "../components/FindUs";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import HumburgerNav from "../components/HumburgerNav";

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
        <HumburgerNav />
        <Hero />
        <InfoBar />
        <PhilosophySection />
        <OfferSection />
        <FindUs />
        <Partners />
        <Footer />
      </Layout>
    </>
  );
};

export default Index;
