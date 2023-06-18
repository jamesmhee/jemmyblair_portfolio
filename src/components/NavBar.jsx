import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "../css/NavBar.css";
import { RiBearSmileFill } from "react-icons/ri";
import { IoIosArrowDropupCircle, IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar() {
  // Set Click
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobile = () => setClick(false)
  
  // Button to top
  const scrollToTop = () => scroll.scrollToTop();
  
  // reponsive nav
  const navReponsive = () => {
    const navBar = document.querySelector('#navbar-right')
    if(navBar.className === 'menu'){
      navBar.className += " reponsive";
    }else{
      navBar.className = 'menu';
    }
  }

  return (
    <>
      <div className="navbar">
        <Link to="home" spy={true} smooth={true} offset={-170} duration={500} onClick={closeMobile}>
          <p className="logo">
          JEMMY <RiBearSmileFill id="bear-logo" size={30}></RiBearSmileFill>
          </p></Link>
        <ul className="menu" id="navbar-right">
          <li>
            <Link to="home" spy={true} smooth={true} offset={-170} duration={500} onClick={closeMobile}>
            HOME
            </Link>
          </li>
          <li>
            <Link to="About" spy={true} smooth={true} offset={-200} duration={500} onClick={closeMobile}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="Works" spy={true} smooth={true} offset={-60} duration={500} onClick={closeMobile}>
              WORKS
            </Link>
          </li>
          <li>
            <Link to="Contact" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMobile}>
              CONTACT
            </Link>
          </li>
        </ul>                
          <li className="hamburger" onClick={navReponsive}><GiHamburgerMenu></GiHamburgerMenu></li>
      </div>
      <Link
        to=""
        spy={true}
        smooth={true}
        offset={0}
        duration={200}
        onClick={scrollToTop}
        >
        <IoIosArrowDropupCircle className="totop" />
      </Link>
    </>
  );
}

export default NavBar;
