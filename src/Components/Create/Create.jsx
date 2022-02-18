import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postCreate, getGenres, getPlatforms } from "../../store/actions/index";
import styled from "styled-components";
import img from "../../assets/landing.jpg";

const All = styled.div`
background-image: url(${img});
background-repeat: no-repeat;
background-size: cover;
position: absolute;
width: 100vw;
height: 92vh;
overflow-x: hidden;
`;

const Button = styled.button`
padding: 10px 26px;
color: black;
background-color: e63946;
border-radius: 5px;
font-weight: bold;
font-size: 11px;
cursor: pointer;
`;

const Container = styled.div`
display: flex;
justify-content: center;
`;
const Label = styled.label`
color:white
`;

const Title = styled.div`
text-align: center;
color:white;
text-shadow: 5px 5px 5px pink;
`;
const Input = styled.input`
display: block;
justify-content:center;
height:2rem;
border-radius: 10px;
background-color:white;
padding-left: 20%;
width: 70vh;
`;
const Select = styled.select`
display: block;
justify-content:center;
height:2rem;
border-radius: 10px;
background-color:white;
padding-left: 20%;
width: 70vh;
`;

const Selected = styled.div`
color:white;
`;

const TextArea = styled.textarea`
justify-content:center;
height:6rem;
border-radius: 10px;
background-color:white;
padding-left: 20%;
width: 70vh;
`;

const Error = styled.p`
color:red
`;

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
    <All>
      <Link to="/home">
        <Button>Home</Button>
      </Link>

      <Title>CREATE YOUR VIDEOGAME</Title>
      <Container>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <Label>Name:</Label>
            <Input
              onChange={(e) => handlechange(e)}
              type="text"
              value={input.name}
              name="name"
            ></Input>
            {errors.name && <Error>{errors.name}</Error>}
          </div>
          <div>
            <Label>Description:</Label>
            <TextArea
              onChange={(e) => handlechange(e)}
              value={input.description}
              name="description"
            ></TextArea>
            {errors.description && <Error>{errors.description}</Error>}
          </div>
          <div>
            <Label>Image:</Label>
            <Input
              onChange={(e) => handlechange(e)}
              type="text"
              value={input.background_image}
              name="background_image"
            ></Input>
          </div>
          <div>
            <Label>Relesead:</Label>
            <Input
              onChange={(e) => handlechange(e)}
              type="text"
              value={input.released}
              name="released"
            ></Input>
            {errors.released && <Error>{errors.released}</Error>}
          </div>
          <div>
            <Label>Rating:</Label>
            <Input
              onChange={(e) => handlechange(e)}
              type="text"
              value={input.rating}
              name="rating"
            ></Input>
            {errors.rating && <Error>{errors.rating}</Error>}
          </div>

          <Label>Genres:</Label>
          <Select onChange={(e) => handleSelectGenres(e)}>
            <option value="default">Genres</option>
            {genres.map((g) => (
              <option key={g.name} value={g.name}>
                {g.name}
              </option>
            ))}
          </Select>
          <Label>Genres selected:</Label>
          <div>
            {input.genres.map((e) => (
              <Selected key={e.name}>
                {e.name}{" "}
                <button
                  onClick={() => {
                    handleDeleteE(e);
                  }}
                >
                  x
                </button>
              </Selected>
            ))}{" "}
          </div>

          <div>
            <Label>Platforms:</Label>
            <Select onChange={(e) => handleSelectPlatforms(e)}>
              <option value="default">Platforms</option>
              {platforms.map((p) => (
                <option key={p.name} value={p.name}>
                  {p.name}
                </option>
              ))}
            </Select>
            <Label>Platforms selected:</Label>
            <ul>
              {input.platforms.map((e) => (
                <Selected key={e.platform.name}>
                  {e.platform.name}
                  <button onClick={() => handleDeleteP(e)}>x</button>
                </Selected>
              ))}{" "}
            </ul>
          </div>

          <Button disabled={active} type="submit">
            Create
          </Button>
        </form>
      </Container>
    </All>
  );
}
