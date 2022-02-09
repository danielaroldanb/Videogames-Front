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
    <div>
      <div>
        <Link to="/create">
          <button>Create videogame</button>
        </Link>

        <button
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Get all videogames
        </button>
      </div>

      <div>
        <h1>VIDEOGAMES</h1>

        <div>
          <SearchBar />
        </div>

        <div>
          <div>
            <select onChange={(o) => handleSort(o)}>
              <option value="default">Alphabetical order:</option>
              <option value="asc-alfa">Ascending</option>
              <option value="desc-alfa">Descending</option>
            </select>

            <select onChange={(o) => handleSortRating(o)}>
              <option value="default">Order by rating:</option>
              <option value="asc-rating"> Rating Ascending</option>
              <option value="desc-rating">Rating Descending</option>
            </select>

            <select onChange={(g) => handlefilterByGenres(g)}>
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
            </select>

            <select onChange={(o) => handlefilterByOrigin(o)}>
              <option value="All">Order by origin:</option>
              <option value="All">All</option>
              <option value="API">API</option>
              <option value="Database">Database</option>
            </select>
          </div>
        </div>

        <br />
        <div>
          <Pagination
            videogamesPerPage={videogamesPerPage}
            allvideogames={allvideogames.length}
            pagination={pagination}
            currentPage={currentPage}
          />
        </div>

        <br />

        <div>
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
        </div>
      </div>
    </div>
  );
}
