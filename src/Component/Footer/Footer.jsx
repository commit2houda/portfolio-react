import { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="mainFooter">
        <div className="footerInside">
          <h5>Made with</h5>
          <h2>REACT JS</h2>
          <a href="https://brittanychiang.com" target="_blank">
            Adapted from the Brittany Chiang Portfolio
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
