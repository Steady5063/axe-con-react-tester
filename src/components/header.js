import React from "react";
class Header extends React.Component {

  componentDidMount() {
    if(window.location.href.indexOf("Cart") > -1){
      document.querySelector("#cart").classList.add("active")
    }
    if(window.location.href.indexOf("Home") > -1){
      document.querySelector("#home").classList.add("active")
    }
    if(window.location.href.indexOf("Shop") > -1){
      document.querySelector("#shop").classList.add("active")
    }
    if(window.location.href.indexOf("About") > -1){
      document.querySelector("#about").classList.add("active")
    }
  }

  render() {
    return (
      <header className="navbar">
        <ul className="horizontal">
          <li>
            <a id="home" href="/Home">
              Home
            </a>
          </li>
          <li>
            <a id="shop" href="/Shop">Shop</a>
          </li>
          <li>
            <a id="cart" href="/Cart"> Cart</a>
          </li>
          <li>
            <a id="about" href="/About">About</a>
          </li>
        </ul>
      </header>
    );
  }
}
export default Header;
