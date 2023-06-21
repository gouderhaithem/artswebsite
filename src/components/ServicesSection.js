import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import { About, Descreption, Image } from "../styles";
import styled from "styled-components";
//import { useScroll } from "./useScroll";
import { reveal } from "../animation";
import { AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServicesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });
  return (
    <AnimatePresence>
      <Services
        ref={ref}
        variants={reveal}
        initial={inView ? "show" : "hidden"}
        animate={inView ? "show" : "hidden"}
      >
        <Descreption>
          <h2>
            High <span>quality </span>sevices
          </h2>
          <Cards>
            <Card>
              <div className="icon">
                <img src={clock} alt="" />
                <h3>Efficient </h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={teamwork} alt="" />
                <h3>Team Work </h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={diaphragm} alt="" />
                <h3>Diaphragm</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={money} alt="" />
                <h3>Affordable </h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
          </Cards>
        </Descreption>
        <Image>
          <img src={home2} alt="" />
        </Image>
      </Services>
    </AnimatePresence>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 969px) {
    justify-content: center;
    padding-left: 6rem;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      padding: 1rem;
      background: white;
      color: black;
    }
  }
`;

export default ServicesSection;
