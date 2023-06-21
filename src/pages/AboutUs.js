import React from "react";
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServicesSection from "../components/ServicesSection";
//animation 
import { motion } from "framer-motion";
import {pageAnimation} from '../animation'
import ScrollTop from "../components/ScrollTop";
const AboutUs = () => {
  return (
    <motion.div variants={pageAnimation} exit="exit" initial="hidden" animate ="show">
      <AboutSection />
      <ServicesSection /> 
      <FaqSection/>
      <ScrollTop/>
    </motion.div>

  );
};
export default AboutUs;
