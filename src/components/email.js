import React, {useState} from "react";
import "./knopf.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import validator from 'validator'

const Email = (props) => {
  const [inputVal, setInputVal] = useState("")
  const [emailError, setEmailError] = useState('')

  const email = [
    {
      // text: "What's your email",
      handler: props.actionProvider.moreInformationYes,
      id: 1,
    },
  ];

  const choiceHandler = (event) => {
    // console.log(event.target.value);
    if(inputVal){
    window.sessionStorage.setItem("email", inputVal)
    
    props.actionProvider.formPhone()
    } else {
      props.actionProvider.formEmail()
    }
  };

  const validateEmail = (event) => {
    setInputVal(event.target.value)
  
    if (validator.isEmail(inputVal)) {
      setEmailError('')
    } else {
      setEmailError('Enter valid Email!')
    }
  }

  const buttonsMarkup = email.map((choice) => (
    // <Button
    //   key={choice.id}
    //   // value={choice.text}
    //   // onClick={choice.handler}
    //   // className="knopf-button"
    // >
    //   {choice.text}
    // </Button>
    <form key={choice.id}>
      {/* <label className="knopf-container"> */}
        {choice.text}
        <input type="text" name="email"  onChange={(e) => validateEmail(e)} className="knopf-button" />
      <FontAwesomeIcon icon={faPaperPlane} onClick={choiceHandler} />

        <div style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{emailError}</div>
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

export default Email;
