import React, { Component } from "react";
import TopHeading from "../components/topHeading"
class About extends Component {
  render() {
    return (
      <div className="main">
      <TopHeading headingText="About"/>
      <p>
        The Saber Imporium is dedicated to bringing you only the finest in all the galaxy. 
      </p>

      <p>
      <img className="aboutImage" src="https://lumiere-a.akamaihd.net/v1/images/jedi-youngling_0ee1eee6.jpeg?region=114%2C0%2C1332%2C666" alt="Children of the force learning with master yoda"/>
        We were created to help give those who are force sensitive a chance to test out there abilities and to train even more. Whether you are a jedi or not. 
      </p>
      <p>
        If you are a Sith however, we will have a problem selling to you, as there can only be two of you at a time, and we would like to expand our market and just sell to one group. Thank you for your understanding. 
      </p>
      <p>We hope you enjoy your shopping experience!</p>
      </div>
    );
  }
}

export default About;
