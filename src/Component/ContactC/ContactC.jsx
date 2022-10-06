import { Component } from "react";
import "./ContactC.css";

class ContactC extends Component {
  render() {
    return (
      <div className="contactMain">
        <div className="contactTitles">
          <h5>03. What's Next ?</h5>
          <h1>Get In Touch</h1>
          <p>
            Although I'm not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I'll try my best to get back to you!
          </p>
        </div>
        <form>
          <div className="namendEmail">
            <input type="text" placeholder="Name" id="name" />
            <input type="email" placeholder="email"  id="email"/>
          </div>
          <input type="text" placeholder="Subject"  id="subject"/>
          <input type="text" placeholder="Message" id="msg" />
          <button type="submit">Send Message</button>
        </form>
      </div>
    );
  }
}
export default ContactC;
