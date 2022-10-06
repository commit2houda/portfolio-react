import { Component } from "react";
import "./Projects.css";
import Titles from "../Titles/Titles";
import ProjectCard from "../ProjectCard/ProjectCard";
import ReverseCard from "../ReverseCard/ReverseCard";
import calculatrice from "../../images/calculatrice.PNG";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";

class Projects extends Component {
  componentDidMount() {
    Aos.init({ duration: 3000 });
  }
  render() {
    return (
      <div className="projectsMain" id="thirdS" data-aos="fade-left">
        <div className="flex">
          <Titles number="02." title="Projects" />
          <div className="totalProjects">
            <ProjectCard
              img={calculatrice}
              projectitle="Calculator"
              paragraph="Building a web calculator is a great project, especially if you have just started learning JavaScript. It is quite simple for people of any skill level. This project covers the interactions with UI and key JavaScript methods."
              fL="Html"
              sL="Css"
              tL="Javascript"
              link="https://houdaelbaidak6.github.io/Calculatrice/"
              linkb="https://github.com/HoudaElbaidak6/Calculatrice"
              icona={faGithub}
              iconb={faArrowUpRightFromSquare}
            />
            <ReverseCard
              img={calculatrice}
              projectitle="Calculator"
              paragraph="Building a web calculator is a great project, especially if you have just started learning JavaScript. It is quite simple for people of any skill level. This project covers the interactions with UI and key JavaScript methods."
              fL="Html"
              sL="Css"
              tL="Javascript"
              link="https://houdaelbaidak6.github.io/Calculatrice/"
              linkb="https://github.com/HoudaElbaidak6/Calculatrice"
              icona={faGithub}
              iconb={faArrowUpRightFromSquare}
            />
            <ProjectCard
              img={calculatrice}
              projectitle="Calculator"
              paragraph="Building a web calculator is a great project, especially if you have just started learning JavaScript. It is quite simple for people of any skill level. This project covers the interactions with UI and key JavaScript methods."
              fL="Html"
              sL="Css"
              tL="Javascript"
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
export default Projects;
