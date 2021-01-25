import React, { Component } from "react";
import DocumentTitle from "react-document-title";
class PageTitle extends Component {
  render() {
    return (
      <DocumentTitle title="Title Fixes Page">
        <div>
          <h1>Page Title Fixes</h1>
          <h2>React-Document-Title</h2>
       </div>
      </DocumentTitle>
    );
  }


}
export default PageTitle;
