import React, { Fragment } from "react";

class Listing extends React.Component {
    constructor(props) {
      super(props);
    }
  //TODO: ADD CSS FOR DIFFERENT BUTTON TYPES
    render() {
      return (    
       <div class="listing">
        
        <div class="imageContainer">
            <img class="stockImage" src={this.props.imageSrc}/>
        </div>
        <div class="details">
            <h4>{this.props.saberName}</h4>
            <p>{this.props.saberDetails}</p>

        </div>
        <div class="details">
            <a href="/details" class="listingButton btn btn-primary">More Details</a>
            <a href="/cart"    class="listingButton btn btn-primary">Add to Cart</a>
            </div>
       </div>
      );
    }
  }
export default Listing;