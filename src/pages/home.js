import React from "react";
import TopHeading from "../components/topHeading"
import SaberButton from "../components/button";
const Home = () => (
  <div class="main">
    <TopHeading headingText="Light Saber Imporium"/>
    <p>
      The galaxy has made it very difficult to purchase and buy the things you need for proper light saber completion. 
    </p>
    <p>
      At the light saber imporium we pride ourselves in giving the galaxy a one stop shop where you can buy your handles, kyber crytals, and ignition switches all at a great price!
    </p>
    <SaberButton buttonType="primary" buttonText="View Sabers"></SaberButton>
    <SaberButton buttonType="secondary" buttonText="Deals of the Day"></SaberButton>
  </div>
);
export default Home;
