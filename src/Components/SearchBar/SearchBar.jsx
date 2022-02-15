import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../store/actions/index";
import styled from "styled-components";
import { IoSearchSharp } from "react-icons/io5";

const Input = styled.input`
  color: white;
  position: relative;
  border-color: palevioletred;
  border-width: 2px;
  border-style: solid;
  background-color: rgba(19, 19, 31, 1);
  width: 400px;
  height: 2rem;
  border-radius: 0.5rem;
  box-sizing: border-box;
  padding: 0.5rem 4rem 0.5rem 0.5rem;
  outline: none;
`;
const Button = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  border-style: solid;
  border-width: 2px;
  color: var(--primary-color);
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
  transition: 250ms;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: red;
  }
  :-ms-input-placeholder {
     color: red;
  }

`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchByName(name));
    document.getElementById("search").value = "";
  };

  return (
    <Container>
      <Input
        id="search"
        onChange={(e) => handleInput(e)}
        type="text"
        placeholder="Search a videogame..."
        autoComplete="off"
        onKeyPress={(e) => {
          if (e.key === "Enter") handleSubmit(e);
        }}
      ></Input>
      <Button onClick={(e) => handleSubmit(e)} type="submit">
        <IoSearchSharp color="white" />
      </Button>
    </Container>
  );
}
