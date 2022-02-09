import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postCreate, getGenres, getPlatforms } from "../../store/actions/index";


function control(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "a name is required";
  } else if (!input.description) {
    errors.description = "a description is required";
  } else if (!input.released) {
    errors.released = "a date is required";
  } else if (input.rating > 5) {
    errors.rating = "the rating top is 5";
  }
  return errors;
}

export default function Create() {
  const dispatch = useDispatch();
  const history = useHistory();
  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state) => state.platforms);
  const [errors, setErrors] = useState({});
  const [active, setActive] = useState(true);
  const [input, setInput] = useState({
    name: "",
    description: "",
    background_image: "",
    released: "",
    rating: "",
    genres: [],
    platforms: [],
  });

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getPlatforms());
  }, [dispatch]);

  useEffect(() => {
    if (
      input.name &&
      input.description &&
      input.released &&
      input.rating <= 5 &&
      input.rating.length > 0
    ) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [input, setActive]);

  const handlechange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setErrors(control({ ...input, [e.target.name]: e.target.value }));
  };

  const handleSelectGenres = (e) => {
    setInput({ ...input, genres: [...input.genres, { name: e.target.value }] });
  };

  const handleSelectPlatforms = (e) => {
    setInput({
      ...input,
      platforms: [...input.platforms, { platform: { name: e.target.value } }],
    });
  };

  const handleDeleteE = (e) => {
    setInput({ ...input, genres: [...input.genres.filter((g) => g !== e)] });
  };

  const handleDeleteP = (e) => {
    setInput({
      ...input,
      platforms: [...input.platforms.filter((x) => x !== e)],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postCreate(input));
    alert("Videogame created!");
    setInput({
      name: "",
      description: "",
      background_image: "",
      released: "",
      rating: "",
      genres: [],
      platforms: [],
    });
    history.push("/home");
  };

  return (
    <div>
      <Link to="/home">
        <button>Home</button>
      </Link>

      <h1>Create your videogame</h1>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>Name:</label>
            <input
              onChange={(e) => handlechange(e)}
              type="text"
              value={input.name}
              name="name"
            ></input>
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div>
            <label>Description:</label>
            <textarea
              onChange={(e) => handlechange(e)}
              value={input.description}
              name="description"
            ></textarea>
            {errors.description && <p>{errors.description}</p>}
          </div>
          <div>
            <label>Image:</label>
            <input
              onChange={(e) => handlechange(e)}
              type="text"
              value={input.background_image}
              name="background_image"
            ></input>
          </div>
          <div>
            <label>Relesead:</label>
            <input
              onChange={(e) => handlechange(e)}
              type="text"
              value={input.released}
              name="released"
            ></input>
            {errors.released && <p>{errors.released}</p>}
          </div>
          <div>
            <label>Rating:</label>
            <input
              onChange={(e) => handlechange(e)}
              type="text"
              value={input.rating}
              name="rating"
            ></input>
            {errors.rating && <p>{errors.rating}</p>}
          </div>

          <label>Genres:</label>
          <select onChange={(e) => handleSelectGenres(e)}>
            <option value="default">Genres</option>
            {genres.map((g) => (
              <option key={g.name} value={g.name}>
                {g.name}
              </option>
            ))}
          </select>
          <div>Genres selected:</div>
          <div>
            {input.genres.map((e) => (
              <div key={e.name}>
                {e.name}{" "}
                <button
                  onClick={() => {
                    handleDeleteE(e);
                  }}
                >
                  x
                </button>
              </div>
            ))}{" "}
          </div>

          <div>
            <label>Platforms:</label>
            <select onChange={(e) => handleSelectPlatforms(e)}>
              <option value="default">Platforms</option>
              {platforms.map((p) => (
                <option key={p.name} value={p.name}>
                  {p.name}
                </option>
              ))}
            </select>
            <label>Platforms selected:</label>
            <ul>
              {input.platforms.map((e) => (
                <div key={e.platform.name}>
                  {e.platform.name}
                  <button onClick={() => handleDeleteP(e)}>x</button>
                </div>
              ))}{" "}
            </ul>
          </div>

          <button disabled={active} type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
