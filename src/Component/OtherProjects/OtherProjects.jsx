import { Component } from "react";
import OtherCard from "../OtherCard/OtherCard";
import "./OtherProjects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";

class OtherProjects extends Component {
  componentDidMount() {
    Aos.init({ duration: 3000 });
  }
  render() {
    return (
      <div className="otherProjectsMain" id="fourthS" data-aos="flip-right">
        <h1>Other Projects</h1>
        <div className="flexOther">
          <div className="otherF">
            <OtherCard
              otherTitle="SoundBoard"
              otherP="Sound board project is an audio-based web project. It is coded in HTML5, CSS, and JavaScript. This project deals with playing sound on button click."
              FO="Html"
              SO="Css"
              TO="Javascript"
              link="https://github.com/HoudaElbaidak6/soundboard"
              linkb="https://houdaelbaidak6.github.io/soundboard/"
              icona={faGithub}
              iconb={faArrowUpRightFromSquare}
              className="card1"
            />
            <OtherCard
              otherTitle="Hover Board"
              otherP="Hoverboard is a web-based project. The hoverboard project has a cool effect painting on a box by hovering over it.It has a very cool user interface that is easy to interact with."
              FO="Html"
              SO="Css"
              TO="Javascript"
              link="https://github.com/HoudaElbaidak6/hoverboard"
              linkb="https://houdaelbaidak6.github.io/hoverboard/"
              icona={faGithub}
              iconb={faArrowUpRightFromSquare}
              className="card1"
            />
          </div>
          <div className="otherS">
            <OtherCard
              otherTitle="Quote Generator "
              otherP="This application fetches a new random quote from an API, upon the click of a button, and displays it in the browser. "
              FO="Html"
              SO="Css"
              TO="Javascript"
              link="https://github.com/HoudaElbaidak6/Quote-generator"
              linkb="https://houdaelbaidak6.github.io/Quote-generator/"
              icona={faGithub}
              iconb={faArrowUpRightFromSquare}
              className="card1"
            />
            <OtherCard
              otherTitle="Github Profiles"
              otherP="This project is a fully functional project that displays GitHub user profiles. This project lets you search GitHub users. The project is simple and easy to use. The project has a box layout search bar where you can enter the name of the users in GitHub."
              FO="Html"
              SO="Css"
              TO="Javascript"
              link="https://github.com/HoudaElbaidak6/github-profiles"
              linkb="https://houdaelbaidak6.github.io/github-profiles/"
              icona={faGithub}
              iconb={faArrowUpRightFromSquare}
              className="card1"
            />
          </div>
        </div>
        <button className="projectBtn">
          <a
            href="https://github.com/HoudaElbaidak6?tab=repositories"
            target="_blank"
          >
            More Projects
          </a>
        </button>
      </div>
    );
  }
}
export default OtherProjects;
