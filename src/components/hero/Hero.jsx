import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero__container">
      <div className="hero__container-wrapper">
        <motion.div
          className="hero__container-text"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={textVariants}>Paige Bendall</motion.h1>
          <motion.h2 variants={textVariants}>Web Developer</motion.h2>
          <motion.div
            className="hero__container-text_buttons"
            variants={textVariants}
          >
            <motion.button variants={textVariants}>
              Latest Projects
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img src="#" alt="scroller" variants={textVariants} />
        </motion.div>
      </div>
      <div className="hero__container-image">
        <img src="/src/assets/hero.png" alt="heroimage" />
      </div>
    </div>
  );
};

export default Hero;
