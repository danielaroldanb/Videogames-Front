import React from "react";
import styles from "./Pagination.module.css"


export default function Pagination({ videogamesPerPage, allvideogames, pagination,currentPage }) {
  const pageNumbers = [];
  const numOfPages=Math.ceil(allvideogames/videogamesPerPage)

  for (let i = 1; i <= numOfPages ; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li className={styles.li}  key={number}><button className={number===currentPage?styles.lia:styles.lix} onClick={() => pagination(number)}>{number}</button></li>))}
      </ul>
    </nav>
  );
}
