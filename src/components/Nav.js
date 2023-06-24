import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/artswebsite">
          Rayen Art
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/artswebsite">1. About Us </Link>
        </li>
        <li>
          <Link to="/our-work">2. Our Work </Link>
        </li>
        <li>
          <Link to="/contact-us">3. Contact Us </Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 2rem;
    font-weight: lighter;
    font-family: "Lobster", sans-serif;
  }
  li {
    position: relative;
    padding-left: 10rem;
  }
  @media (max-width: 969px) {
    flex-direction: column;
    gap: 20px;
    padding: 2rem 0rem;

    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

export default Nav;
