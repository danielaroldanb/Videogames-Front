import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../store/actions/index";
import { useEffect } from "react";

export default function Detail(props) {
  const dispatch = useDispatch();
  const videogameById = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  return (
    <div>
      <div>
        <Link to="/home">
          <button>Home</button>
        </Link>
      </div>
      {videogameById.inDatabase ? (
        <div>
          <h1>{videogameById.name} </h1>
          <div>
            <img src={videogameById.background_image} alt="Not found" />
          </div>
          <div>
            {" "}
            <div>Released: {videogameById.released} </div>
          </div>
          <div>
            <div>Rating: {videogameById.rating} </div>
          </div>
          <div>
            <div>
              <div
                dangerouslySetInnerHTML={{ __html: videogameById.description }}
              />{" "}
            </div>
          </div>
          <div>
            <div>
              <div>
                <h4>Platforms:</h4>
                {videogameById.platforms?.map((g) => (
                  <div key={g.platform.name}>{g.platform.name}</div>
                ))}
              </div>
            </div>
            <div>
              <div>
                <h4>Genres:</h4>
                {videogameById.genres?.map((g) => (
                  <div key={g.name}>{g.name}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>{videogameById.name} </h1>
          <div>
            <img src={videogameById.background_image} alt="Not found" />
          </div>
          <div>
            {" "}
            <div>Released: {videogameById.released} </div>
          </div>
          <div>
            <div>Rating: {videogameById.rating} </div>
          </div>
          <div>
            <div>
              <div
                dangerouslySetInnerHTML={{ __html: videogameById.description }}
              />{" "}
            </div>
          </div>
          <div>
            <div>
              <div>
                <h4>Platforms:</h4>{" "}
                {videogameById.platforms?.map((g) => (
                  <div key={g}>{g}</div>
                ))}
              </div>
            </div>
            <div>
              <div>
                <h4>Genres: </h4>
                {videogameById.genres?.map((g) => (
                  <div key={g}>{g} </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
