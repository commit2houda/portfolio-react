// import { Component } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactC.css";
// import Aos from "aos";
// import "aos/dist/aos.css";

const ContactC = () => {
  /*  componentDidMount() {
    Aos.init({ duration: 2000 });
  } */
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contactMain" id="contactS" /* data-aos="flip-left" */>
      <div className="contactTitles">
        <h5>03. What's Next ?</h5>
        <h1>Get In Touch</h1>
        <p>
          Although I'm not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </p>
      </div>
      <form autocomplete="off" ref={form} onSubmit={sendEmail}>
        <div className="namendEmail">
          <input type="text" placeholder="Name" id="name" name="from_name" />
          <input type="email" placeholder="email" id="email" />
        </div>
        <input type="text" placeholder="Subject" id="subject" />
        <textarea type="text" placeholder="Message" id="msg" name="message" />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactC;
