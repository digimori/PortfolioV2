import React, { useState } from "react";
import { motion } from "framer-motion";

const Tester = () => {
  const [open, setOpen] = useState(false);

  //Variants:
  const variants = {
    visible: {
      opacity: 1,
      x: 100,
      transition: { staggerChilden: 0.2 },
    },
    hidden: { opacity: 0 },
  };
  const items = ["item1", "item2", "item3"];

  return (
    <div className="course">
      {/* <motion.div
        className="box"
        transition={{ duration: 2 }}
        variants={variants}
        animate={open ? "visible" : "hidden"}
  ></motion.div>

      <button onClick={() => setOpen((prev) => !prev)}>Click me</button>*/}

      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item, i) => (
          <motion.li variants={variants} key={item} custom={i}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Tester;
