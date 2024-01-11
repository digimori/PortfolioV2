import React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const listVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const linkItems = ["Home", "Education", "Projects", "Contact"];

  return (
    <motion.div className="sidebar__links" variants={variants}>
      {linkItems.map((link) => (
        <motion.a
          href={`#${link}`}
          key={link}
          variants={listVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {link}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
