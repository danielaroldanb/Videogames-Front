import React from "react";
import styled from "styled-components";
import { FaLinkedinIn } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";


const NavBar = styled.div`
  background-color: rgba(19, 19, 31, 1);
  height: 8vh;
`;
const Social = styled.div`
  position: absolute;
  right: 1vw;
  top: 1vh;
  margin-left: 4rem;
  &:hover
`;
const Title = styled.h1`
  font-family:"Georgia";
  color: white;
  font-size: 3vh;
`;
const Subtitle = styled.h1`
  color: palevioletred;
  font-size: 3vh;
  position: absolute;
  left: 2%;
`;
function Nav() {
  return (
    <NavBar>
      <Title>
        VIDEOGAME
        <Subtitle>APP</Subtitle>
      </Title>
      <Social>
        <a href="https://www.linkedin.com/in/daniela-roldan/">
          <FaLinkedinIn size="3vh" color="white" />
        </a>
        <br></br>
        <a href="https://github.com/danielaroldanb/">
          <DiGithubBadge size="3vh" color="white" />
        </a>
      </Social>
    </NavBar>
  );
}

export default Nav;
