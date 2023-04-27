import React from "react";
const Data = (props) => {


  const openForm = (e) => {
    e.preventDefault();
    console.log(props)
    window.open(
      "https://reactform-382811.uc.r.appspot.com/",
      "_blank",
      "noreferrer"
    )
    if (props.updateCaseComponent) {
      props.actionProvider.thankForm();
    } else if (props.callBackComponent) {
      props.actionProvider.thankForm();
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
