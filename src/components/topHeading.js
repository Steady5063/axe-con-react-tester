import React, { Fragment } from "react";
import logo from '../assets/lightsaber.png';
class TopHeading extends React.Component {
    constructor(props) {
      super(props);
    }
  //TODO: ADD CSS FOR DIFFERENT BUTTON TYPES
    render() {
      return (    
          <Fragment>
               <h1 class="glow">{this.props.headingText}</h1>
               <img src={logo}/>
          </Fragment>
       
      );
    }
  }
export default TopHeading;
