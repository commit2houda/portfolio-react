import { Component } from "react";
import "./Container.css";
import FirstSection from "../FirstSection/FirstSection";

class Container extends Component {
  render() {
    return (
      <div className="mainContainer">
        <FirstSection />
      </div>
    );
  }
}
export default Container;
