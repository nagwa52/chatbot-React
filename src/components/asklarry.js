import React from "react";
const Asklarry = (props) => {

  const openForm = (e) => {
    e.preventDefault();
    props.actionProvider.startAgainButton();
  }

  return (
    <>
      <div className="knopf-container">
        <button className="knopf-button" onClick={openForm}>
          Ask Larry
        </button>
      </div>
    </>
  );
};
export default Asklarry;
