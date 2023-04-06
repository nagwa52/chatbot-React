import React from "react";

const Genre = (props) => {
  const genres = [
    {
      text: "I want more information",
      handler: props.actionProvider.moreInformation,
      id: 1
    },
  ];

  // const genreHandler = (event) => {
  //   console.log(event.target.value);
  //   props.actionProvider.recommend(event.target.value);
  // };

  const buttonsMarkup = genres.map((genre) => (
    <button
      key={genre.id}
      value={genre.text}
      onClick={genre.handler}
      className="knopf-button"
    >
      {genre.text}
    </button>
  ));

  return <div className="knopf-container">{buttonsMarkup}</div>;
};

export default Genre;
