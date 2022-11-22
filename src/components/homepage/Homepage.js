import React from "react";
import Layout from "../shared/Layout";
import Header from "../Header";
import LandingPage from "../Landing";
import MenuPage from "../Menu";
import ContactPage from "../Contact";



//const ContactPage = lazy(() => import( '../Contact'));
//const MenuPage = lazy(() => import('../Menu'));
//const LandingPage = lazy(() => import('../Landing'));

//const renderLoader = () => <p>Loading</p>;

const HomePage = () => {
  return (
    <>
      <Layout>
        <Header />
        <LandingPage />
        <MenuPage />
        <ContactPage />
      </Layout>
    </>
  );
};

export default HomePage;
