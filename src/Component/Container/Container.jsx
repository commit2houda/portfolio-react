import { Component } from "react";
import "./Container.css";
import FirstSection from "../FirstSection/FirstSection";

class Container extends Component {
  render() {
    return (
      <div className="mainContainer" id="firstS">
        <FirstSection />
      </div>
    );
  }
}
export default Container;
