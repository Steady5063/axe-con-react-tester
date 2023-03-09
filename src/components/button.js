import React from "react";

class SaberButton extends React.Component {
    constructor(props) {
      super(props);
    }
  //TODO: ADD CSS FOR DIFFERENT BUTTON TYPES
    render() {
      return (    
        <div>
        <button aria-describedby={this.props.buttonType} className={this.props.buttonType}>{this.props.buttonText}</button>
        <span>Helper text</span>
        </div>
      );
    }
  }
export default SaberButton;
