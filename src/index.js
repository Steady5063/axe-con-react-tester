import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.css";
import Footer from "./components/footer";
import Header from "./components/header";
import shop from "./pages/shop";
import details from "./pages/details";
import cart from "./pages/cart";
import about from "./pages/about";
import home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
          <Route exact path="/home" component={home} />
          <Route path="/shop" component={shop} />
          <Route path="/cart" component={cart} />
          <Route path="/details" component={details} />
          <Route path="/about" component={about} />
      </Router>
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
