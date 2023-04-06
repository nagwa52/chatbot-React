import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import validator from 'validator'

const Phone = (props) => {
  const [inputVal, setInputVal] = useState("")
  const [phoneError, setPhoneError] = useState('')

  const phone = [
    {
      // text: "What’s your phone number?",
      handler: props.actionProvider.moreInformationYes,
      id: 1,
    },
  ];

  const choiceHandler = (event) => {
    // console.log(event.target.value);
    if(inputVal && props.updateCaseComponent){
    window.sessionStorage.setItem("phone", inputVal);
		props.actionProvider.formSave()
    } else if(inputVal && props.callBackComponent){
      window.sessionStorage.setItem("phone", inputVal)
      props.actionProvider.formSaveCall()
    } else {
      props.actionProvider.formPhone()
    }
  };

  const validatePhone = (event) => {
    setInputVal(event.target.value)
  
    if (validator.isMobilePhone(inputVal)) {
        setPhoneError()
    } else {
        setPhoneError('Enter valid Phone Number!')
    }
  }

  const getInputID = (event) => {
    // let input = document.getElementById("myInput");
    event.preventDefault();
    choiceHandler();
  };


  const buttonsMarkup = phone.map((choice) => (
    // <Button
    //   key={choice.id}
    //   // value={choice.text}
    //   // onClick={choice.handler}
    //   // className="knopf-button"
    // >
    //   {choice.text}
    // </Button>
    <form key={choice.id} onSubmit={(e) => getInputID(e)}>
      {/* <label className="knopf-container"> */}
        {choice.text}
        <input type="text" name="email"  onChange={(e) => validatePhone(e)} className="knopf-button" />
      <FontAwesomeIcon icon={faPaperPlane} onClick={choiceHandler} />
        <div style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{phoneError}</div>
      {/* </label> */}
      {/* <input type="submit" value="Submit" onClick={choiceHandler} /> */}
    </form>
  ));

  return (
    <>
      <div className="knopf-container">{buttonsMarkup}</div>
    </>
  );
};

export default Phone;
