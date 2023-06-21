import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { reveal } from "../animation";
import { useInView } from "react-intersection-observer";
const FaqSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });
  return (
    <>
      <AnimatePresence>
        <Faq
          ref={ref}
          variants={reveal}
          initial={inView ? "show" : "hidden"}
          animate={inView ? "show" : "hidden"}
        >
          <h2>
            {" "}
            Any Question <span>FAQ </span>
          </h2>
          <AnimateSharedLayout>
            <Toggle title="How Do I start ">
              <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt excepturi quibusdam eveniet adipisci rem officiis
                  libero hic praesentium dolorum maxime tenetur repudiandae,
                  consequuntur sed alias ducimus mollitia esse totam
                  accusantium!
                </p>
              </div>
            </Toggle>
            <Toggle title="Daily Schedule ">
              <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit.</p>
              </div>
            </Toggle>
            <Toggle title="Different payment methode ">
              <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit.</p>
              </div>
            </Toggle>
            <Toggle title="What products would you offer ?">
              <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit.</p>
              </div>
            </Toggle>
          </AnimateSharedLayout>
        </Faq>
      </AnimatePresence>
    </>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 0rem 0rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 1rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
