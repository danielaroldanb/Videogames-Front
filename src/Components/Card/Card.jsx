import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css"

const Card = ({ name, background_image,genres, rating,id }) => {

  return (
    <div className={styles.body}>
    <div className={styles.container}>
      
    <Link className={styles.name} to={`/home/${id}`}>
    <div className={styles.card}>
    <img className={styles.image} src={background_image} alt="Not found" width="300px" />
      <h3>{name}</h3>
           <h5 className={styles.rating}>Rating: {rating}</h5>
      <h4 className={styles.genres}>
        Genres:
        {genres && genres.map((g) => <li key={g}>{g}</li>)}
        {!genres && <li>No genres</li>}
            </h4>
    </div></Link>
    </div>
    </div>
  );

};

export default Card;
