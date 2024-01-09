import React from "react";
import "./navbar.scss";
import { FaInstagramSquare, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}

      <div className="navbar__wrapper">
        <span>Logo here</span>
        <div className="navbar__social">
          <a href="#" alt="linkedin" className="">
            <FaLinkedin />
          </a>
          <a href="#" alt="instagram">
            <FaInstagramSquare />
          </a>
          <a href="#" alt="github">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
