import React from "react";
import {
  FaHome,
  FaQuestionCircle,
  FaVideo,
  FaBlog,
  FaChrome,
  FaImage,
  FaFileImage,
} from "react-icons/fa";
import { Link } from "react-router-dom";



function Navbar() {
  return (
    <nav className="navbar">
      {/* LEFT SIDE */}
      <div className="nav-left">
        <Link to="/" >
        <div className="logo">KlickPin</div>
      </Link>
        

        <ul className="hidden md:flex nav-links nav-links">
          <Link to="/how-to">
           <li>
            <FaQuestionCircle />
            How to
          </li>

          </Link>
         
          <Link to="/video-tutorial">
               <li>
            <FaVideo />
            Video Tutorial
          </li>
          </Link>
       
          <Link to="/blog">
           <li>
        
            Blog
          </li></Link>
         
        </ul>
      </div>

   
    </nav>
  );
}

export default Navbar;