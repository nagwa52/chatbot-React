import React from "react";
const Startagain = (props) => {

  const openForm = (e) => {
    e.preventDefault();
    props.actionProvider.startAgainButton();
  }

  return (
    <>
      <div className="knopf-container">
        <button className="knopf-button" onClick={openForm}>
          Start Again
        </button>
      </div>
    </>
  );
};
export default Startagain;
