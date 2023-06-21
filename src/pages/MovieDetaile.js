import React, { useEffect, useState } from "react";
import styled from "styled-components";
//import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MovieState } from "../moviesStates";
//animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetaile = () => {
  const history = useLocation();
  const url = history.pathname;
  const [movies, SetMovies] = useState(MovieState);
  const [movie, SetMovie] = useState(null);

  //use effect
  useEffect(() => {
    console.log(url);
    const currentMovie = movies.filter((statemovie) => statemovie.url === url);
    SetMovie(currentMovie[0]);
    console.log(currentMovie);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details
          variants={pageAnimation}
          exit="exit"
          initial="hidden"
          animate="show"
        >
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </HeadLine>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

//award component
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

const Details = styled(motion.div)`
  color: white;
`;

const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  @media (max-width: 969px) {
    h2 {
      font-size: 2rem;
    }
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;
const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 50%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  @media (max-width: 969px) {
   padding: 0rem 2rem 0rem 2rem;
  }
`;

export default MovieDetaile;
