import React, { Fragment } from "react";
//No alt text for image
class Listing extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (    
       <div className="listing">
        <div className="imageContainer">
            <img className="stockImage" src={this.props.imageSrc}/>
        </div>
        <div className="details">
            <h4 data-testid="saberName">{this.props.saberName}</h4>
            <p>{this.props.saberDetails}</p>
        </div>
        <div className="details">
            <a href={this.props.link}  id="moreDets" className="listingButton btn btn-primary">More Details</a>
            <a href="/cart" id="addCart" className="listingButton btn btn-primary">Add to Cart</a>
            </div>
       </div>
      );
    }
  }
export default Listing;