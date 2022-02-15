import React from "react";
import styled from "styled-components";

export default function Pagination({
  videogamesPerPage,
  allvideogames,
  pagination,
  currentPage,
}) {
  const Nav = styled.div`
    margin: 20 px 0;
  `;

  const Ul = styled.div`
    list-style: none;
    text-align: center;
  `;

  const Li = styled.div`
    display: inline-block;
    margin-right: 10px;
  `;

  const Lix = styled.button`
    display: block;
    padding: 20px 40 px;
    color: white;
    background-color: palevioletred;
    padding: 4px 8px;
    text-decoration: none;
    cursor: pointer;
  `;
  const Lia = styled.button`
  display: block;
  padding: 20px 40 px;
  color:white;
  background-color: rgba(19, 19, 31, 1);
  padding: 4px 8px;
  text-decoration: none;
  cursor: pointer;
  `;

  const pageNumbers = [];
  const numOfPages = Math.ceil(allvideogames / videogamesPerPage);

  for (let i = 1; i <= numOfPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Nav>
      <Ul>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <Li key={number}>
              {" "}
              {number === currentPage ? (
                <Lix onClick={() => pagination(number)}>{number}</Lix>
              ) : (
                <Lia onClick={() => pagination(number)}>{number}</Lia>
              )}
            </Li>
          ))}
      </Ul>
    </Nav>
  );
}
