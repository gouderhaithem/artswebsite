import React from "react";
import styled from "styled-components";
//Animation
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
const ContactUs = () => {
  return (
    <ContactStyle
      style={{ background: "#fff" }}
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
        <div className="line2"></div>
      </Title>
      <Hide>
        <Social variants={titleAnim}>
          <Circle />
          <h2>Socials</h2>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnim}>
          <Circle />
          <h2>Send us a message</h2>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnim}>
          <Circle />
          <h2>Drop an email.</h2>
        </Social>
      </Hide>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;

  @media (max-width: 969px) {
    padding: 1rem;
    font-size: 0.5rem;
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 969px) {
    margin-top: 5rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    cursor: pointer;
    margin: 2rem;
  }
  @media (max-width: 1500px) {
    h2 {
      margin: 1rem 0rem;
      font-size: 2.5rem;
    }
  }
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  background: #353535;
  @media (max-width: 1500px) {
    //  display: none;
  }
  @media (max-width: 1553px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    margin-right: 20px;
  }
`;
export default ContactUs;
