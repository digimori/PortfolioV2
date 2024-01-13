import { useRef } from "react";
import "./education.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChilden: 0.1,
    },
  },
};

const Education = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-50px" });

  return (
    <motion.div
      className="education__container"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="education__container-text" variants={variants}>
        <p>
          Want my education and working background?
          <br /> This section is for you.
        </p>
        <hr />
      </motion.div>
      <motion.div className="education__container-title" variants={variants}>
        <div className="education__container-title_text">
          <h2>
            <motion.b whileHover={{ color: "orange" }}>Education </motion.b> and
          </h2>
        </div>
        <div className="education__container-title_text" variants={variants}>
          <h2>
            <motion.b whileHover={{ color: "orange" }}>Experience</motion.b>.
          </h2>
        </div>
      </motion.div>
      <motion.div className="education__container-list" variants={variants}>
        <motion.div
          className="education__container-list_content"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Scottish Tech Army</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            quam vitae eos labore odio incidunt similique dicta possimus id. Hic
            nesciunt quos commodi non voluptatibus ratione temporibus sint animi
            at.
          </p>
        </motion.div>
        <motion.div
          className="education__container-list_content"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Code Institute</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            quam vitae eos labore odio incidunt similique dicta possimus id. Hic
            nesciunt quos commodi non voluptatibus ratione temporibus sint animi
            at.
          </p>
        </motion.div>
        <motion.div
          className="education__container-list_content"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Scottish Tech Army</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            quam vitae eos labore odio incidunt similique dicta possimus id. Hic
            nesciunt quos commodi non voluptatibus ratione temporibus sint animi
            at.
          </p>
        </motion.div>
        <motion.div
          className="education__container-list_content"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Code Institute</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            quam vitae eos labore odio incidunt similique dicta possimus id. Hic
            nesciunt quos commodi non voluptatibus ratione temporibus sint animi
            at.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Education;
