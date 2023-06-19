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
      <div className="container-education">
        <div className="education-wrapper">
          <div className="education-card">
            <p className="education-head">High School</p>
            <hr style={{margin:"20px 0", height:"8px", backgroundColor:"green", border:"5px dashed white"}}></hr>
            <p className="education-text">
              English-Mathematics Program
              <br></br>
              Grade 7 - Grade 12
            </p>
          </div>
          <div className="education-card">
            <p className="education-head">University</p>
            <hr style={{margin:"20px 0", height:"8px", backgroundColor:"orange", border:"5px dashed white"}}></hr>
            <p className="education-text">
              Bachelor of Science(Information Technology)
              <br></br>
              Years 1 - Years 4
              <br></br>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
