import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import focusContent from "../pages/focus";
import pageTitle from "../pages/pageTitle";
import semantic from "../pages/semantic";

const leftNav = () => (
  <Router>
    <div class="sidenav">
      <ul>
        <li>
          <Link to="/focus">Focus Management</Link>
        </li>
        <li>
          <Link to="/pageTitle">Page Title</Link>
        </li>
        <li>
          <Link to="/semantic">HTML Semantics</Link>
        </li>
      </ul>

      <Route exact path="/focus" component={focusContent} />
      <Route path="/pageTitle" component={pageTitle} />
      <Route path="/semantics" component={semantic} />
    </div>
  </Router>
);
export default leftNav;
