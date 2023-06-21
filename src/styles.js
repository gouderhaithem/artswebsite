import { motion } from "framer-motion";
import styled from "styled-components";

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1553px) {
    font-size: 85%;
  }
  @media (max-width: 969px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;
export const Descreption = styled(motion.div)`
  flex: 1;
  z-index: 2;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 969px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;
export const Image = styled(motion.div)`
  flex: 1;
  z-index: 2;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
export const Hide = styled(motion.div)`
  overflow: hidden;
`;
