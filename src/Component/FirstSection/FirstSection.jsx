import { Component } from "react";
import "./FirstSection.css";

class FirstSection extends Component {
  render() {
    return (
      <div className="firstContent">
        <h5>Welcome, I'm</h5>
        <h1>Houda Elbaidak</h1>
        <h1>I build web and mobile apps. </h1>
        <p>
          I'm a software developer based in Buenos Aires AR, specializing in
          building exceptional websites and mobile applications, and everything
          in between.
        </p>
        <button>Get in touch</button>
      </div>
    );
  }
}

export default FirstSection;
