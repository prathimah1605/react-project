import React from "react";
import {Link} from "react-scroll"
import "./Topcontent.css";

const Topcontent = () => {
    return (
        <div className="topcontent">
            <div className="topcontent_container">
                <h1> Paidi Prathima </h1>
                <p>  Frontend Devoloper  </p>
                <a href="www.google.com">
                    <button className="topcontent_downloadbutton">Download CV </button>
                </a>
                <Link to="Projects" smooth={true} duration={500}>
                    <button className="topcontent_workbutton">My Work</button>
                </Link> 

            </div>
        </div>
    )
}
export default Topcontent;