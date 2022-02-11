import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Cards = styled.div`
  width: 18vw;
  height: 42vh;
  border-radius: 8px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  margin: 20px;
  transition: all 0.25s;
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(0.5px) saturate(100%);
  &:hover {
    transform: translateY(-3%);
  }
  @media (max-width: 576px) {
    width: 80vw;
    height: 38vh;
  }
`;

const Name = styled.h3`
  color: white;
  font-family: "Georgia";
  font-size: 1.5rem;
  text-align: center;
  margin-top: 0.5%
   position:relative;
`;
const Image = styled.img`
  width: 18vw;
  height: 18vh;
  @media (max-width: 576px) {
    width: 80vw;
    height: 18vh;
  }
`;
const Rating = styled.div`
  color: green;
  font-weight: bold;
  position: absolute;
  font-family: "Georgia";
  font-size: 1rem;
  left: 10vw;
  top: 18.5vh;
  @media (max-width: 576px) {
    left: 25vw;
  }
`;

const Genres = styled.div`
  color: white;
  text-align: center;
  @media (max-width: 576px) {
    display: none;
  }
`;

const Button = styled.button`
  color: white;
  text-align: center;
  background-color: rgba(19, 19, 31, 1);
`;

const Details = styled.button`
  color: black;
  background-color: white;
  position: absolute;
  bottom: 2%;
  left: 40%;
`;

const Card = ({ name, background_image, genres, rating, id }) => {
  return (
    <div>
      <Cards>
        <Image src={background_image} alt="Not found" width="300px" />
        <Name>{name}</Name>
        <Rating>Rating: {rating}</Rating>
        <Genres>
          {genres &&
            genres.map((g) => (
              <Button disabled key={g}>
                {g}
              </Button>
            ))}
          {!genres && <li>No genres</li>}
        </Genres>
        <Link to={`/home/${id}`}>
          <Details>Details</Details>
        </Link>
      </Cards>
    </div>
  );
};

export default Card;
