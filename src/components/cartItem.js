import React, { Fragment } from "react";

class CartItem extends React.Component {
    constructor(props) {
      super(props);
    }
  //TODO: ADD CSS FOR DIFFERENT BUTTON TYPES
    render() {
      return (    
       <div class="listing cartItem">  
        <div class="imageContainer">
            <img class="stockImage" src={this.props.imageSrc}/>
        </div>
        <div class="details">
            <h4>{this.props.saberName}</h4>
            <p>This light saber has been made by Mace Windu himself for protecting the republic</p>
            <p>Price: 15000 Credits</p>
            <a class="cartLink" href="/details">Details</a>
            <a class="cartLink" href="#">Buy again</a>
        <div class="details">
             <a href="#" class="listingButton btn btn-primary">Remove from cart</a>
        </div>
       </div>
    </div>
      );
    }
  }
export default CartItem;