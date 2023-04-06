import React, { useState } from "react";
import Axios from "axios";
const Data = (props) => {
  const [userData] = useState({
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


  const openForm = (e) => {
    e.preventDefault();
    window.open(
      "https://reactform-382811.uc.r.appspot.com/",
      "_blank",
      "noreferrer"
    )
    if (props.updateCaseComponent) {
      props.actionProvider.thankForm();
    } else if (props.callBackComponent) {
      props.actionProvider.afterCallBackForm();
    }
  }


  // const postData = (e) => {
  //   e.preventDefault();
  //   dataFromSessionStorage();
  //   Axios.post("https://82ad-156-194-18-67.eu.ngrok.io/api/create", userData)
  //     .then((res) => {
  //       console.log("Data posted", res);
  //       if (props.updateCaseComponent) {
  //         props.actionProvider.thankForm();
  //       } else if (props.callBackComponent) {
  //         props.actionProvider.afterCallBackForm();
  //       }
  //     })
  //     .catch((err) => {
  //       // props.actionProvider.formFirstName();
  //       if (props.updateCaseComponent) {
  //         props.actionProvider.thankForm();
  //       } else if (props.callBackComponent) {
  //         props.actionProvider.afterCallBackForm();
  //       }
  //       console.log(props);
  //     });
  // };

  return (
    <>
      <div className="knopf-container">
        <button className="knopf-button" onClick={openForm}>
          Click Here
        </button>
      </div>
    </>
  );
};
export default Data;
