import { Component } from "react";
import "./ProjectCard.css";
import calculatrice from "../../images/calculatrice.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

class ProjectCard extends Component {
  render() {
    return (
      <div className="cardMain">
        <div className="cardimg">
          <img src={this.props.img} alt="calculatrice" className="img" />
        </div>
        <div className="cardcontent">
          <div className="cardTitles">
            <h6>Featured Project</h6>
            <h2>{this.props.projectitle}</h2>
          </div>
          <div className="cardCard">
            <p>
              {this.props.paragraph}
              &nbsp; <span>Go there</span>
            </p>
          </div>
          <div className="footerCard">
            <div className="techUsed">
              <span>{this.props.fL}</span> &nbsp; <span>{this.props.sL}</span>
              &nbsp;
              <span>{this.props.tL}</span>
            </div>
            <div className="iconCards">
              <a href={this.props.link} target="_blank" className="iconCard">
                <FontAwesomeIcon icon={this.props.icona} />
              </a>
              <a href={this.props.linkb} target="_blank" className="iconCard">
                <FontAwesomeIcon icon={this.props.iconb} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
