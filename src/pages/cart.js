import React, { Component } from "react";


class Semantic extends Component {
  handleClick = () => {
    alert("This worked!");
  };
  render() {
    return (
      <div>
        <h1>Keyboard Navigation</h1>
        <h2>Extra Divs Added</h2>
      </div>
    );
  }
}

export default Semantic;
