import { Component } from "react";
import "./Projects.css";
import Titles from "../Titles/Titles";
import ProjectCard from "../ProjectCard/ProjectCard";
import ReverseCard from "../ReverseCard/ReverseCard";
import calculatrice from "../../images/calculatrice.PNG";
import Appvilla from "../../images/Appvilla.PNG";

class Projects extends Component {
  render() {
    return (
      <div className="projectsMain">
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
            />
            <ReverseCard
              img={calculatrice}
              projectitle="Calculator"
              paragraph="Building a web calculator is a great project, especially if you have just started learning JavaScript. It is quite simple for people of any skill level. This project covers the interactions with UI and key JavaScript methods."
              fL="Html"
              sL="Css"
              tL="Javascript"
            />
            <ProjectCard
              img={calculatrice}
              projectitle="Calculator"
              paragraph="Building a web calculator is a great project, especially if you have just started learning JavaScript. It is quite simple for people of any skill level. This project covers the interactions with UI and key JavaScript methods."
              fL="Html"
              sL="Css"
              tL="Javascript"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Projects;
