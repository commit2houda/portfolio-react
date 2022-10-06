import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./Component/Navbar/Navbar";
import FirstSection from "./Component/FirstSection/FirstSection";
import SocialMedia from "./Component/SocialMedia/SocialMedia";
import Container from "./Component/Container/Container";
import Titles from "./Component/Titles/Titles";
import SecondS from "./Component/SecondS/SecondS";
import ProjectCard from "./Component/ProjectCard/ProjectCard";
import Projects from "./Component/Projects/Projects";
import OtherCard from "./Component/OtherCard/OtherCard";
import OtherProjects from "./Component/OtherProjects/OtherProjects";
import ContactC from "./Component/ContactC/ContactC";
import Footer from "./Component/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <SocialMedia />
    <Container />
    <SecondS />
    <Projects />
    <OtherProjects />
    <ContactC />
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
