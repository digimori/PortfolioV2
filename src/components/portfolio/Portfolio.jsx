import "./portfolio.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "ProjectTitle1",
    img: "https://cdn.pixabay.com/photo/2024/01/08/17/54/wren-8496039_1280.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 2,
    title: "ProjectTitle2",
    img: "https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_1280.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 3,
    title: "ProjectTitle3",
    img: "https://cdn.pixabay.com/photo/2016/11/22/19/32/kingfisher-1850226_1280.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 4,
    title: "ProjectTitle4",
    img: "https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_1280.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="single__container">
        <div className="single__wrapper">
          <div className="single__image-container" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="single__text-container" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </motion.div>
        </div>
      </div>
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
      {projects.map((item, index) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
