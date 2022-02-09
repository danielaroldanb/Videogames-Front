import React from "react";

export default function Pagination({
  videogamesPerPage,
  allvideogames,
  pagination,
  currentPage,
}) {
  const pageNumbers = [];
  const numOfPages = Math.ceil(allvideogames / videogamesPerPage);

  for (let i = 1; i <= numOfPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li key={number}>
              <button onClick={() => pagination(number)}>{number}</button>
            </li>
          ))}
      </ul>
    </nav>
  );
}
