import React from "react";

import "./knopf.css";

const Book = (props) => {
  return (
    <div>
      <div>{props.books.title}</div>
      <div>{props.books.id}</div>
    </div>
  );
};

export default Book;
