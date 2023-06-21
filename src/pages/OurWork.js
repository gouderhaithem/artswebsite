import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//animation
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ScrollTop from "../components/ScrollTop";
import {
  pageAnimation,
  fade,
  slider,
  photoAnim,
  lineAnim,
  sliderContainer,
  reveal,
} from "../animation";

const OurWork = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.2,
  });
  return (
    <Work
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
      style={{ backgroundColor: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
        {" "}
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>

      <Movie>
        <motion.h2 variants={fade}>Our Work</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/our-work/the-athlete">
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="athle" />
          </Hide>
        </Link>
      </Movie>
      <AnimatePresence>
        <Movie
          ref={ref}
          variants={reveal}
          initial={inView ? "show" : "hidden"}
          animate={inView ? "show" : "hidden"}
          
        >
          <motion.h2>The racer</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/our-work/the-racer">
            <Hide>
              <motion.img variants={photoAnim} src={theracer} alt="athle" />
            </Hide>
          </Link>
        </Movie>
      </AnimatePresence>
       <AnimatePresence> 
      <Movie ref={ref2}
          variants={fade}
          initial={inView2 ? "show" : "hidden"}
          animate={inView2 ? "show" : "hidden"}>
        <motion.h2>Good Times</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/our-work/good-times">
          <Hide>
            <motion.img variants={photoAnim} src={goodtimes} alt="athle" />
          </Hide>
        </Link>
      </Movie>
      <ScrollTop/>
      </AnimatePresence>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  motion.h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 969px) {
    padding: 2rem 2rem;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

//frame animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
export default OurWork;
