import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./SocialMedia.css";

class SocialMedia extends Component {
  render() {
    return (
      <div className="mainicons">
        <ul className="icons">
          <li>
            <a href="https://github.com/HoudaElbaidak6" target="_blank" className="icon-size">
              <FontAwesomeIcon className="icon-size" icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/houda-el-baidak-4b66a4237/" target="_blank" className="icon-size">
              <FontAwesomeIcon className="icon-size" icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="#" className="icon-size">
              <FontAwesomeIcon className="icon-size" icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="#" className="icon-size">
              <FontAwesomeIcon className="icon-size" icon={faTwitter} />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SocialMedia;
