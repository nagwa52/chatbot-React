import React, { useState } from "react";
import "./knopf.css";
import Axios from "axios";
const Data = (props) => {
  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const dataFromSessionStorage = () => {
    for (const x of Object.entries(sessionStorage)) {
      switch (x[0]) {
        case "fname":
          userData.fname = x[1];
          console.log(userData);

          break;
        case "lname":
          userData.lname = x[1];
          break;
        case "email":
          userData.email = x[1];
          break;
        case "phone":
          userData.phone = x[1];
          break;
      }
    }
  };
  const postData = (e) => {
    e.preventDefault();
    dataFromSessionStorage();
    Axios.post(
      "https://9633-156-211-236-232.eu.ngrok.io/api/create",
      userData
    ).then((res) => {console.log("Data posted", res)
    props.actionProvider.chooseAnOption()}).catch((err) => {console.log(err);});
  };

  return (
    <>
      <div className="knopf-container">
        <button className="knopf-button" onClick={postData}>
          Save My Data
        </button>
      </div>
    </>
  );
};
export default Data;
