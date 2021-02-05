import React, { Component } from "react";
import DataInput from "../components/datainput"
import TopHeading from "../components/topHeading"
import CartItem from "../components/cartItem"
class Cart extends Component {
  handleClick = () => {
    alert("Order sent");
  };
  render() {
    return (
      <div class="main">
      <TopHeading headingText="My Cart"/>
      <h5>Items in your cart:</h5><br/>
      <hr/>
      <CartItem saberName="Windu Saber" 
      imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp9YhBNQ4XN66hz6MWTvvimIAiK6Dr2BEsjA3raLs7f7u7XoPEZbm8AoqQgw&usqp=CAc"/>
      <hr/>
      <p class="total">Total: <b>150000 Credits</b></p>
      <div class="row">
        <DataInput inputLabel="First Name"/>
        <DataInput inputLabel="Last Name"/>
        <DataInput inputLabel="Credit Card Number"/>
        <DataInput inputLabel="CVV"/>
        <button>Continue</button>
      </div>
      </div>
    );
  }
}

export default Cart;
