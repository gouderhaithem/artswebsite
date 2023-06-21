import React from "react";
import home1 from "../img/home1.png";
import mohali from "../img/mohali.jpg"
import { About, Hide, Image, Descreption } from "../styles";
import { Link } from "react-router-dom";
//framer motion
import { motion } from "framer-motion";
import { fade, titleAnim, photoAnim } from "../animation";
import Wave from "./Wave";

//Styled
//import styled from "styled-components";

const AboutSection = () => {
  return (
    <About>
      <Descreption>
        <div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills to help you achieve it.
        </motion.p>
        <Link to="/contact-us">
          <motion.button variants={fade}>Contact Us</motion.button>
        </Link>
      </Descreption>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="camera guy" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
