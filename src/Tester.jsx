import React, { useState } from "react";
import { motion } from "framer-motion";

const Tester = () => {
  const [open, setOpen] = useState(false);

  //Variants:
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div className="course">
      <motion.div
        className="box"
        transition={{ duration: 2 }}
        variants={variants}
        animate={open ? "visible" : "hidden"}
      ></motion.div>

      <button onClick={() => setOpen((prev) => !prev)}>Click me</button>
    </div>
  );
};

export default Tester;
