import { Component } from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";
import Aos from "aos";
import "aos/dist/aos.css";

class Navbar extends Component {
  componentDidMount() {
    Aos.init({ duration: 2000 });
  }
  render() {
    return (
      <nav>
        <div className="logo" data-aos="fade-up">
          <img src={logo} alt="logo" className="imgLogo" />
        </div>
        <ul data-aos="fade-up" data-aos-delay="2250">
          <li>
            <a href="#firstS">
              <span>01.</span>&nbsp; Home
            </a>
          </li>
          <li>
            <a href="#secondS">
              <span>02.</span>&nbsp; About
            </a>
          </li>
          <li>
            <a href="#thirdS">
              <span>03.</span>&nbsp; Projects
            </a>
          </li>
          {/*  <li>
            <a href="#">
              <span>03.</span>&nbsp; Blogs
            </a>
          </li> */}
          <li>
            <a href="#contactS">
              <span>04.</span>&nbsp; Contact
            </a>
          </li>
          <li>
            <a
              href="https://houdaelbaidak6.github.io/Cv---Resume/"
              target="_blank"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <button id="resumeBtn">Resume</button>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
