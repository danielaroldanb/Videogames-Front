import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, background_image, genres, rating, id }) => {
  return (
    <div>
      <div>
        <Link to={`/home/${id}`}>
          <div>
            <img src={background_image} alt="Not found" width="300px" />
            <h3>{name}</h3>
            <h5>Rating: {rating}</h5>
            <h4>
              Genres:
              {genres && genres.map((g) => <li key={g}>{g}</li>)}
              {!genres && <li>No genres</li>}
            </h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
