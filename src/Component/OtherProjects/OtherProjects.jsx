import { Component } from "react";
import OtherCard from "../OtherCard/OtherCard";
import "./OtherProjects.css";

class OtherProjects extends Component {
  render() {
    return (
      <div className="otherProjectsMain">
        <h1>Other Projects</h1>
        <div className="flexOther">
          <div className="otherF">
            <OtherCard
              otherTitle="Realtime TODO"
              otherP="Web application to add, edit, delete and assign to another person in real-time. My participation came out in one of his videos Minute: 29:35 "
              FO="Next.js"
              SO="MaterialUI"
              TO="Firebase"
            />
            <OtherCard
              otherTitle="Realtime TODO"
              otherP="Web application to add, edit, delete and assign to another person in real-time. My participation came out in one of his videos Minute: 29:35 "
              FO="Next.js"
              SO="MaterialUI"
              TO="Firebase"
            />
          </div>
          <div className="otherS">
            <OtherCard
              otherTitle="Realtime TODO"
              otherP="Web application to add, edit, delete and assign to another person in real-time. My participation came out in one of his videos Minute: 29:35 "
              FO="Next.js"
              SO="MaterialUI"
              TO="Firebase"
            />
            <OtherCard
              otherTitle="Realtime TODO"
              otherP="Web application to add, edit, delete and assign to another person in real-time. My participation came out in one of his videos Minute: 29:35 "
              FO="Next.js"
              SO="MaterialUI"
              TO="Firebase"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default OtherProjects;
