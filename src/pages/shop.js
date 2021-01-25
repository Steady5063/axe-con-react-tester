import React, { Component } from "react";

class FocusManage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 tabIndex="-1">Focus Management</h1>
        <h2>Manual Managing Focus</h2>
        <p>
          This shows the use of manually setting focus for a rendered component
          using <b>componentDidMount()</b>
        </p>
      </div>
    );
  }
}
export default FocusManage;
