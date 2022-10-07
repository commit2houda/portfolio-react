import React, { useState, useEffect } from "react";
import ContactC from "../ContactC/ContactC";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import OtherProjects from "../OtherProjects/OtherProjects";
import Projects from "../Projects/Projects";
import SecondS from "../SecondS/SecondS";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./Loading.css";

const Loading = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="container">
      {loading ? (
        <div className="loader-container">
          {/* <div className="spinner"></div> */}
        </div>
      ) : (
        <>
          <Navbar />
          <SocialMedia />
          <Container />
          <SecondS />
          <Projects />
          <OtherProjects />
          <ContactC />
          <Footer />
        </>
      )}
    </div>
  );
};
export default Loading;
