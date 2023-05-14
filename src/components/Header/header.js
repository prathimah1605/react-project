import React from "react";
import { Link } from "react-scroll";
// import App from "../../App";
import "./header.css";
const Header = () => {
    return (
        <div className="header"> 
            <div className="header_left">
                <h1> 
                    Devolop<span>er</span>
                </h1>
            </div>
            <div className="header_right">
              <Link to="about" smooth={true} duration={500}>
                <h4>
                    About Me
                </h4>
              </Link>
              <Link to="skills" smooth={true} duration={500}>
                <h4>
                    Skills
                </h4>
              </Link>
              <Link to="Project" smooth={true} duration={500}>
                <h4>
                    Projects 
                </h4>
              </Link>
              <Link to="Experience" smooth={true} duration={500}>
                <h4>
                    Experience 
                </h4>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <h4>
                    contact
                </h4>
              </Link>
              <h4 className="header_rightbutton"> Join with me </h4>
            </div>
        </div>
    )
}
export default Header;