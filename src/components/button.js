import React from "react";

class SaberButton extends React.Component {
    constructor(props) {
      super(props);
    }
  //TODO: ADD CSS FOR DIFFERENT BUTTON TYPES
    render() {
      return (    
        <button class={this.props.buttonType}>{this.props.buttonText}</button>
      );
    }
  }
export default SaberButton;
