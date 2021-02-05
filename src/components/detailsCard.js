import React, { Fragment } from "react";

class DetailsCard extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (    
       <div class="listing">  
        <div class="imageContainer">
            <img class="stockImage" src={this.props.imageSrc}/>
        </div>
        <div class="details">
            <h4>{this.props.saberName}</h4>
        <div class="details">
        <a href="/cart"    class="listingButton btn btn-primary">Add to Cart</a>
        </div>
       </div>
    </div>
      );
    }
  }
export default DetailsCard;