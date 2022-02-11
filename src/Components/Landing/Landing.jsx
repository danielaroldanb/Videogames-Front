import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../../assets/landing.jpg";
import { IoPlayCircleOutline } from "react-icons/io5";

const Content = styled.div`
  background-image: url(${img});
  background-size: cover;
  height: 92vh;
`;

const Title = styled.h1`
  -webkit-text-stroke: 2px palevioletred;
  color: transparent;
  font-size: 5rem;
  position: absolute;
  top: 6rem;
  left: 40%;
  @media (max-width: 576px) {
    left: 10%;
    font-size: 4rem;
  }
`;
const Button = styled.button`
left: 50%;
position: relative;
border: none;
background-color: transparent;
cursor: pointer;
top:9rem;
&:hover {
opacity: 0.7;
}

@media (max-width: 576px) {
left: 40%;
top:15rem;
}
`;

const LandingPage = () => {
  return (
   
    <Content>
      <div>
        <Title>GAME ON!</Title>
        <Link to="/home">
          <Button>
            {<IoPlayCircleOutline size={60} style={{ color: "white" }} />}
          </Button>
        </Link>
      </div>
    </Content>
  );
};
export default LandingPage;
