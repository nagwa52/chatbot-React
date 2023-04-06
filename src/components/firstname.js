import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Firstname = (props) => {
  const [inputVal, setInputVal] = useState("")
  const firstname = [
    {
      // text: "What's your first name?",
      handler: props.actionProvider.moreInformationYes,
      id: 1,
    },
  ];

  const choiceHandler = (event) => {
    // console.log(event.target);
    if(inputVal && props.updateCaseComponent){
    window.sessionStorage.setItem("fname", inputVal)
    props.actionProvider.formLastName()
    } else if(inputVal && props.callBackComponent){
      window.sessionStorage.setItem("fname", inputVal)
      props.actionProvider.formLastNameCall()
    } else {
      props.actionProvider.formFirstName()
    }
  };


const getInputID = (event)=> {
  // let input = document.getElementById("myInput");
  event.preventDefault();
      choiceHandler()

}

  const firstNameVal = (event) => {
    setInputVal(event.target.value)
  }

  const buttonsMarkup = firstname.map((choice) => (
    // <Button
    //   key={choice.id}
    //   // value={choice.text}
    //   // onClick={choice.handler}
    //   // className="knopf-button"
    // >
    //   {choice.text}
    // </Button>
// console.log(props),
    <form key={choice.id} onSubmit={(e) => getInputID(e)}>
      {/* <label className="knopf-container"> */}
        {choice.text}
        <input type="text" name="fname" id="myInput"  onChange={firstNameVal} className="knopf-button" />
        
      {/* </label> */}
      {/* <input type="submit" value="Submit" onClick={choiceHandler} /> */}
      <FontAwesomeIcon icon={faPaperPlane} id="sendbtn" onClick={choiceHandler} />
    </form>
  ));



  return (
    <>
      <div className="knopf-container">{buttonsMarkup}</div>
    </>
  );
};

export default Firstname;
