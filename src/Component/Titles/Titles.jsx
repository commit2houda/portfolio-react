import { Component } from "react";
import "./Titles.css";

class Titles extends Component {
  render() {
    return (
     <div className="flexndContent">
         <div className="justContent">
        <span>{this.props.number}</span>
        <h2>{this.props.title}</h2>
        <div className="line"></div>
        
      </div>
     </div>
    );
  }
}

export default Titles;
