import React, { Fragment } from "react";

class SaberButton extends React.Component {
    constructor(props) {
      super(props);
    } 
    render() {
      return (   
    <Fragment>
        <label id="dataInputLabel" >{this.props.inputLabel}</label> 
        <input type={this.props.inputType} aria-labelledby="dataInputLabel" className="form-control" id="dataInput"/>
    </Fragment> 
      );
    }
  }
export default SaberButton;
