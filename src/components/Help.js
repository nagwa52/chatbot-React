import React from "react";

import "./knopf.css";

const Help = (props) => {
  const helpChoices = 
  // [
  //   {
  //     text: "Genre",
  //     handler: props.actionProvider.chooseGenre,
  //     id: 1
  //   },
  //   { text: "Autor", handler: props.actionProvider.chooseAuthor, id: 2 },
  //   { text: "Beliebtheit", handler: () => {}, id: 3 }
  // ];
  [
    {
      text: "Book a private appointment",
      handler: props.actionProvider.bookAppointment,
      id: 1
    },
    { text: "Make a legal aid application",
      handler: props.actionProvider.makeAidApplication,
      id: 2
    },
    {
      text: "I would like to have an update about my case",
      handler: props.actionProvider.recommend,
      id: 3
    },
    {
      text: "I would like to know about the mediation process",
      handler: props.actionProvider.recommend,
      id: 4
    },
    {
      text: "I would like a call back",
      handler: props.actionProvider.recommend,
      id: 5
    },
    {
      text: "I would like to talk to somebody about workplace mediation",
      handler: props.actionProvider.recommend,
      id: 6
    },
    {
      text: "Default",
      handler: props.actionProvider.recommend,
      id: 7
    },
  ];

  const buttonsMarkup = helpChoices.map((help) => (
    <button key={help.id} onClick={help.handler} className="knopf-button">
      {help.text}
    </button>
  ));

  return <div className="knopf-container">{buttonsMarkup}</div>;
};

export default Help;
