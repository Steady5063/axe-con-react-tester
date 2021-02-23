import React, { Fragment } from "react";
import logo from '../assets/lightsaber.png';

class TopHeading extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (    
          <Fragment>
               <h1 className="glow">{this.props.headingText}</h1>
               <img src={logo}/>
          </Fragment>
       
      );
    }
  }
export default TopHeading;
