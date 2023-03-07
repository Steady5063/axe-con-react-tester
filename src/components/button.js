import React from "react";

class SaberButton extends React.Component {
    constructor(props) {
      super(props);
    }
  //TODO: ADD CSS FOR DIFFERENT BUTTON TYPES
    render() {
      return (    
        <div>
        <button className={this.props.buttonType}>{this.props.buttonText}</button>
        </div>
      );
    }
  }
export default SaberButton;
