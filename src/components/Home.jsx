import React from "react";
import "../css/Home.css";
import Typewriter from "typewriter-effect";
import { IoIosArrowDown } from "react-icons/io";
import { Link, animateScroll as scroll } from "react-scroll";



function Home() {
  return (
    <div id="home">
      <div className="wrapper">
        <div className="container-wrapper">
          {/* <div className="items">
            <img
              width="450px"
              src="https://scontent.fbkk9-2.fna.fbcdn.net/v/t39.30808-6/320808866_678725373713402_7387904232270117778_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHxLIndgprYOJgZyVYd-9ePdqmW2L3N6bV2qZbYvc3ptR1bieu4QWUB6yoivH43AhdnN9iPGJ2eL1-fYZ2WH_Wf&_nc_ohc=r5v32JLka1AAX9uCxu9&_nc_ht=scontent.fbkk9-2.fna&oh=00_AfADLTiK3IxApe7vjajgXcCaEmozk7Q1ekXgkrPQwPVu-g&oe=649007E6"
              alt="avatar"
            />
          </div> */}
          <div className="items">
            <div className="text-intro">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("HELLO, WORLD")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("สวัสดีครับ :)")
                    .pauseFor(1000)
                    .start();
                }}
              />
              <div id="name" className="text-intro">NONTASAB SIANGCHIN</div>              
            </div>
          </div>
          <div className="items">
            <Link to="About" spy={true} smooth={true} offset={-80} duration={500}>               
              <IoIosArrowDown className="button-down" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
