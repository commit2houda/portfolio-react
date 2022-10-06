import { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="logo"></div>
        <ul>
          <li>
            <a href="#">
              <span>01.</span>&nbsp; Home
            </a>
          </li>
          <li>
            <a href="#">
              <span>02.</span>&nbsp; About
            </a>
          </li>
          <li>
            <a href="#">
              <span>03.</span>&nbsp; Projects
            </a>
          </li>
          {/*  <li>
            <a href="#">
              <span>03.</span>&nbsp; Blogs
            </a>
          </li> */}
          <li>
            <a href="#">
              <span>04.</span>&nbsp; Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
