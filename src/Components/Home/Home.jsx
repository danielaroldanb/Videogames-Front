import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getVideogames,
  filterByGenres,
  filterByOrigin,
  alphaorder,
  ratingOrder,
} from "../../store/actions";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import styled from "styled-components";
import img from "../../assets/landing.jpg";

const Content = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  width: 100vw;
  height: 92vh;
  overflow-x: hidden;
`;

const Container = styled.div`
  position: absolute;
  top: 4vh;
  width: 100%;
  height: 100%;
  left:3%;
  
`;
const Filters = styled.div`
  position: relative;
  left: 45vh;
  width: 50%;
 
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Pagine = styled.div`
  display: flex;
  justify-content: center;
`;

const Items = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Search = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
position:relative;
margin-left:10%;
`;

const Select = styled.select`
display: inline-block;
width: 12vw;
cursor: pointer;
height: 4vh;
outline: 0;
border: 0;
border-radius: 5%;
background: rgba(19, 19, 31, 1);
color: white;
font-size: 0.9em;
letter-spacing: 1px;
border: 2px solid #7364d2;
position: relative;
`;


export default function Home() {
  const dispatch = useDispatch();
  const allvideogames = useSelector((state) => state.videogames);

  const [currentPage, setcurrentPage] = useState(1);
  const [videogamesPerPage, setvideogamesPerPage] = useState(15);

  const endPointSlice = currentPage * videogamesPerPage;
  const startPointSlice = endPointSlice - videogamesPerPage;
  const gamesRenderedPerPage = allvideogames.slice(
    startPointSlice,
    endPointSlice
  );
  const [order, setOrder] = useState("");

  const pagination = (pageNumber) => {
    setcurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getVideogames());
  }

  function handlefilterByGenres(g) {
    g.preventDefault();
    dispatch(filterByGenres(g.target.value));
    setcurrentPage(1);
  }

  function handlefilterByOrigin(o) {
    o.preventDefault();
    dispatch(filterByOrigin(o.target.value));
    setcurrentPage(1);
  }

  function handleSort(o) {
    o.preventDefault();
    dispatch(alphaorder(o.target.value));
    setcurrentPage(1);
    setOrder(o.target.value);
  }

  function handleSortRating(o) {
    o.preventDefault();
    dispatch(ratingOrder(o.target.value));
    setcurrentPage(1);
    setOrder(o.target.value);
  }

  return (
    <Content>
      <Link to="/create">
        <button>Create videogame</button>
      </Link>
      <Container>
        <Filters>
          <Search>
            <SearchBar />
            <Button
              onClick={(e) => {
                handleClick(e);
              }}
            >
              Reset filters
            </Button>
          </Search>
          <div>
            <br></br>
            <Items>
              <Select onChange={(o) => handleSort(o)}>
                <option  value="default">Alphabetical order:</option>
                <option value="asc-alfa">Ascending</option>
                <option value="desc-alfa">Descending</option>
              </Select>

              <Select onChange={(o) => handleSortRating(o)}>
                <option value="default">Order by rating:</option>
                <option value="asc-rating"> Rating Ascending</option>
                <option value="desc-rating">Rating Descending</option>
              </Select>

              <Select onChange={(g) => handlefilterByGenres(g)}>
                <option value="default">Choose the genres:</option>
                <option value="Indie">Indie</option>
                <option value="Adventure">Adventure</option>
                <option value="Strategy">Strategy</option>
                <option value="RPG">RPG</option>
                <option value="Action">Action</option>
                <option value="Shooter">Shooter</option>
                <option value="Casual">Casual</option>
                <option value="Simulation">Simulation</option>
                <option value="Puzzle">Puzzle</option>
                <option value="Arcade">Arcade</option>
                <option value="Platformer">Platformer</option>
                <option value="Racing">Racing</option>
                <option value="Massively Multiplayer">
                  Massively Multiplayer
                </option>
                <option value="Fighting">Fighting</option>
                <option value="Sports">Sports</option>
                <option value="Family">Family</option>
                <option value="Board Games">Board Games</option>
                <option value="Educational">Educational</option>
                <option value="Card">Card</option>
              </Select>

              <Select onChange={(o) => handlefilterByOrigin(o)}>
                <option value="All">Order by origin:</option>
                <option value="All">All</option>
                <option value="API">API</option>
                <option value="Database">Database</option>
              </Select>
            </Items>
          </div>
        </Filters>
        <br />
        <Pagine>
          <Pagination
            videogamesPerPage={videogamesPerPage}
            allvideogames={allvideogames.length}
            pagination={pagination}
            currentPage={currentPage}
          />
        </Pagine>

        <br />

        <Cards>
          {gamesRenderedPerPage &&
            gamesRenderedPerPage.map((v) => {
              return (
                <Card
                  key={v.id}
                  name={v.name}
                  background_image={v.background_image}
                  genres={v.genres}
                  rating={v.rating}
                  id={v.id}
                />
              );
            })}
        </Cards>
      </Container>
    </Content>
  );
}
