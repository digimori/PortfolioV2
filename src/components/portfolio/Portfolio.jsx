import "./portfolio.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "ProjectTitle1",
    img: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae odio ducimus quam, nihil, quibusdam placeat quidem nemo autem reiciendis eveniet necessitatibus animi, at aliquam expedita inventore enim aliquid id maiores?",
  },
  {
    id: 2,
    title: "ProjectTitle2",
    img: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae odio ducimus quam, nihil, quibusdam placeat quidem nemo autem reiciendis eveniet necessitatibus animi, at aliquam expedita inventore enim aliquid id maiores?",
  },
  {
    id: 3,
    title: "ProjectTitle3",
    img: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae odio ducimus quam, nihil, quibusdam placeat quidem nemo autem reiciendis eveniet necessitatibus animi, at aliquam expedita inventore enim aliquid id maiores?",
  },
  {
    id: 4,
    title: "ProjectTitle4",
    img: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae odio ducimus quam, nihil, quibusdam placeat quidem nemo autem reiciendis eveniet necessitatibus animi, at aliquam expedita inventore enim aliquid id maiores?",
  },
];

const Single = ({ project }) => {
  return (
    <section>
      {project.title} {project.desc}
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio__container" ref={ref}>
      <div className="portfolio__progressbar">
        <h2>My Projects</h2>
        <motion.div
          className="portfolio__progressbar-animation"
          style={{ scaleX: scaleX }}
        ></motion.div>
      </div>
      {projects.map((project) => (
        <Single project={project} key={project.id} />
      ))}
    </div>
  );
};

export default Portfolio;
