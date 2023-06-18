import React from "react";
import "../css/About.css";
import arprofile from "../assets/img/arprofile.png";
function About() {
  return (
    <div id="About">
      <div className="container-about">
        <div className="about-wrapper">
          <img className="trans" src={arprofile} alt="arprofile" onMo/>
          <p id="nameplate">NONTASAB SIANGCHIN</p>
        </div>
        <div className="about-wrapper">
          <p className="about-head">About me</p>
          <p className="about-des">
            Hi I'm James. I was born on the 9th of August, 1999. I'm graduated Information Technology major from King Mongkut's Institute of Technology Ladkrabang.
            I prefer to design and develop the website or mobile-app almost frontend. I am extremely
            motivated to constantly develop my skills and grow professionally.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
