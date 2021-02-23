import React, { Fragment } from "react";
//Incorrect ARIA role, Image alt
class CartItem extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (    
       <div className="listing cartItem">  
        <div className="imageContainer">
            <img className="stockImage" src={this.props.imageSrc}/>
        </div>
        <div className="details" role="data">
            <h4>{this.props.saberName}</h4>
            <p>This light saber has been made by Mace Windu himself for protecting the republic</p>
            <p>Price: 15000 Credits</p>
            <a className="cartLink" href="/details">Details</a>
            <a className="cartLink" href="#">Buy again</a>
        <div className="details">
             <a href="#" className="listingButton btn btn-primary">Remove from cart</a>
        </div>
       </div>
    </div>
      );
    }
  }
export default CartItem;