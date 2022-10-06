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
              otherTitle="Realtime TODO"
              otherP="Web application to add, edit, delete and assign to another person in real-time. My participation came out in one of his videos Minute: 29:35 "
              FO="Next.js"
              SO="MaterialUI"
              TO="Firebase"
              link="https://houdaelbaidak6.github.io/Calculatrice/"
              linkb="https://github.com/HoudaElbaidak6/Calculatrice"
              icona={faGithub}
              iconb={faArrowUpRightFromSquare}
            />
            <OtherCard
              otherTitle="Realtime TODO"
              otherP="Web application to add, edit, delete and assign to another person in real-time. My participation came out in one of his videos Minute: 29:35 "
              FO="Next.js"
              SO="MaterialUI"
              TO="Firebase"
              link="https://houdaelbaidak6.github.io/Calculatrice/"
              linkb="https://github.com/HoudaElbaidak6/Calculatrice"
              icona={faGithub}
              iconb={faArrowUpRightFromSquare}
            />
          </div>
          <div className="otherS">
            <OtherCard
              otherTitle="Realtime TODO"
              otherP="Web application to add, edit, delete and assign to another person in real-time. My participation came out in one of his videos Minute: 29:35 "
              FO="Next.js"
              SO="MaterialUI"
              TO="Firebase"
              link="https://houdaelbaidak6.github.io/Calculatrice/"
              linkb="https://github.com/HoudaElbaidak6/Calculatrice"
              icona={faGithub}
              iconb={faArrowUpRightFromSquare}
            />
            <OtherCard
              otherTitle="Realtime TODO"
              otherP="Web application to add, edit, delete and assign to another person in real-time. My participation came out in one of his videos Minute: 29:35 "
              FO="Next.js"
              SO="MaterialUI"
              TO="Firebase"
              link="https://houdaelbaidak6.github.io/Calculatrice/"
              linkb="https://github.com/HoudaElbaidak6/Calculatrice"
              icona={faGithub}
              iconb={faArrowUpRightFromSquare}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default OtherProjects;
