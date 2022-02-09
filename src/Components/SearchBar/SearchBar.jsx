import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../store/actions/index";
import styles from "./SearchBar.module.css"

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
    document.getElementById("search").value="";
  
  };

  return (
    <div>
      <input id="search" className={styles.input}
        onChange={(e) => handleInput(e)}
        type="text"
        placeholder="Search a videogame"
        
      ></input>
      <button className={styles.button} onClick={(e) => handleSubmit(e)} type="submit">
        Search
      </button>
    </div>
  );
}
