import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import { FaInstagramSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="navbar__wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          Logo here
        </motion.span>
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
