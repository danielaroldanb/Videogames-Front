import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../store/actions/index";
import { useEffect } from "react";
import styled from "styled-components";
import img from "../../assets/landing.jpg";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5%;
  margin-right: 2%;
`;

const Name = styled.div`
  display: flex;
  justify-content: center;
  text-shadow: 5px 5px 5px gray;
  color: white;
  font-size: 250%;
  
`;
const Image = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const Img = styled.img`
  width: 20vw;
  height: 30vh;
  border-radius: 5px;
  @media (max-width: 576px) {
    width: 60vw;
    height: 30vh;
  }
`;

const All = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  width: 100vw;
  height: 92vh;
  overflow-x: hidden;
`;
const ContainerDes = styled.div`
  background-color: #ced4da;
  width: 90%;
  border-radius: 5px;
  padding: 1rem;
  margin-left: 5%;
  margin-right: 5%;
  resize: none;
  margin-bottom:1%;
  @media (max-width: 576px) {
    width: 80%;
  }
`;

const Released = styled.div`
  font-size: 20px;
  color: white;
`;
const ContainerRating = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom:0.2%;
`;

const Rating = styled.div`
  font-size: 20px;
  color: white;
`;
const ContainerReleased = styled.div`
  display: flex;
  justify-content: center;
  height: 2rem;
`;

const Description = styled.div`
  color: black;
  font-size: 15px;
  text-decoration: none;
  resize: none;
`;

const ContainerPlat = styled.div`
  color: black;
  width: 15vw;
  background-color: #00000095;
  margin-left: 35vw;
  @media (max-width: 576px) {
    width: 30vw;
  }  
`;

const ContainerGenres = styled.div`
  color: black;
  width: 15vw;
  background-color: #00000095;
  @media (max-width: 576px) {
    width: 25vw;
  }  
`;

const ContainerGenrePlatform = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  width: 100vw;
  @media (max-width: 576px) {
    width: 70vw;
  }
`;

const Platforms = styled.div`
  text-align: center;
  font-size: 20px;
  color: white;
`;

const Genres = styled.div`
  text-align: center;
  font-size: 20px;
  color: white;
`;

export default function Detail(props) {
  const dispatch = useDispatch();
  const videogameById = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  return (
    <All>
      <Container>
        <Link to="/home">
          <button>Home</button>
        </Link>
      </Container>
      {videogameById.inDatabase ? (
        <div>
          <Name>{videogameById.name} </Name>
          <Image>
            <Img src={videogameById.background_image} alt="Not found" />
          </Image>
          <ContainerReleased>
            <Released>Released: {videogameById.released} </Released>
          </ContainerReleased>
          <ContainerRating>
            <Rating>Rating: {videogameById.rating} </Rating>
          </ContainerRating>
          <ContainerDes>
            <Description>
              <div
                dangerouslySetInnerHTML={{ __html: videogameById.description }}
              />{" "}
            </Description>
          </ContainerDes>
          <ContainerGenrePlatform>
            <ContainerPlat>
              <Platforms>
                <h4>Platforms:</h4>
                {videogameById.platforms?.map((g) => (
                  <div key={g.platform.name}>{g.platform.name}</div>
                ))}
              </Platforms>
            </ContainerPlat>
            <ContainerGenres>
              <Genres>
                <h4>Genres:</h4>
                {videogameById.genres?.map((g) => (
                  <div key={g.name}>{g.name}</div>
                ))}
              </Genres>
            </ContainerGenres>
          </ContainerGenrePlatform>
        </div>
      ) : (
        <div>
          <Name>{videogameById.name} </Name>
          <Image>
            <Img src={videogameById.background_image} alt="Not found" />
          </Image>
          <ContainerReleased>
            <Released>Released: {videogameById.released} </Released>
          </ContainerReleased>
          <ContainerRating>
            <Rating>Rating: {videogameById.rating} </Rating>
          </ContainerRating>
          <ContainerDes>
            <Description>
              <div
                dangerouslySetInnerHTML={{ __html: videogameById.description }}
              />{" "}
            </Description>
          </ContainerDes>
          <ContainerGenrePlatform>
            <ContainerPlat>
              <Platforms>
                <h4>Platforms:</h4>{" "}
                {videogameById.platforms?.map((g) => (
                  <div key={g}>{g}</div>
                ))}
              </Platforms>
            </ContainerPlat>
            <ContainerGenres>
              <Genres>
                <h4>Genres: </h4>
                {videogameById.genres?.map((g) => (
                  <div key={g}>{g} </div>
                ))}
              </Genres>
            </ContainerGenres>
          </ContainerGenrePlatform>
        </div>
      )}
    </All>
  );
}
