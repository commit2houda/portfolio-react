import { Component } from "react";
// import calculatrice from "../../images/calculatrice.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "./ReverseCard.css";
import Appvilla from "../../images/Appvilla.PNG";

class ReverseCard extends Component {
  render() {
    return (
      <div className="cardMain">
        <div className="cardcontent">
          <div className="cardTitlesR">
            <h6>Featured Project</h6>
            <h2>{this.props.projectitle}</h2>
          </div>
          <div className="cardCard">
            <p>
              {this.props.paragraph}
              &nbsp; <span>Go there</span>
            </p>
          </div>
          <div className="footerCardR">
            <div className="techUsed">
              <span>{this.props.fL}</span> &nbsp; <span>{this.props.sL}</span>{" "}
              &nbsp;
              <span>{this.props.tL}</span>
            </div>
            <div className="iconCards">
              <FontAwesomeIcon className="iconCard" icon={faGithub} />
              <FontAwesomeIcon
                className="iconCard"
                icon={faArrowUpRightFromSquare}
              />
            </div>
          </div>
        </div>
        <div className="cardimg">
          <img src={this.props.img} alt="calculatrice" className="img" />
        </div>
      </div>
    );
  }
}
export default ReverseCard;
