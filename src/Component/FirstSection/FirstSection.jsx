import { Component, useEffect } from "react";
import "./FirstSection.css";
import Aos from "aos";
import "aos/dist/aos.css";

class FirstSection extends Component {
  componentDidMount() {
    Aos.init({ duration: 2000 });
  }
  render() {
    return (
      <div className="firstContent" data-aos="fade-up" data-aos-delay="2700">
        <h5>Welcome, I'm</h5>
        <h1>Houda Elbaidak</h1>
        <h1>I build web and mobile apps. </h1>
        <p>
          I'm a software developer based in Casablanca MA, specializing in
          building exceptional websites and mobile applications, and everything
          in between.
        </p>
        <button>
          <a href="mailto:houdaelbaidak6@gmail.com" target="_blank">
            Get in touch
          </a>
        </button>
      </div>
    );
  }
}

export default FirstSection;
