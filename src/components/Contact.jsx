import React, { useRef } from "react";
import "../css/Contact.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_63crr5h",
        "template_7u654u7",
        form.current,
        "qx5OvTLbY-R-RLEpJ"
      )
      .then(
        (result) => {
          console.log(result.text + "sending");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const handleSubmit = () => {
    const button = document.getElementById("tellme-button");
    const subject = document.forms["Form"]["sender-subject"].value; // pull value from form field
    const name = document.forms["Form"]["sender-name"].value; // pull value from form field
    const email = document.forms["Form"]["sender-email"].value; // pull value from form field
    const message = document.forms["Form"]["sender-message"].value; // pull value from form field
    if (
      button.value === "Tell me" && // Check ค่า must not null
      subject != "" && // Check ค่า must not null
      email != "" && // Check ค่า must not null
      message != "" // Check ค่า must not null
    ) {
      button.innerHTML =
        '<i class="fa fa-spinner fa-spin" style="font-size:24px;color:var(--lightblue)"></i>';
      setInterval((e) => {
        button.innerText = "Thank you for contact me.";
      }, 5000);
    } else {
      button.value = "Tell me";
    }
  };

  return (
    <div id="Contact">
      <div className="contact-container">
        <div className="contact-wrapper">
          <p className="text-head">Contact me</p>
          <a href="tel:+66845199514">
            <br></br>
            <BsFillTelephoneFill size={20}></BsFillTelephoneFill> +66845199514
          </a>
          <a href="mailto:nontasabs@gmail.com">
            <MdEmail size={20}></MdEmail> nontasabs@gmail.com
          </a>
        </div>
        <hr style={{ color: "gray", height: "250px" }}></hr>
        <div className="contact-wrapper">
          <div className="sendmessage-box">
            <form ref={form} onSubmit={sendEmail} name="Form">
              <label className="input-text">Subject</label>
              <br></br>
              <input
                type="text"
                name="sender-subject"
                className="input"
                required
              />
              <br></br>
              <label className="input-text">Your name</label>
              <br></br>
              <input
                type="text"
                name="sender-name"
                className="input"
                required
              />
              <br></br>
              <label className="input-text">Email</label>
              <br></br>
              <input
                type="email"
                name="sender-email"
                className="input"
                required
              />
              <br></br>
              <label className="input-text">Tell me something</label>
              <br></br>
              <textarea
                type="text"
                rows="10"
                cols="30"
                name="sender-message"
                className="input"
                required
              ></textarea>
              <br></br>
              <button
                type="submit"
                id="tellme-button"
                value="Tell me"
                onClick={handleSubmit}
              >
                Tell me
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
