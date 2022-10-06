import { Component } from "react";
import Titles from "../Titles/Titles";
import "./SecondS.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faPhp,
  faLaravel,
} from "@fortawesome/free-brands-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";

class SecondS extends Component {
  componentDidMount() {
    Aos.init({ duration: 2000 });
  }
  render() {
    return (
      <div
        className="pndAnimation"
        id="secondS"
        data-aos="fade-right"
        // data-aos-delay="3200"
      >
        <Titles number="01." title="About Me" />
        <div className="sContent">
          <p className="firstP">
            I am a Full-Stack Web Developer from Casablanca, Morocco. About
            three months ago is when I started my learning journey . I have
            always been a curious individual, which is why I'd love to
            collaborate and do some real-world projects in order to flourish my
            skills.The web can sometimes be the equivalent to magic, but I have
            the knowledge and patience required to make just about anything.
          </p>
          <p className="secondP">
            Here are a few technologies I've been working with recently :
          </p>
          <div className="tech">
            <div className="firstTech">
              <FontAwesomeIcon className="icon" icon={faHtml5} />
              <FontAwesomeIcon className="icon" icon={faCss3Alt} />
              <FontAwesomeIcon className="icon" icon={faJs} />
            </div>
            <div className="secondTech">
              <FontAwesomeIcon className="icon" icon={faReact} />
              <FontAwesomeIcon className="icon" icon={faPhp} />
              <FontAwesomeIcon className="icon" icon={faLaravel} />
            </div>
          </div>
        </div>
        <div className="anim"></div>
      </div>
    );
  }
}

export default SecondS;
