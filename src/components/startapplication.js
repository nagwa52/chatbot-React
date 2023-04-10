import React, { useState } from "react";
import Help from "./Help";
const Data = (props) => {
  const openForm = () => {
    if (props.passporting) {
      window.open(
        "https://www.directmediationservices.co.uk/laa-passporting/",
        "_blank",
        "noreferrer"
      );
    } else if (props.Homeless) {
      window.open(
        "https://www.directmediationservices.co.uk/laa-low-income/",
        "_blank",
        "noreferrer"
      );
    }
  };

  openForm();
  return (
    <>
      <Help />
    </>
  );
};
export default Data;
