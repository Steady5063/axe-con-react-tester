import React, { Component } from "react";
import DocumentTitle from "react-document-title";
import TopHeading from "../components/topHeading"
class Details extends Component {
  render() {
    return (
      <DocumentTitle title="Title Fixes Page">
      <div class="main">
      <TopHeading headingText="Saber Details"/>
      <p>
        The galaxy has made it very difficult to purchase and buy the things you need for proper light saber completion. 
      </p>
      </div>
      </DocumentTitle>
    );
  }


}
export default Details;
